import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className="h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full h-full max-w-6xl flex flex-col">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container flex-1 flex flex-col">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            {title}
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed japanese-text flex-1 flex flex-col justify-center">
            {children}
          </div>
          
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Layout;
