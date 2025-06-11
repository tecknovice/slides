import Layout from '../components/Layout';

const Page7: React.FC = () => {
  return (
    <Layout title="終わり" prevPage="/page6" nextPage={null}>
      <div className="text-center">
        <p>ご清聴ありがとうございました。</p>
        <p>どうぞよろしくお願いいたします。</p>
      </div>
    </Layout>
  );
};

export default Page7;
