import Layout from '../components/Layout';

const Page3: React.FC = () => {
  return (
    <Layout title="学歴と日本に来た経緯" prevPage="/page2" nextPage="/page4">
      <p>ハノイ工科大学で学びました。</p>
      <p>1年半前に日本に来ました。</p>
    </Layout>
  );
};

export default Page3;
