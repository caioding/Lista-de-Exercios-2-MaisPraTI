[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](README.pt-br.md)

# 📘 +PraTI - Exercise List 2

This repository contains solutions for a set of programming exercises developed for **Module 01 - Introduction to Computer Science: Algorithms and Data Structures** in the [**+PraTI**](https://www.maisprati.com.br/) Full Stack Jr. Developer program.

The exercises cover a variety of programming concepts, including:
- 🧮 Date validation
- 🎲 Guessing game with user input
- 📝 String and array manipulation
- 🔁 Recursion
- ⚡ Debounce and memoization
- 🗂️ Data transformation and grouping

Each exercise is implemented in a separate file, using either JavaScript (for terminal execution) or HTML+JavaScript (for browser-based interaction).

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/) – Required to run JavaScript files in the terminal.
- [prompt-sync](https://www.npmjs.com/package/prompt-sync) – Used for user input in some terminal-based exercises.
- Web Browser – Required for HTML-based exercises.
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) (VS Code extension) – Optional, for running `.js` files with a single click.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (VS Code extension) – Optional, for running `.html` files easily.

---

## ⚙️ Installation and Setup

> **Note:** The `prompt-sync` package is already included in the `package.json`.

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd Lista-de-Exercios-2-MaisPraTI
```

### 2. Install dependencies
```bash
npm install
```

---

## ▶️ Running the Exercises

### Terminal-based Exercises

- **EX01.js, EX02.js, EX03.js, EX04.js, EX07.js, EX08.js, EX09.js**
  - Run these files in the terminal:

    ```bash
    node EX01.js
    ```

  - **EX02.js** and **EX03.js** require user input and use `prompt-sync`.

#### Alternative: Using Code Runner (VS Code)

- With the [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) extension installed:
  - Open the desired `.js` file.
  - Click the "Run Code" button in the top right, or press <kbd>Ctrl+Alt+N</kbd>.

### Browser-based Exercises

- **EX05.html, EX06.html**
  - Open these files in your web browser.
  - For best results, use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code:
    1. Right-click the file in the Explorer.
    2. Select **"Open with Live Server"**.

---

## 📂 Project Structure

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

## 📝 License

This project is licensed under the [MIT](LICENSE) license.

---

## 🤝 Acknowledgements

Project developed as part of the educational program **+PraTI - Full Stack Jr. Developer**, promoted by [Codifica](https://www.codificaedu.com.br/) and partners.

---