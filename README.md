# Unturned Server Forms

Сайт для отправки идей и жалоб на сервер Unturned с интеграцией Discord.

## Возможности

- Форма для отправки идей по улучшению сервера
- Форма для подачи жалоб на игроков
- Автоматическая отправка в Discord через Webhooks
- Современный дизайн с адаптивной версткой

## Настройка Discord Webhooks

### Шаг 1: Создание Webhook в Discord

1. Откройте настройки вашего Discord канала
2. Перейдите в раздел Integrations → Webhooks
3. Нажмите "New Webhook"
4. Создайте два webhook:
   - Один для идей (например, "Идеи сервера")
   - Один для жалоб (например, "Жалобы")
5. Скопируйте URL каждого webhook

### Шаг 2: Добавление Webhook URLs в код

Откройте файл `index.html` и найдите эти строки в начале скрипта:

```javascript
const IDEA_WEBHOOK_URL = 'YOUR_IDEA_WEBHOOK_URL_HERE';
const COMPLAINT_WEBHOOK_URL = 'YOUR_COMPLAINT_WEBHOOK_URL_HERE';
```

Замените на ваши реальные webhook URLs:

```javascript
const IDEA_WEBHOOK_URL = 'https://discord.com/api/webhooks/...';
const COMPLAINT_WEBHOOK_URL = 'https://discord.com/api/webhooks/...';
```

## Деплой на GitHub Pages

### Шаг 1: Создайте репозиторий на GitHub

1. Перейдите на GitHub и создайте новый репозиторий
2. Назовите его, например, `unturned-server-forms`

### Шаг 2: Загрузите файлы

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/unturned-server-forms.git
git branch -M main
git push -u origin main
```

### Шаг 3: Включите GitHub Pages

1. Откройте Settings → Pages в вашем репозитории
2. В разделе Source выберите ветку `main` и папку `/ (root)`
3. Нажмите Save

Сайт будет доступен по адресу: `https://USERNAME.github.io/unturned-server-forms/`

## Локальное тестирование

Просто откройте файл `index.html` в браузере. Все работает без установки зависимостей.

## Структура проекта

```
unturned-tg-site/
├── index.html    # Основной файл сайта
├── README.md     # Документация
└── .gitignore    # Git конфигурация
```

## Технологии

- React 18 (CDN)
- Tailwind CSS (CDN)
- Discord Webhooks API

## Безопасность

Webhook URLs будут видны в исходном коде на GitHub. Рекомендуется:
- Создать отдельный Discord канал только для форм
- Настроить права доступа к каналу
- При необходимости можно регенерировать webhooks
