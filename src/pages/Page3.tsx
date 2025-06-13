import Layout from '../components/Layout';

const Page3: React.FC = () => {
  return (
    <Layout title="学歴">
      <div className="space-y-8">
        <div className="text-center">
          <p className="text-lg">ハノイ工科大学で学びました。</p>
          <p className="text-gray-600 mt-4">情報技術を専攻していました。</p>
        </div>
      </div>
    </Layout>
  );
};

export default Page3;
