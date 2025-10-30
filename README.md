---
# ESLint Clone 🧠

## English

### 📌 Project Description

This project is an **educational reproduction of ESLint**, built from scratch to understand how static code analysis tools work.
The goal is to explore **parsing, syntax trees (ASTs), rule creation, and linting logic**, replicating the core functionality of the original ESLint.

It’s not meant to replace ESLint — it’s a **learning-oriented project** to dive deep into how code linters analyze and enforce coding standards.

### 🚀 Features

* Custom implementation of an ESLint-like linter
* JavaScript parser using **Abstract Syntax Trees (AST)**
* Detection of common code issues (unused variables, bad indentation, etc.)
* Custom rule system
* CLI interface for linting files
* Modular and extensible design

### 🧩 How It Works

1. **Parsing:** Source code is parsed into an AST.
2. **Rule Application:** Each rule analyzes the AST to detect specific issues.
3. **Reporting:** The linter outputs warnings and errors with file locations.

### 🛠️ Technologies Used

* **Node.js**
* **JavaScript (ES6)**
* **Acorn / Esprima** (for AST parsing)
* **Commander.js** (for CLI support)

### 🔧 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Viitor22/ESLint-Clone.git
   ```
2. Navigate to the project folder:

   ```bash
   cd ESLint-Clone
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Run the linter:

   ```bash
   node index.js path/to/your/file.js
   ```
   ou
   ```bash
   eslint-clone --file path/to/your/file.js
   ```

### 📊 Example Usage

```bash
 eslint-clone --file example/test.js
```

Output:

```
[Warning] Line 3: Use single quotes instead of double quotes 
[Error]   Line 5: Use "const" instead of "var"
```

### 🧠 Learning Objectives

* Understand how linters parse and analyze code
* Learn how ASTs represent JavaScript source
* Practice modular architecture and rule-based systems
* Explore CLI tool development in Node.js

### 📌 Contributing

This repository is open for learning and experimentation!
Feel free to fork it, improve the rules, or extend the CLI capabilities.

---

## Português 🇧🇷

### 📌 Descrição do Projeto

Este projeto é uma **reprodução educacional do ESLint**, criada do zero para compreender como funcionam as ferramentas de análise estática de código.
O objetivo é explorar **parsing, árvores de sintaxe abstrata (ASTs), criação de regras e lógica de linting**, replicando as principais funcionalidades do ESLint original.

Não se trata de substituir o ESLint — mas sim de um projeto **voltado ao aprendizado**, ideal para quem deseja entender os bastidores de um linter.

### 🚀 Funcionalidades

* Implementação personalizada de um linter similar ao ESLint
* Parser JavaScript utilizando **AST (Abstract Syntax Tree)**
* Detecção de erros comuns (variáveis não usadas, indentação incorreta, etc.)
* Sistema de regras customizável
* Interface de linha de comando (CLI)
* Estrutura modular e extensível

### 🧩 Como Funciona

1. **Parsing:** O código-fonte é convertido em uma AST.
2. **Aplicação das Regras:** Cada regra analisa a AST em busca de padrões e erros.
3. **Relatório:** O linter retorna avisos e erros com número da linha e detalhes.

### 🛠️ Tecnologias Utilizadas

* **Node.js**
* **JavaScript (ES6)**
* **Acorn / Esprima** (para parsing de AST)
* **Commander.js** (para a interface CLI)

### 🔧 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Viitor22/ESLint-Clone.git
   ```
2. Acesse a pasta do projeto:

   ```bash
   cd ESLint-Clone
   ```
3. Instale as dependências (se houver):

   ```bash
   npm install
   ```
4. Execute o linter:

   ```bash
   node index.js caminho/para/seu/arquivo.js
   ```
   ou
   ```bash
   eslint-clone --file path/to/your/file.js
   ```

### 📊 Exemplo de Uso

```bash
eslint-clone --file exemplo/teste.js
```

Saída:

```
[Warning] Line 3: Use single quotes instead of double quotes 
[Error]   Line 5: Use "const" instead of "var"
```

### 🧠 Objetivos de Aprendizado

* Entender como linters analisam código
* Aprender sobre ASTs e parsing de JavaScript
* Praticar arquitetura modular e sistemas baseados em regras
* Desenvolver ferramentas CLI com Node.js

### 📌 Contribuição

Este repositório é voltado ao aprendizado e experimentação!
Sinta-se à vontade para fazer um fork, criar novas regras ou aprimorar o CLI.

---

📩 For any inquiries or suggestions, contact: [your email or GitHub link]

---
