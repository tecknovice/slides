import Layout from '../components/Layout';

const Page1: React.FC = () => {
  return (
    <Layout title="挨拶">
      <div className="flex flex-col items-center space-y-6">
        <img 
          src="/slides/images/profile.jpg" 
          alt="グエン・ヴァン・フン" 
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />
        <div className="text-center space-y-4">
          <p>はじめまして。</p>
          <p>私はグエン・ヴァン・フンと申します。</p>
          <p>ニックネームは「ヴァン」です。</p>
          <p>このプレゼンテーションでは、自己紹介をさせていただきます。</p>
        </div>
      </div>
    </Layout>
  );
};

export default Page1;
