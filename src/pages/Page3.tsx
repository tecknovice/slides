import Layout from '../components/Layout';

const Page3: React.FC = () => {
  return (
    <Layout title="学歴">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 h-full">
        {/* Education Text */}
        <div className="text-center lg:text-left space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">ハノイ工科大学</h2>
            <p className="text-lg mb-2">情報技術学部</p>
          </div>
        </div>
        
        {/* University Image */}
        <div className="flex-shrink-0">
          <img 
            src="/slides/images/hust.jpg" 
            alt="ハノイ工科大学"
            className="w-80 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Page3;
