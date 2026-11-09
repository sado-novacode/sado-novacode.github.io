# NovaCode Portfolio

وب‌سایت پورتفولیو شخصی **سادو** — توسعه‌دهنده‌ی فول‌استک. ساخته‌شده با **Next.js 16، TypeScript و Tailwind CSS 4**.

معرفی سه محصول متن‌باز:

| پروژه | توضیح | ریپو |
| --- | --- | --- |
| **CoinPulse** | داشبورد زنده‌ی کریپتو — چارت، پورتفولیو و هشدار قیمت | [sado-novacode/coinpulse](https://github.com/sado-novacode/coinpulse) |
| **NovaDocs AI** | گفت‌وگو با PDF — پاسخ RAG با ارجاع به صفحه‌ی دقیق | [sado-novacode/nova-docs-ai](https://github.com/sado-novacode/nova-docs-ai) |
| **Nova Alert Bot** | ربات تلگرام با ۱۰ نوع هشدار قیمت (وب‌سوکت Binance) | [sado-novacode/nova-crypto-alert-bot](https://github.com/sado-novacode/nova-crypto-alert-bot) |

## امکانات

- چیدمان تک‌صفحه‌ای تیره: هیرو، نمونه‌کارها، استک فنی، «چرا من» و تماس
- اسکرین‌شات واقعی محصولات داخل قاب مرورگر
- موکاپ گوشی تلگرام برای پروژه‌ی ربات (کاملاً CSS، بدون تصویر)
- انیمیشن ظهور هنگام اسکرول با یک کامپوننت کوچک IntersectionObserver (بدون کتابخانه‌ی انیمیشن)
- دکمه‌ی کپی ایمیل با یک کلیک
- کاملاً واکنش‌گرا (mobile-first) و دسترس‌پذیر (HTML معنایی و aria)
- متادیتای SEO و OpenGraph + فاوآیکون
- بدون بک‌اند و بدون دیتابیس — مثل یک اپ استاتیک هرجا دیپلوی می‌شود

## اجرای سریع

```bash
npm install
npm run dev
```

بعد [http://localhost:3000](http://localhost:3000) را باز کنید.

## ساختار پروژه

```
src/
├── app/
│   ├── layout.tsx          # متادیتا، فونت (Space Grotesk)، رنگ تم
│   ├── page.tsx            # ترکیب سکشن‌ها
│   ├── globals.css         # Tailwind + انیمیشن‌های اختصاصی (کلاس‌های nc-*)
│   └── icon.svg            # فاوآیکون
├── components/
│   └── portfolio/
│       ├── nav.tsx         # هدر چسبان با بلور
│       ├── hero.tsx        # تیتر، بج «آماده‌ی کار»، آمار
│       ├── projects.tsx    # سه کارت پروژه با اسکرین‌شات
│       ├── bot-phone.tsx   # موکاپ CSS تلگرام
│       ├── stack.tsx       # گروه‌های استک فنی
│       ├── why.tsx         # کارت‌های تمایز
│       ├── contact.tsx     # کپی ایمیل + کارت گیت‌هاب (کلاینت)
│       ├── footer.tsx
│       └── reveal.tsx      # ظهور هنگام اسکرول (کلاینت)
├── lib/
│   └── portfolio-data.ts   # تمام محتوای قابل ویرایش اینجاست
└── public/
    └── screenshots/        # اسکرین‌شات محصولات
```

## شخصی‌سازی

تمام متن‌ها، لینک‌ها، آمار، مهارت‌ها و جزئیات پروژه‌ها در یک فایل تعریف شده‌اند:

```
src/lib/portfolio-data.ts
```

همان فایل را ویرایش کنید — اسم، ایمیل، آدرس گیت‌هاب، پروژه‌ها و متن‌ها — بدون نیاز به دست زدن به کامپوننت‌ها. برای عوض کردن تصاویر هم فقط فایل‌های PNG داخل `public/screenshots/` را جایگزین کنید.

## دیپلوی روی Vercel

1. این ریپو را به GitHub پوش کنید.
2. به [vercel.com](https://vercel.com) بروید → **Add New Project** → ریپو را ایمپورت کنید.
3. **Deploy** را بزنید — هیچ متغیر محیطی لازم نیست (اپ کاملاً استاتیک است).

همین. پلن Hobby ورکل یک URL رایگان `*.vercel.app` می‌دهد.

## لایسنس

[MIT](LICENSE) © 2026 NovaCode / Sado
