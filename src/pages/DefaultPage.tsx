import React from 'react';
import { useNavigate } from 'react-router-dom';

const DefaultPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full h-full max-w-6xl flex flex-col">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container flex-1 flex flex-col">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            終わり
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed japanese-text text-center flex-1 flex flex-col justify-center">
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
