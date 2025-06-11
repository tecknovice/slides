import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  prevPage: string | null;
  nextPage: string | null;
}

const Layout: React.FC<LayoutProps> = ({ title, children, prevPage, nextPage }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            {title}
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed japanese-text">
            {children}
          </div>
          
          <Navigation prevPage={prevPage} nextPage={nextPage} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
