import React from 'react';
import { useNavigate } from 'react-router-dom';

const DefaultPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            終わり
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed japanese-text text-center">
            <p>ご清聴ありがとうございました。</p>
            <p>どうぞよろしくお願いいたします。</p>
            
            <div className="mt-8">
              <button
                onClick={() => navigate('/page1')}
                className="px-6 py-3 rounded-lg font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors nav-button"
              >
                最初に戻る
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
