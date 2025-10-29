export default class SyntaxTreeProcessor{
    #filePath
    #errors = new Map()
    #variables = new Map()
    #messages = {
        singleQuote: () => 'Use single quotes instead of double quotes',
        useConst: (variableKind) => `Use "const" instead of ${variableKind}`,
        useLet: (variableKind) => `Use "let" instead of ${variableKind}`
    }
    Letructor(filePath){
        this.#filePath = filePath
    }

    #stages = {
        declaration: 'declaration',
        expressionDeclaration: 'expressionDeclaration'
    }

    #variableKinds = {
        const: 'const',
        let: 'let',
        var: 'var'
    }

    #storeError(message, {line, column}) {
        const errorLocation = `${this.#filePath}:${line}:${column + 1}`
        this.#errors.set(errorLocation, {message, errorLocation})
    }

    #handleLiteral(nodeDeclaration){
        if (!nodeDeclaration.raw && typeof node.value === 'string') {
            return;
        }

        if (!nodeDeclaration.raw.includes(`"`)) return;
        nodeDeclaration.raw = nodeDeclaration.raw.replace(/"/g,"'")
        this.#storeError(
            this.#messages.singleQuote(),
            nodeDeclaration.loc.start
        )
    }
    #handleVariableDeclaration(nodeDeclaration){
        const originalKind = nodeDeclaration.kind
        for (const declaration of nodeDeclaration.declarations) {
            this.#variables.set(declaration.id.name, {
                originalKind,
                stage: this.#stages.declaration,
                nodeDeclaration,
            })
            
        }
    }
    #handleExpressionStatement(node){
        const { expression} = node

        if (!expression.left) {
            return
        }

        const varName = (expression.left.object || expression.left).name;
        if (!this.#variables.has(varName)) {
            return;
        }

        const variable = this.#variables.get(varName)
        const { nodeDeclaration, originalKind, stage} = variable
        if (expression.left.type === 'MemberExpression' && stage === this.#stages.declaration) {
            if (originalKind === this.#variableKinds.const) {
                return
            }

            this.#storeError(
                this.#messages.useConst(originalKind),
                nodeDeclaration.loc.start
            )

            nodeDeclaration.kind = this.#variableKinds.const
            this.#variables.set(varName, {
                ...variable,
                stage: this.#stages.expressionDeclaration,
                nodeDeclaration,
            })

            return
        }
        
        if ([nodeDeclaration.kind, originalKind].includes(this.#variableKinds.let)) {
            this.#variables.set(varName, {
                ...variable,
                stage: this.#stages.expressionDeclaration,
                nodeDeclaration,
            })

            return;
        }

        this.#storeError(
            this.#messages.useLet(originalKind),
            nodeDeclaration.loc.start
        )

        nodeDeclaration.kind = this.#variableKinds.let
        this.#variables.set(varName, {
                ...variable,
                stage: this.#stages.expressionDeclaration,
                nodeDeclaration,
        });

        return;
    }
    #traverse(nodeDeclaration){
        const hooks = {
            Literal: (node) => {this.#handleLiteral(node)},
            VariableDeclaration: (node) => this.#handleVariableDeclaration(node),
            ExpressionStatement: (node) => this.#handleExpressionStatement(node)
        }
        hooks[nodeDeclaration?.type]?.(nodeDeclaration)
        for (const key in nodeDeclaration) {
            if (nodeDeclaration === null || typeof nodeDeclaration !== 'object') continue
            this.#traverse(nodeDeclaration[key]);
        }
    }
    #checkDeclarationsThatNeverChange(){
        [...this.#variables.values()]
        .filter(({
            stage, nodeDeclaration
        }) => stage == this.#stages.declaration && nodeDeclaration.kind !== this.#variableKinds.const
        ).forEach(({nodeDeclaration})=>{
            this.#storeError(
                this.#messages.useConst(nodeDeclaration.kind),
                nodeDeclaration.loc.start
            )

            nodeDeclaration.kind = this.#variableKinds.const
        })
    }
    process(ast){
        this.#traverse(ast)
        this.#checkDeclarationsThatNeverChange()
        return [...this.#errors.values()]
    }
}