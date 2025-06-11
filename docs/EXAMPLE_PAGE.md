# Creating New Pages with Layout Component

Here's how to create a new page using the Layout component:

```tsx
import Layout from '../components/Layout';

const ExamplePage: React.FC = () => {
  return (
    <Layout title="Page Title" prevPage="/previous-page" nextPage="/next-page">
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
- `prevPage: string | null` - URL of the previous page (null disables the button)  
- `nextPage: string | null` - URL of the next page (null disables the button)
- `children: React.ReactNode` - The page content

## Benefits

- **Consistent Layout**: All pages use the same structure and styling
- **Easy Maintenance**: Layout changes only need to be made in one place
- **Clean Code**: Page components focus only on content
- **Type Safety**: Props are strongly typed with TypeScript
