import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import DefaultPage from './pages/DefaultPage';
import KeyboardInstructions from './components/KeyboardInstructions';
import PageIndicator from './components/PageIndicator';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentPath = location.pathname;
      
      // Handle default page
      if (currentPath === '/default') {
        if (event.key === 'ArrowLeft') {
          navigate('/page7');
        } else if (event.key === 'ArrowRight') {
          navigate('/page1');
        }
        return;
      }
      
      const pageNumber = parseInt(currentPath.replace('/page', ''));
      
      if (event.key === 'ArrowLeft' && pageNumber > 1) {
        navigate(`/page${pageNumber - 1}`);
      } else if (event.key === 'ArrowRight') {
        navigate(`/page${pageNumber + 1}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/page1" replace />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/default" element={<DefaultPage />} />
        {/* Catch-all route for non-existent pages */}
        <Route path="*" element={<Navigate to="/default" replace />} />
      </Routes>
      <PageIndicator />
      <KeyboardInstructions />
    </>
  );
}

export default App
