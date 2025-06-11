import Navigation from '../components/Navigation';

const Page4: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            趣味（ベトナム時代）
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed japanese-text">
            <p><strong>趣味：</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>ランニング</li>
              <li>水泳</li>
              <li>ジム</li>
            </ul>
            <p className="mt-6">特にベトナムにいる間は運動をたくさんしていました。</p>
          </div>
          
          <Navigation prevPage="/page3" nextPage="/page5" />
        </div>
      </div>
    </div>
  );
};

export default Page4;
