# Image Carousel Component

A responsive, accessible image carousel component for the self-introduction presentation.

## ✅ Fixed Issues

- **Image Path Resolution**: Changed from absolute paths (`/images/`) to relative paths (`./images/`) to work correctly with Vite's base path configuration (`/slides/`)
- **Error Handling**: Added graceful fallback styling for images that fail to load
- **Integration**: Successfully integrated carousels into multiple pages:
  - Page 2 (基本情報): ProfileCarousel with profile timeline photos
  - Page 3 (学歴): StudyCarousel with university and Hanoi photos  
  - Page 6 (趣味): HobbyCarousel with hobby and travel photos

## Features

- 🖼️ **Image Display**: Shows images with smooth transitions
- 🎯 **Navigation**: Arrow buttons, dot indicators, and thumbnail strip
- ⌨️ **Keyboard Support**: Left/Right arrow keys for navigation
- 📱 **Responsive**: Works on desktop and mobile devices
- ♿ **Accessible**: ARIA labels and keyboard navigation
- 🎨 **Customizable**: Tailwind CSS styling with custom class support
- 🛡️ **Error Resilient**: Graceful handling of missing images

## Usage

### Basic Usage

```tsx
import ImageCarousel from '../components/ImageCarousel';

const MyPage = () => {
  const images = [
    {
      src: '/images/photo1.jpg',
      alt: '写真1',
      caption: 'キャプション1'
    },
    {
      src: '/images/photo2.jpg',
      alt: '写真2',
      caption: 'キャプション2'
    }
  ];

  return <ImageCarousel images={images} />;
};
```

### With Custom Styling

```tsx
<ImageCarousel 
  images={images} 
  className="my-8" 
  enableKeyboardNavigation={true}
/>
```

### Pre-made Carousels

The project includes pre-made carousel components in `ImageCarouselExamples.tsx`:

- `TravelCarousel` - For travel photos
- `ProfileCarousel` - For profile and timeline photos  
- `StudyCarousel` - For education-related images
- `HobbyCarousel` - For hobby and activity photos

```tsx
import { TravelCarousel } from '../components/ImageCarouselExamples';

<TravelCarousel />
```

## Props

### ImageCarousel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `images` | `ImageItem[]` | **required** | Array of image objects |
| `className` | `string` | `''` | Additional CSS classes |
| `enableKeyboardNavigation` | `boolean` | `true` | Enable arrow key navigation |

### ImageItem Type

```tsx
interface ImageItem {
  src: string;        // Image source URL
  alt: string;        // Alternative text
  caption?: string;   // Optional caption text
}
```

## Keyboard Navigation

- **Left Arrow**: Previous image
- **Right Arrow**: Next image

## Styling

The carousel uses Tailwind CSS classes and is fully responsive:

- **Mobile**: Stacked layout with touch-friendly controls
- **Tablet**: Shows thumbnail strip for easy navigation
- **Desktop**: Full feature set with all navigation options

## Accessibility

- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Alternative text for all images
