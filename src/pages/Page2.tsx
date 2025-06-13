import Layout from '../components/Layout';

const Page2: React.FC = () => {
  return (
    <Layout title="基本情報">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Basic Information - Left Side */}
        <div className="space-y-4">
          <p><strong>名前：</strong>グエン・ヴァン・フン</p>
          <p><strong>ニックネーム：</strong>ヴァン</p>
          <p><strong>生年：</strong>1989年（36歳）</p>
          <p><strong>出身：</strong>ベトナム・ハノイ</p>
        </div>
        
        {/* Hanoi Image - Right Side */}
        <div className="text-center">
          <img 
            src="/slides/images/hanoi.jpg" 
            alt="ハノイの風景" 
            className="w-full max-h-80 object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Page2;
