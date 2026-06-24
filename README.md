# Auto Resume Downloads

Небольшое расширение для Chrome, которое автоматически возобновляет прерванные загрузки.

## Что делает расширение

Auto Resume Downloads отслеживает прерванные загрузки в Chrome и пытается автоматически возобновить их.

Полезно, если:

* интернет-соединение нестабильное;
* большие файлы часто обрываются;
* Chrome ждёт, пока вы вручную нажмёте «Возобновить»;
* временная ссылка может истечь, если быстро не продолжить загрузку.

## Приватность

Расширение не собирает, не хранит, не передаёт и не продаёт пользовательские данные.

Оно использует только локальный API загрузок Chrome, чтобы обнаруживать прерванные загрузки и возобновлять их внутри браузера.

## Разрешения

Расширение использует:

* `downloads` — чтобы обнаруживать и возобновлять прерванные загрузки;
* `alarms` — чтобы периодически проверять, нет ли прерванных загрузок.

## Установка

1. Скачайте или клонируйте этот репозиторий.
2. Откройте Chrome.
3. Перейдите на страницу `chrome://extensions/`.
4. Включите **Режим разработчика**.
5. Нажмите **Загрузить распакованное расширение**.
6. Выберите папку, в которой находится файл `manifest.json`.

## Лицензия

MIT License.


# Auto Resume Downloads

A tiny Chrome extension that automatically resumes interrupted Chrome downloads.

## What it does

Auto Resume Downloads watches for interrupted downloads in Chrome and tries to resume them automatically.

Useful when:

* your internet connection is unstable;
* large downloads often stop;
* Chrome waits for you to manually click "Resume";
* temporary download links may expire if you do not resume quickly.

## Privacy

This extension does not collect, store, transmit, or sell any user data.

It only uses Chrome's local downloads API to detect interrupted downloads and resume them inside your browser.

## Permissions

The extension uses:

* `downloads` — to detect and resume interrupted downloads;
* `alarms` — to periodically check for interrupted downloads.

## Installation

1. Download or clone this repository.
2. Open Chrome.
3. Go to `chrome://extensions/`.
4. Enable **Developer mode**.
5. Click **Load unpacked**.
6. Select the folder containing `manifest.json`.

## License

MIT License.
