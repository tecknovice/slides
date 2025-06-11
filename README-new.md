# 🧑‍💻 Nguyen Van Hung - Self Introduction Presentation

A multi-page React application built with Vite, TypeScript, Tailwind CSS, and React Router for a self-introduction presentation in Japanese.

## 🚀 Features

- 7 pages of self-introduction content in Japanese
- Navigation between pages with Previous/Next buttons
- Responsive design with Tailwind CSS
- Modern React with TypeScript
- Ready for deployment on GitHub Pages

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router DOM** - Client-side routing
- **GitHub Pages** - Deployment

## 📁 Project Structure

```
introduction/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Page1.tsx - 挨拶 (Greeting)
│   │   ├── Page2.tsx - 基本情報 (Basic Information)
│   │   ├── Page3.tsx - 学歴と日本に来た経緯 (Education & Coming to Japan)
│   │   ├── Page4.tsx - 趣味（ベトナム時代） (Hobbies in Vietnam)
│   │   ├── Page5.tsx - 趣味（現在） (Current Hobbies)
│   │   ├── Page6.tsx - 経歴と今後 (Career & Future)
│   │   └── Page7.tsx - 終わり (Conclusion)
│   ├── components/
│   │   └── Navigation.tsx - Navigation component
│   ├── App.tsx - Main app with routing
│   ├── main.tsx - Entry point
│   └── index.css - Global styles
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

4. Open your browser and visit `http://localhost:5174/introduction/`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🌐 Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username:
```json
"homepage": "https://YOUR_USERNAME.github.io/introduction"
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at `https://YOUR_USERNAME.github.io/introduction`

## 🧭 Navigation

- **Home (/)** - Redirects to Page 1
- **/page1** - 挨拶 (Greeting)
- **/page2** - 基本情報 (Basic Information)
- **/page3** - 学歴と日本に来た経緯 (Education & Coming to Japan)
- **/page4** - 趣味（ベトナム時代） (Hobbies in Vietnam)
- **/page5** - 趣味（現在） (Current Hobbies)
- **/page6** - 経歴と今後 (Career & Future)
- **/page7** - 終わり (Conclusion)

Use the "前へ" (Previous) and "次へ" (Next) buttons to navigate between pages.

## 📱 Responsive Design

The application is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Styling

The application uses Tailwind CSS for styling with:
- Clean, modern design
- Centered content with max-width containers
- Card-based layout for each page
- Consistent spacing and typography
- Disabled state for navigation buttons at the beginning/end

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
