[![en](https://img.shields.io/badge/lang-en-blue.svg)](README.md)

# 📘 +PraTI - Lista de Exercícios 2

Este repositório contém soluções para uma série de exercícios de programação desenvolvidos para o **Módulo 01 - Introdução à Computação: Algoritmos e Estruturas de Dados** no programa [**+PraTI**](https://www.maisprati.com.br/) Full Stack Jr. Developer.

Os exercícios abordam diversos conceitos de programação, incluindo:
- 🧮 Validação de datas
- 🎲 Jogo de adivinhação com entrada do usuário
- 📝 Manipulação de strings e arrays
- 🔁 Recursão
- ⚡ Debounce e memoização
- 🗂️ Transformação e agrupamento de dados

Cada exercício está implementado em um arquivo separado, utilizando JavaScript (para execução no terminal) ou HTML+JavaScript (para interação no navegador).

---

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) – Necessário para executar arquivos JavaScript no terminal.
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) – Usado para entrada do usuário em alguns exercícios de terminal.
- Navegador Web – Necessário para exercícios em HTML.
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) (extensão do VS Code) – Opcional, para executar arquivos `.js` com um clique.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (extensão do VS Code) – Opcional, para rodar arquivos `.html` facilmente.

---

## ⚙️ Instalação e Configuração

> **Nota:** O pacote `prompt-sync` já está incluído no `package.json`.

### 1. Clone o repositório
```bash
git clone <url-do-seu-repositorio>
cd Lista-de-Exercios-2-MaisPraTI
```

### 2. Instale as dependências
```bash
npm install
```

---

## ▶️ Executando os Exercícios

### Exercícios para Terminal

- **EX01.js, EX02.js, EX03.js, EX04.js, EX07.js, EX08.js, EX09.js**
  - Execute estes arquivos no terminal:

    ```bash
    node EX01.js
    ```

  - **EX02.js** e **EX03.js** requerem entrada do usuário e usam `prompt-sync`.

#### Alternativa: Usando Code Runner (VS Code)

- Com a extensão [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) instalada:
  - Abra o arquivo `.js` desejado.
  - Clique no botão "Run Code" no canto superior direito ou pressione <kbd>Ctrl+Alt+N</kbd>.

### Exercícios para Navegador

- **EX05.html, EX06.html**
  - Abra esses arquivos no seu navegador.
  - Para melhores resultados, use a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code:
    1. Clique com o botão direito no arquivo no Explorer.
    2. Selecione **"Open with Live Server"**.

---

## 📂 Estrutura do Projeto

```
Lista-de-Exercios-2-MaisPraTI/
├── EX01.js
├── EX02.js
├── EX03.js
├── EX04.js
├── EX05.html
├── EX06.html
├── EX07.js
├── EX08.js
├── EX09.js
├── package.json
├── README.md
└── README.pt-br.md
```

---

## 📝 Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).

---

## 🤝 Agradecimentos

Projeto desenvolvido como parte do programa educacional **+PraTI - Full Stack Jr. Developer**, promovido pela [Codifica](https://www.codificaedu.com.br/) e parceiros.

---