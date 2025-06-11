import Layout from '../components/Layout';

const Page5: React.FC = () => {
  return (
    <Layout title="趣味（現在）" prevPage="/page4" nextPage="/page6">
      <p><strong>趣味（続き）：</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-2">
        <li>読書（ベトナム語の本が多いですが、英語の本も少し読みます）</li>
        <li>ゲーム（Rome Total War、MOBA、Counter Strike、Age of Empiresなど）</li>
      </ul>
    </Layout>
  );
};

export default Page5;
