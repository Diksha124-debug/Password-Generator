# 🔐 React Password Generator App

A modern and customizable **Password Generator** built using React.  
This project allows users to generate strong and secure passwords based on selected criteria such as lowercase, uppercase, numbers, and symbols.

---

## 🚀 Features

- 🔢 Adjustable password length (1–30 characters)
- 🔡 Include lowercase letters (a-z)
- 🔠 Include uppercase letters (A-Z)
- 🔢 Include numbers (0–9)
- 🔣 Include special symbols (@, #, $, etc.)
- ⚡ One-click password generation
- 📋 Copy password to clipboard
- ⏱️ Auto copy status feedback ("copy → copied → reset")
- ❌ Input validation for empty selection

---

## 🧩 Project Structure
src/
│
├── components/
│ └── PasswordGenerator.jsx # Main password generator component
│
├── App.jsx # Root component
└── index.js

---

## 🧠 How It Works

### 🔹 State Management
The app uses React `useState` hooks to manage:

- `length` → Password length
- `lower` → Lowercase toggle
- `upper` → Uppercase toggle
- `number` → Numbers toggle
- `symbols` → Symbols toggle
- `password` → Generated password
- `text` → Copy button status

---

### 🔹 Password Generation Logic

When user clicks **Generate Password**, the app:

1. Checks if at least one option is selected
2. Builds a character pool based on selections:
   - `a-z` for lowercase  
   - `A-Z` for uppercase  
   - `0-9` for numbers  
   - `!@#...` for symbols  
3. Randomly generates password using:
   ```js
   Math.floor(Math.random() * str.length)