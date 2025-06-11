import Navigation from '../components/Navigation';

const Page5: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            趣味（現在）
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed japanese-text">
            <p><strong>趣味（続き）：</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>読書（ベトナム語の本が多いですが、英語の本も少し読みます）</li>
              <li>ゲーム（Rome Total War、MOBA、Counter Strike、Age of Empiresなど）</li>
            </ul>
          </div>
          
          <Navigation prevPage="/page4" nextPage="/page6" />
        </div>
      </div>
    </div>
  );
};

export default Page5;
