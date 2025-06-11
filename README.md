# 🧑‍💻 Nguyen Van Hung - Self Introduction Presentation

A multi-page React application built with Vite, TypeScript, Tailwind CSS, and React Router for a self-introduction presentation in Japanese.

## 🚀 Features

- 7 pages of self-introduction content in Japanese
- Navigation between pages with Previous/Next buttons
- Keyboard navigation support (Left/Right arrow keys)
- Page indicator with progress bar
- Responsive design with Tailwind CSS
- Smooth animations and transitions
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
│   │   ├── Layout.tsx - Common layout component
│   │   ├── Navigation.tsx - Navigation component
│   │   ├── PageIndicator.tsx - Page indicator with progress
│   │   └── KeyboardInstructions.tsx - Keyboard navigation hints
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

### Navigation Methods

1. **Button Navigation**: Use "前へ" (Previous) and "次へ" (Next) buttons
2. **Keyboard Navigation**: Use left (←) and right (→) arrow keys
3. **Direct URL**: Navigate directly to any page using `/page1`, `/page2`, etc.

## 📱 Responsive Design

The application is fully responsive and works well on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Styling & UI Features

- **Clean, modern design** with Tailwind CSS
- **Card-based layout** for each page
- **Smooth animations** and page transitions
- **Page indicator** with progress bar
- **Keyboard navigation hints** in the bottom-right corner
- **Consistent typography** optimized for Japanese text
- **Hover effects** on interactive elements
- **Disabled states** for navigation buttons at the beginning/end

## 🎯 Page Content

1. **Page 1 - 挨拶 (Greeting)**: Introduction and welcome message
2. **Page 2 - 基本情報 (Basic Information)**: Personal details and background
3. **Page 3 - 学歴と日本に来た経緯 (Education & Coming to Japan)**: Educational background and journey to Japan
4. **Page 4 - 趣味（ベトナム時代） (Hobbies in Vietnam)**: Hobbies and activities in Vietnam
5. **Page 5 - 趣味（現在） (Current Hobbies)**: Current hobbies and interests
6. **Page 6 - 経歴と今後 (Career & Future)**: Career history and future plans
7. **Page 7 - 終わり (Conclusion)**: Closing remarks and thanks

## 🏗️ Architecture

### Layout Component

All pages use a common `Layout` component that provides:
- Consistent page structure and styling
- Automatic navigation integration
- Responsive design
- Japanese text optimization

```tsx
<Layout title="Page Title" prevPage="/prev" nextPage="/next">
  <p>Your content here...</p>
</Layout>
```

### Component Structure

- **Layout**: Common page template with title, content area, and navigation
- **Navigation**: Previous/Next buttons with disabled states
- **PageIndicator**: Shows current page and progress
- **KeyboardInstructions**: Displays keyboard navigation hints

## 🔧 Development Notes

- Uses React 19 with TypeScript for type safety
- Vite for fast development and optimized builds
- Tailwind CSS for utility-first styling
- React Router DOM for client-side routing
- Common Layout component for consistent structure
- Custom hooks for keyboard navigation
- Responsive design with mobile-first approach

### Code Benefits

- **DRY Principle**: Common layout reduces code duplication
- **Maintainability**: Layout changes only need to be made once
- **Type Safety**: Strong TypeScript typing throughout
- **Clean Separation**: Pages focus only on content, not layout
- **Consistent UX**: All pages have identical structure and behavior

## 📄 License

This project is open source and available under the [MIT License](LICENSE).