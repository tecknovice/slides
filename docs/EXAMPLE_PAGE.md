# Creating New Pages with Layout Component

Here's how to create a new page using the Layout component:

```tsx
import Layout from '../components/Layout';

const ExamplePage: React.FC = () => {
  return (
    <Layout title="Page Title">
      <p>Your content goes here...</p>
      <ul>
        <li>List items</li>
        <li>Are supported</li>
      </ul>
      <div className="special-styling">
        <p>You can use any React components and styling</p>
      </div>
    </Layout>
  );
};

export default ExamplePage;
```

## Layout Component Props

- `title: string` - The page title displayed at the top
- `children: React.ReactNode` - The page content

## Navigation

Navigation is now **fully automatic**! The Navigation component:
- Detects the current page from the URL
- Automatically calculates previous/next pages
- No need to specify total pages - it dynamically handles any number of pages
- Uses React Router's catch-all route to redirect to default page for non-existent pages
- Always shows "次へ" (Next) button - if the next page doesn't exist, it redirects to the default ending page

### How it works:
1. When you click "次へ" (Next), it tries to navigate to `page${currentPage + 1}`
2. If that page route doesn't exist, React Router's catch-all route (`*`) automatically redirects to `/default`
3. This makes the system flexible - you can add or remove pages without updating navigation logic

## Benefits

- **Automatic Navigation**: No need to specify prev/next pages manually
- **Consistent Layout**: All pages use the same structure and styling
- **Easy Maintenance**: Layout changes only need to be made in one place
- **Clean Code**: Page components only need title and content
- **Type Safety**: Props are strongly typed with TypeScript
- **Smart Routing**: Handles edge cases automatically
