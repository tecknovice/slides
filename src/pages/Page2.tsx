import Navigation from '../components/Navigation';

const Page2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            基本情報
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed japanese-text">
            <p><strong>名前：</strong>グエン・ヴァン・フン</p>
            <p><strong>ニックネーム：</strong>ヴァン</p>
            <p><strong>生年：</strong>1989年（36歳）</p>
            <p><strong>出身：</strong>ベトナム・ハノイ</p>
          </div>
          
          <Navigation prevPage="/page1" nextPage="/page3" />
        </div>
      </div>
    </div>
  );
};

export default Page2;
