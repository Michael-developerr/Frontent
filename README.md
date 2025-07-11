# 🚀 Repositor Project

> Миграция с Webpack 4 на Webpack 5 • React + TypeScript + FSD • Redux Toolkit • i18n • Storybook + Chromatic • Jest + RTL • CI/CD • JSON Server

---

## 📦 Технологии

⚛ React + TypeScript

🏗 Webpack 5 — с кастомной конфигурацией

🔄 Babel — трансформация modern JavaScript

🧱 FSD (Feature-Sliced Design) — модульная архитектура проекта

🎨 SCSS Modules — стилизация с изоляцией стилей

🧪 Jest — unit-тестирование компонентов и логики

🧼 ESLint + Stylelint + Prettier — контроль и автоматическое исправление качества кода

🕹 Polyfills — поддержка старых браузеров (core-js, regenerator-runtime)

🔧 Redux Toolkit — современное управление состоянием

🌍 i18next — интернационализация и поддержка нескольких языков

🧪 React Testing Library — тестирование UI с точки зрения пользователя

📚 Storybook — документация компонентов

📸 Chromatic — визуальное тестирование и публикация Storybook

🔌 JSON Server — мок API для разработки

## 🚀 CI/CD — автоматизация с GitHub Actions или GitLab CI

## 🛠 Скрипты

| Скрипт                  | Назначение                                   |
| ----------------------- | -------------------------------------------- |
| `npm run start`         | Запуск dev-сервера на `localhost:3000`       |
| `npm run build`         | Сборка проекта (по умолчанию в `production`) |
| `npm run build:prod`    | Сборка в прод-режиме                         |
| `npm run build:dev`     | Сборка в dev-режиме                          |
| `npm run lint:ts`       | Проверка TypeScript/TSX файлов через ESLint  |
| `npm run lint:ts:fix`   | Автоисправление ошибок ESLint                |
| `npm run lint:scss`     | Проверка SCSS файлов через Stylelint         |
| `npm run lint:scss:fix` | Автоисправление ошибок Stylelint             |
| `npm run unit`          | Запуск тестов с использованием Jest          |
| `npm run storybook`     | Локальный запуск Storybook                   |
| `npm run chromatic`     | Публикация Storybook в Chromatic             |
| `npm run server`        | Запуск JSON Server на localhost:8000         |

---

## 📁 Архитектура проекта

Проект построен по принципам **Feature-Sliced Design**:
