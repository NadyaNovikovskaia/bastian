# 🔴 Stranger Things - Analytics Events Documentation

## ⚠️ ВАЖНО: Отдельная кампания!

**Measurement ID:** G-99MHLJW6TW  
**Clarity Project ID:** v51pbngtlm

Все события имеют префикс **`stranger_things_`** чтобы отличать их от основного проекта Bastian.

---

## Отслеживаемые события

### 1. Buy Button Clicks (Hero Section)
**Event Name:** `stranger_things_buy_button_click`

**Параметры:**
- `button_text` - "Get the Tour Map — $0.99"
- `button_location` - "hero_section"
- `button_type` - "primary"

**Где отслеживается:**
- Кнопка "Get the Tour Map — $0.99" в Hero секции

---

### 2. Preview Locations Click
**Event Name:** `stranger_things_preview_locations_click`

**Параметры:**
- `button_text` - "Preview Locations"
- `button_location` - "hero_section"
- `button_type` - "outline"

**Где отслеживается:**
- Кнопка "Preview Locations" в Hero секции

---

### 3. Stripe Buy Button Click
**Event Name:** `stranger_things_stripe_buy_button_click`

**Параметры:**
- `button_text` - "Get the Tour Map $0.99"
- `button_location` - "cta_section"
- `product_price` - "$0.99"
- `trigger` - "shadow_dom" (если клик из Shadow DOM)

**Где отслеживается:**
- Stripe Buy Button в CTA секции "Enter the Upside Down"

---

### 4. Location Card Viewed
**Event Name:** `stranger_things_location_card_viewed`

**Параметры:**
- `location_name` - название локации (например, "Creel House")
- `location_number` - номер локации (1-4)
- `is_highlight` - true/false (выделена ли карточка)

**Где отслеживается:**
- Автоматически когда карточки локаций становятся видимыми на 50%

**Локации:**
1. Creel House (highlight)
2. Myrtle Hill Cemetery
3. Rome Clock Tower
4. Berry College Campus

---

### 5. CTA Section Viewed
**Event Name:** `stranger_things_cta_section_viewed`

**Параметры:**
- `section_name` - "Enter the Upside Down CTA"

**Где отслеживается:**
- Автоматически когда CTA секция становится видимой на 50%

---

### 6. Scroll Depth Tracking
**Event Name:** `stranger_things_scroll_depth`

**Параметры:**
- `depth_percent` - "25", "50", "75", или "100"
- `page_section` - название текущей секции

**Где отслеживается:**
- Автоматически при достижении контрольных точек скролла

---

### 7. Footer Link Clicks
**Event Name:** `stranger_things_footer_link_click`

**Параметры:**
- `link_text` - текст ссылки
- `link_href` - href атрибут (например, "terms.html")

**Где отслеживается:**
- Все ссылки в футере

---

### 8. Page View
**Event Name:** `page_view` (без префикса - стандартное событие GA)

**Параметры:**
- `page_title` - заголовок страницы
- `page_location` - полный URL
- `page_path` - путь страницы

**Где отслеживается:**
- Автоматически при загрузке страницы

---

## Как проверить события

### 1. Откройте тестовую страницу
```
http://localhost:8000/stranger-things/analytics-test.html
```

### 2. Откройте основную страницу Stranger Things
```
http://localhost:8000/stranger-things/
```

### 3. Проверьте консоль браузера (F12)
Вы должны увидеть:
```
🔴 Welcome to the Upside Down...
📊 Stranger Things - Google Analytics initialized: G-99MHLJW6TW
🔧 Initializing Stranger Things Analytics...
✅ Google Analytics loaded (ST ID: G-99MHLJW6TW)
✅ Microsoft Clarity loaded (ST Project)
```

### 4. Тестируйте события
Нажимайте на кнопки и смотрите логи:
```
✅ ST GA Event sent: stranger_things_buy_button_click {button_text: "...", ...}
✅ ST Clarity Event sent: stranger_things_buy_button_click
```

### 5. Проверьте в Google Analytics

1. Откройте GA: https://analytics.google.com/
2. Выберите проект с ID: **G-99MHLJW6TW**
3. Перейдите в **Realtime** → **Events**
4. Увидите события с префиксом `stranger_things_`:
   - `stranger_things_buy_button_click`
   - `stranger_things_preview_locations_click`
   - `stranger_things_stripe_buy_button_click`
   - и т.д.

### 6. Проверьте в Microsoft Clarity

1. Откройте Clarity: https://clarity.microsoft.com/
2. Выберите проект: **v51pbngtlm**
3. Перейдите в **Recordings**
4. Найдите свою сессию
5. События будут видны в timeline с префиксом `stranger_things_`

---

## Различия от основного проекта Bastian

| Параметр | Bastian (main) | Stranger Things |
|----------|----------------|-----------------|
| **Measurement ID** | G-9NB21PKL88 | G-99MHLJW6TW |
| **Clarity Project** | v51aiaw6lm | v51pbngtlm |
| **Event Prefix** | Нет префикса | `stranger_things_` |
| **Кнопки Buy** | "Buy Full Tour - $7" | "Get the Tour Map — $0.99" |
| **Stripe** | Нет | Есть (Stripe Buy Button) |
| **Scroll Tracking** | Нет | Есть (25%, 50%, 75%, 100%) |

---

## Troubleshooting

### События не появляются в GA?
1. Проверьте, что используется правильный ID: **G-99MHLJW6TW**
2. Отключите блокировщики рекламы для localhost
3. Проверьте консоль на ошибки
4. Подождите 30-60 секунд для Realtime

### События смешиваются с Bastian?
- Все события Stranger Things имеют префикс `stranger_things_`
- В GA фильтруйте по этому префиксу
- Используйте разные Measurement ID для разделения

### Stripe Button не отслеживается?
- Stripe использует Shadow DOM
- Скрипт пытается отследить клики на обоих уровнях
- Проверьте консоль для подтверждения отправки события

---

## Полезные команды для тестирования

Откройте консоль браузера и выполните:

```javascript
// Проверить, загружен ли gtag
typeof gtag !== 'undefined' ? console.log('✅ gtag loaded') : console.log('❌ gtag NOT loaded');

// Проверить, загружен ли Clarity
typeof clarity !== 'undefined' ? console.log('✅ Clarity loaded') : console.log('❌ Clarity NOT loaded');

// Вручную отправить событие
gtag('event', 'stranger_things_test_event', {
    test_param: 'test_value'
});

// Вручную отправить событие в Clarity
clarity('event', 'stranger_things_test_event');
```

---

## Файлы проекта

- **index.html** - основная страница с обновленными кнопками
- **script.js** - полная система трекинга
- **analytics-test.html** - тестовая страница для проверки
- **STRANGER_THINGS_ANALYTICS.md** - эта документация

---

**Создано:** 2026-01-21  
**Measurement ID:** G-99MHLJW6TW  
**Clarity Project:** v51pbngtlm
