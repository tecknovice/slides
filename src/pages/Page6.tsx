import Layout from '../components/Layout';
import { TravelCarousel } from '../components/ImageCarouselExamples';

const Page6: React.FC = () => {
  return (
    <Layout title="趣味">
      <p className="mb-4"><strong>趣味：</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-2 mb-6">
        <li>旅行</li>
        <li>ランニング</li>
        <li>水泳</li>
        <li>ジム</li>
        <li>読書（ベトナム語の本が多いですが、英語の本も少し読みます）</li>
        <li>ゲーム（Rome Total War、MOBA など）</li>
      </ul>
      
      <TravelCarousel />
      
      <p className="mt-4">特にベトナムにいる間は運動をたくさんしていました。</p>
    </Layout>
  );
};

export default Page6;
