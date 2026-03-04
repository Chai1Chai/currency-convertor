# Currency Converter App

A React currency converter application that allows users to convert between different currencies in real time using exchange rate data from an external API.

---

## 🚀 Features

- Real-time currency conversion
- Fetching live exchange rates from API
- Two-way conversion logic
- Dynamic currency selection
- Automatic recalculation when currency changes
- Clean responsive UI

---

## 🛠 Technologies Used

- React
- React Hooks (`useState`, `useEffect`)
- JavaScript (ES6)
- SCSS
- ExchangeRate API

---

## 🌐 Live Demo

👉 **Try it here:**  
https://Chai1Chai.github.io/currency-convertor/

---

## 🔄 How It Works

- Exchange rates are fetched from an external API on component mount
- The app stores conversion rates in state
- Changing amount or currency automatically recalculates the result
- Supports RUB, USD, EUR, GBP

---

## 📂 Project Structure

- `App.js` — main logic and API fetching
- `Block.jsx` — reusable currency input block
- `index.js` — application entry point
- `index.scss` — styling
- `index.html` — base HTML template

---

## 📦 Installation

```bash
git clone https://github.com/Chai1Chai/currency-convertor.git
cd currency-convertor
npm install
npm start
