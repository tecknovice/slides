import React from 'react';

const KeyboardInstructions: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white text-sm px-3 py-2 rounded-lg">
      <div className="flex items-center space-x-2">
        <span>キーボード:</span>
        <div className="flex space-x-1">
          <kbd className="px-2 py-1 bg-gray-600 rounded text-xs">←</kbd>
          <kbd className="px-2 py-1 bg-gray-600 rounded text-xs">→</kbd>
        </div>
      </div>
    </div>
  );
};

export default KeyboardInstructions;
