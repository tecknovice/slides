---
applyTo: '**'
---

# 🧑‍💻 Nguyen Van Hung - Self Introduction Presentation (React + GitHub Pages)

## 📁 Project Structure
```
self-intro-presentation/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Page1.tsx
│   │   ├── Page2.tsx
│   │   ├── Page3.tsx
│   │   ├── Page4.tsx
│   │   └── …
│   ├── components/
│   │   └── Navigation.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── vite.config.ts 
```

## 🚀 Deployment

- Use [GitHub Pages](https://pages.github.com/)
- Use Vite  + `react-router-dom` + Tailwind + React +Typescript
- Add `"homepage": "https://<username>.github.io/self-intro-presentation"` in `package.json`
- Deploy using `gh-pages` package

## 🧭 Routing & Navigation

- Use `react-router-dom`
- Each page has a URL: `/page1`, `/page2`, ...
- Navigation buttons link to next and previous page
- No dynamic content; all static

## 🖼️ UI Components

### 📄 Each Page Template

- Static content (Japanese)
- Layout: Title + content + Prev/Next buttons
- Tailwind CSS (centered content, max-width, padding, font styling)

### 🔘 Navigation Component

Props:
- `prevPage: string | null`
- `nextPage: string | null`

```tsx
<Button onClick={() => navigate(prevPage)}>前へ</Button>
<Button onClick={() => navigate(nextPage)}>次へ</Button>


⸻

🗒️ Page Content (Japanese)

✅ Page 1 - 挨拶

はじめまして。
私はグエン・ヴァン・フンと申します。
ニックネームは「ヴァン」です。
このプレゼンテーションでは、自己紹介をさせていただきます。

✅ Page 2 - 基本情報

名前：グエン・ヴァン・フン
ニックネーム：ヴァン
生年：1989年（36歳）
出身：ベトナム・ハノイ

✅ Page 3 - 学歴と日本に来た経緯

ハノイ工科大学で学びました。
1年半前に日本に来ました。

✅ Page 4 - 趣味

趣味：
- 旅行
- ランニング
- 水泳
- ジム
- 読書（ベトナム語の本が多いですが、英語の本も少し読みます）
- ゲーム（Rome Total War、MOBA、Counter Strike、Age of Empiresなど）

特にベトナムにいる間は運動をたくさんしていました。

✅ Page 5 - 経歴と今後

いくつかの会社で働いた後、Mazricaに入社しました。
今後も成長を続け、新しい挑戦をしていきたいと思っています。

✅ Default Page - 終わり

ご清聴ありがとうございました。
どうぞよろしくお願いいたします。


⸻

🛠️ Tools & Libraries
	•	React 18+
	•	TypeScript
    •	TailwindCSS
	•	Vite (recommended for GitHub Pages)
	•	react-router-dom for page routing
	•	gh-pages for deployment

🧪 Testing
	•	Test all page links: /page1, /page2, …
	•	Ensure GitHub Pages works with correct basename in router

✨ Optional Enhancements
	•	Add slide transition animation (e.g., framer-motion)
	•	Support keyboard left/right navigation
	•	Responsive styling for mobile view

⸻

✅ Summary

This project is a static, multi-page React site simulating a slide deck, entirely in Japanese. Each page is its own route (/pageX) with Next/Previous navigation.
