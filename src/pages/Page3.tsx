import Navigation from '../components/Navigation';

const Page3: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            学歴と日本に来た経緯
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed japanese-text">
            <p>ハノイ工科大学で学びました。</p>
            <p>1年半前に日本に来ました。</p>
          </div>
          
          <Navigation prevPage="/page2" nextPage="/page4" />
        </div>
      </div>
    </div>
  );
};

export default Page3;
