# 📊 Analytics Setup Summary

## Два отдельных проекта с разными кампаниями

---

## 🎨 Bastian (Main Project)

**Папка:** `/bastian/`  
**URL:** http://localhost:8000/

### Google Analytics
- **Measurement ID:** G-9NB21PKL88
- **Clarity Project:** v51aiaw6lm

### События (без префикса)
- `buy_button_click`
- `download_button_click`
- `audio_play`, `audio_pause`, `audio_complete`
- `story_card_click`
- `navigation_click`
- `carousel_interaction`
- `check_guides_click`
- `footer_link_click`
- `page_view`

### Тестирование
- **Основная страница:** http://localhost:8000/
- **Тест страница:** http://localhost:8000/analytics-test.html
- **Документация:** `/bastian/ANALYTICS_EVENTS.md`
- **Инструкции:** `/bastian/TESTING_GUIDE.md`

---

## 🔴 Stranger Things

**Папка:** `/bastian/stranger-things/`  
**URL:** http://localhost:8000/stranger-things/

### Google Analytics
- **Measurement ID:** G-99MHLJW6TW
- **Clarity Project:** v51pbngtlm

### События (с префиксом `stranger_things_`)
- `stranger_things_buy_button_click`
- `stranger_things_preview_locations_click`
- `stranger_things_stripe_buy_button_click`
- `stranger_things_location_card_viewed`
- `stranger_things_cta_section_viewed`
- `stranger_things_scroll_depth`
- `stranger_things_footer_link_click`
- `page_view`

### Тестирование
- **Основная страница:** http://localhost:8000/stranger-things/
- **Тест страница:** http://localhost:8000/stranger-things/analytics-test.html
- **Документация:** `/bastian/stranger-things/STRANGER_THINGS_ANALYTICS.md`

---

## ✅ Что сделано

### Для Bastian:
1. ✅ Добавлен трекинг всех кнопок Buy
2. ✅ Добавлен трекинг всех кнопок Download
3. ✅ Трекинг аудиоплееров (play, pause, complete)
4. ✅ Трекинг навигации и карусели
5. ✅ Улучшена инициализация GA с Measurement ID
6. ✅ Создана тестовая страница
7. ✅ Создана документация

### Для Stranger Things:
1. ✅ Настроен отдельный Measurement ID (G-99MHLJW6TW)
2. ✅ Все события с префиксом `stranger_things_`
3. ✅ Трекинг кнопок Buy и Preview Locations
4. ✅ Трекинг Stripe Buy Button (с Shadow DOM)
5. ✅ Трекинг просмотров карточек локаций
6. ✅ Трекинг глубины скролла (25%, 50%, 75%, 100%)
7. ✅ Трекинг просмотра CTA секции
8. ✅ Создана тестовая страница
9. ✅ Создана документация

---

## 🧪 Быстрое тестирование

### 1. Проверка Bastian
```bash
# Откройте в браузере:
http://localhost:8000/analytics-test.html

# Нажмите кнопки и проверьте консоль
# Затем откройте:
http://localhost:8000/

# Нажимайте на кнопки Buy, Download, аудио
```

### 2. Проверка Stranger Things
```bash
# Откройте в браузере:
http://localhost:8000/stranger-things/analytics-test.html

# Нажмите кнопки и проверьте консоль
# Затем откройте:
http://localhost:8000/stranger-things/

# Нажимайте на кнопки, скроллите страницу
```

### 3. Проверка в Google Analytics

**Bastian (G-9NB21PKL88):**
1. GA → Realtime → Events
2. Ищите события БЕЗ префикса `stranger_things_`

**Stranger Things (G-99MHLJW6TW):**
1. GA → Realtime → Events
2. Ищите события С префиксом `stranger_things_`

---

## 🎯 Важные отличия

| Характеристика | Bastian | Stranger Things |
|----------------|---------|-----------------|
| **GA ID** | G-9NB21PKL88 | G-99MHLJW6TW |
| **Clarity ID** | v51aiaw6lm | v51pbngtlm |
| **Префикс событий** | НЕТ | `stranger_things_` |
| **Кнопки Buy** | $7 | $0.99 |
| **Stripe** | Нет | Есть |
| **Аудио** | Есть | Нет |
| **Scroll Tracking** | Нет | Есть |

---

## 📝 Что проверить в консоли

### Bastian должен показать:
```
📊 Google Analytics initialized
🔧 Initializing Analytics...
✅ Google Analytics loaded
✅ Microsoft Clarity loaded
```

### Stranger Things должен показать:
```
🔴 Welcome to the Upside Down...
📊 Stranger Things - Google Analytics initialized: G-99MHLJW6TW
🔧 Initializing Stranger Things Analytics...
✅ Google Analytics loaded (ST ID: G-99MHLJW6TW)
```

---

## ⚠️ Troubleshooting

### Если ничего не работает:
1. Отключите блокировщики рекламы (AdBlock, uBlock)
2. Проверьте Network tab (F12) - должны загружаться:
   - `gtag/js?id=G-9NB21PKL88` (для Bastian)
   - `gtag/js?id=G-99MHLJW6TW` (для Stranger Things)
3. Проверьте консоль на ошибки
4. Подождите 30-60 секунд для появления в Realtime

### События смешиваются?
- Проверьте правильность Measurement ID
- Stranger Things события ВСЕГДА начинаются с `stranger_things_`
- В GA фильтруйте по префиксу

---

**Дата создания:** 2026-01-21  
**Сервер работает на:** http://localhost:8000
