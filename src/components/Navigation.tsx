import { useNavigate, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract current page number from URL
  const getCurrentPageNumber = (): number => {
    const match = location.pathname.match(/\/page(\d+)/);
    return match ? parseInt(match[1], 10) : 1;
  };

  const currentPage = getCurrentPageNumber();
  const prevPage = currentPage > 1 ? `/page${currentPage - 1}` : null;
  const nextPage = `/page${currentPage + 1}`;

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
        onClick={() => navigate(nextPage)}
        className="px-6 py-3 rounded-lg font-medium nav-button bg-blue-500 text-white hover:bg-blue-600"
      >
        次へ
      </button>
    </div>
  );
};

export default Navigation;
