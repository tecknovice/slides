import { useNavigate } from 'react-router-dom';

interface NavigationProps {
  prevPage: string | null;
  nextPage: string | null;
}

const Navigation: React.FC<NavigationProps> = ({ prevPage, nextPage }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mt-8">
      <button
        onClick={() => prevPage && navigate(prevPage)}
        disabled={!prevPage}
        className={`px-6 py-3 rounded-lg font-medium nav-button ${
          prevPage
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        前へ
      </button>
      
      <button
        onClick={() => nextPage && navigate(nextPage)}
        disabled={!nextPage}
        className={`px-6 py-3 rounded-lg font-medium nav-button ${
          nextPage
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        次へ
      </button>
    </div>
  );
};

export default Navigation;
