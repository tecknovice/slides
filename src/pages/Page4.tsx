import Layout from '../components/Layout';

const Page4: React.FC = () => {
  return (
    <Layout title="趣味（ベトナム時代）" prevPage="/page3" nextPage="/page5">
      <p><strong>趣味：</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>ランニング</li>
        <li>水泳</li>
        <li>ジム</li>
      </ul>
      <p className="mt-6">特にベトナムにいる間は運動をたくさんしていました。</p>
    </Layout>
  );
};

export default Page4;
