import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import LanguageSelector from './components/LanguageSelector';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const { isLanguageSelected } = useLanguage();

  return (
    <>
      {!isLanguageSelected && <LanguageSelector />}
      <div className={!isLanguageSelected ? 'blur-sm pointer-events-none' : ''}>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </MainLayout>
        </Router>
      </div>
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;