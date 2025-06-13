import Layout from '../components/Layout';

const Page4: React.FC = () => {
  return (
    <Layout title="日本に来た経緯">
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 2015 - Japanese Study */}
          <div className="text-center">
            <img 
              src="/slides/images/hachiko_2016.jpg" 
              alt="2015年渋谷ハチ公前" 
              className="w-full max-h-80 object-contain rounded-lg shadow-lg mb-4"
            />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-blue-600">2015年</h3>
              <p className="text-sm text-gray-600">東京で日本語を勉強していました</p>
            </div>
          </div>

          {/* 2023 - Work in Japan */}
          <div className="text-center">
            <img 
              src="/slides/images/hachiko_2024.jpg" 
              alt="2023年渋谷ハチ公前" 
              className="w-full max-h-80 object-contain rounded-lg shadow-lg mb-4"
            />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-green-600">2023年</h3>
              <p className="text-sm text-gray-600">日本で働くために戻ってきました</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page4;
