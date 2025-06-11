import Navigation from '../components/Navigation';

const Page7: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 page-container">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            終わり
          </h1>
          
          <div className="text-lg text-gray-700 space-y-4 leading-relaxed text-center">
            <p>ご清聴ありがとうございました。</p>
            <p>どうぞよろしくお願いいたします。</p>
          </div>
          
          <Navigation prevPage="/page6" nextPage={null} />
        </div>
      </div>
    </div>
  );
};

export default Page7;
