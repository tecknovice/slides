import React from 'react';

// Debug component to test image loading
export const ImageTest: React.FC = () => {
  const testImages = [
    './images/snowboarding.jpg',
    './images/thailand.jpg',
    './images/singapore.jpg'
  ];

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-4">Image Loading Test</h3>
      <div className="grid grid-cols-3 gap-4">
        {testImages.map((src, index) => (
          <div key={index} className="border p-2">
            <img 
              src={src} 
              alt={`Test ${index + 1}`}
              className="w-full h-32 object-cover"
              onLoad={() => console.log(`Image loaded: ${src}`)}
              onError={() => console.log(`Image failed to load: ${src}`)}
            />
            <p className="text-sm mt-1">{src}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;
