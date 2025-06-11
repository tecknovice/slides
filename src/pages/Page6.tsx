import Navigation from '../components/Navigation';

const Page6: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            経歴と今後
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed japanese-text">
            <p>いくつかの会社で働いた後、Mazricaに入社しました。</p>
            <p>今後も成長を続け、新しい挑戦をしていきたいと思っています。</p>
          </div>
          
          <Navigation prevPage="/page5" nextPage="/page7" />
        </div>
      </div>
    </div>
  );
};

export default Page6;
