import React from 'react';
import { useLocation } from 'react-router-dom';

const PageIndicator: React.FC = () => {
  const location = useLocation();
  
  // Handle default page
  if (location.pathname === '/default') {
    return (
      <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">終了</span>
        </div>
        <div className="mt-2 w-16 h-1 bg-gray-200 rounded-full">
          <div className="h-1 bg-green-500 rounded-full w-full" />
        </div>
      </div>
    );
  }
  
  const currentPage = parseInt(location.pathname.replace('/page', '')) || 1;
  const totalPages = 7;

  return (
    <div className="fixed top-4 right-4 bg-white shadow-lg rounded-lg px-4 py-2">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">ページ</span>
        <span className="font-bold text-blue-600">{currentPage}</span>
        <span className="text-sm text-gray-400">/</span>
        <span className="text-sm text-gray-600">{totalPages}</span>
      </div>
      
      {/* Progress bar */}
      <div className="mt-2 w-16 h-1 bg-gray-200 rounded-full">
        <div 
          className="h-1 bg-blue-500 rounded-full transition-all duration-300"
          style={{ width: `${(currentPage / totalPages) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PageIndicator;
