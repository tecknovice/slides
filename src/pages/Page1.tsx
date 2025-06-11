import Navigation from '../components/Navigation';

const Page1: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            挨拶
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed japanese-text">
            <p>はじめまして。</p>
            <p>私はグエン・ヴァン・フンと申します。</p>
            <p>ニックネームは「ヴァン」です。</p>
            <p>このプレゼンテーションでは、自己紹介をさせていただきます。</p>
          </div>
          
          <Navigation prevPage={null} nextPage="/page2" />
        </div>
      </div>
    </div>
  );
};

export default Page1;
