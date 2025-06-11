import Layout from '../components/Layout';

const Page2: React.FC = () => {
  return (
    <Layout title="基本情報" prevPage="/page1" nextPage="/page3">
      <p><strong>名前：</strong>グエン・ヴァン・フン</p>
      <p><strong>ニックネーム：</strong>ヴァン</p>
      <p><strong>生年：</strong>1989年（36歳）</p>
      <p><strong>出身：</strong>ベトナム・ハノイ</p>
    </Layout>
  );
};

export default Page2;
