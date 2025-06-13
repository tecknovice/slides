# 🧑‍💻 Nguyen Van Hung - Self Introduction Presentation (React + GitHub Pages)

A static, multi-page React site simulating a slide deck, entirely in Japanese. Each page is its own route (/pageX) with Next/Previous navigation.

## 🚀 Features

- 6 pages of self-introduction content in Japanese
- Navigation between pages with Previous/Next buttons
- Keyboard navigation support (Left/Right arrow keys, optional enhancement)
- Responsive design with Tailwind CSS
- Smooth slide transition animations (optional enhancement with framer-motion)
- Modern React 18+ with TypeScript
- Deployed on GitHub Pages

## 🛠️ Tools & Libraries

- **React 18+** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server (recommended for GitHub Pages)
- **Tailwind CSS** - Styling
- **react-router-dom** - Page routing
- **gh-pages** - Deployment package

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
│   │   ├── Page5.tsx
│   │   └── Page6.tsx
│   ├── components/
│   │   └── Navigation.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pc261/introduction.git
cd introduction
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5174/`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🧪 Testing
- Test all page links: `/page1`, `/page2`, `/page3`, `/page4`, `/page5`, `/page6`
- Ensure GitHub Pages works with correct basename in router

## ✨ Optional Enhancements
- Add slide transition animation (e.g., framer-motion)
- Support keyboard left/right navigation
- Responsive styling for mobile view

## 🚀 Deployment

### Prerequisites
- Use [GitHub Pages](https://pages.github.com/)
- Add `"homepage": "https://<username>.github.io/self-intro-presentation"` in `package.json`
- Deploy using `gh-pages` package

### Quick Deploy

1. Make sure your repository is pushed to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Manual Setup

1. Update the `homepage` field in `package.json` with your GitHub username:
```json
"homepage": "https://YOUR_USERNAME.github.io/introduction"
```

2. Update the `base` in `vite.config.ts` if needed:
```ts
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

3. Deploy:
```bash
npm run deploy
```

### GitHub Pages Settings

After deployment, make sure to:
1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "Deploy from a branch"
4. Select `gh-pages` branch
5. Click Save

## 🧭 Routing & Navigation

- Use `react-router-dom`
- Each page has a URL: `/page1`, `/page2`, `/page3`, `/page4`, `/page5`, `/page6`
- Navigation buttons link to next and previous page
- No dynamic content; all static

### Navigation Component

Props:
- `prevPage: string | null`
- `nextPage: string | null`

```tsx
<Button onClick={() => navigate(prevPage)}>前へ</Button>
<Button onClick={() => navigate(nextPage)}>次へ</Button>
```

## 🖼️ UI Components

### 📄 Each Page Template

- Static content (Japanese)
- Layout: Title + content + Prev/Next buttons
- Tailwind CSS (centered content, max-width, padding, font styling)

## 🗒️ Page Content (Japanese)

### ✅ Page 1 - 挨拶
はじめまして。
私はグエン・ヴァン・フンと申します。
ニックネームは「ヴァン」です。
このプレゼンテーションでは、自己紹介をさせていただきます。

### ✅ Page 2 - 基本情報
名前：グエン・ヴァン・フン
ニックネーム：ヴァン
生年：1989年（36歳）
出身：ベトナム・ハノイ

### ✅ Page 3 - 学歴
ハノイ工科大学で学びました。
情報技術を専攻していました。

### ✅ Page 4 - 日本に来た経緯
2015年：東京で日本語を勉強していました
2023年：日本で働くために戻ってきました

### ✅ Page 5 - 経歴と今後
フルスタックウェブ開発者として働いています。
JavaScript、TypeScript、Node.jsを中心に開発しています。
いくつかの個人プロジェクトも手がけています。
いくつかの会社で働いた後、Mazricaに入社しました。
今後も成長を続け、新しい挑戦をしていきたいと思っています。

### ✅ Page 6 - 趣味
趣味：
- 旅行
- ランニング
- 水泳
- ジム
- 読書（ベトナム語の本が多いですが、英語の本も少し読みます）
- ゲーム（Rome Total War、MOBA など）

特にベトナムにいる間は運動をたくさんしていました。

### ✅ Default Page - 終わり
ご清聴ありがとうございました。
どうぞよろしくお願いいたします。

## ✅ Summary

This project is a static, multi-page React site simulating a slide deck, entirely in Japanese. Each page is its own route (/pageX) with Next/Previous navigation.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).