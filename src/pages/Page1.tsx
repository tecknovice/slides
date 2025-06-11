import Layout from '../components/Layout';

const Page1: React.FC = () => {
  return (
    <Layout title="挨拶" prevPage={null} nextPage="/page2">
      <p>はじめまして。</p>
      <p>私はグエン・ヴァン・フンと申します。</p>
      <p>ニックネームは「ヴァン」です。</p>
      <p>このプレゼンテーションでは、自己紹介をさせていただきます。</p>
    </Layout>
  );
};

export default Page1;
