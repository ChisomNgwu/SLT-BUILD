# 🛍️ eCommerce Webpage (React + TypeScript + RTK Query)

This is a modern and responsive **eCommerce webpage** built with **React**, **TypeScript**, **Redux Toolkit**, **RTK Query**, and **vanilla CSS**. 
A core feature of this app is a dynamic product section that fetches and displays product data from a custom API using RTK Query.

---

## ⚙️ Tech Stack

- **Frontend**: React + TypeScript
- **State Management**: Redux Toolkit (RTK)
- **API Data Fetching**: RTK Query
- **Styling**: Vanilla CSS (modular and responsive)
- **API**: Custom dummy API serving product data

---

## 🚀 Features

- Product listing section with live API data
- Global state management with Redux Toolkit
- Data caching and auto-refetching using RTK Query
- Clean, minimal, and responsive UI
- Loading and error state handling
- Modular and scalable folder structure

---

## 🔌 Product API Integration

The **product section** is powered by your custom API and uses **RTK Query** to fetch data.

### 📡 API Endpoint

src/
├── components/
│   └── Button.tsx
│   └── Button.css
├── features/products
│            └── productsApi.ts
├── store/
│   └── store.ts
├── pages/bandagepage/
│         └── Homepage.tsx
│         └── Homepage.css
│         └── Mediaquery.css
├── App.tsx
├── main.tsx
├── index.css
├── App.css









































# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
