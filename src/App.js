import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import NonMobilePage from './components/NonMobilePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import checkMobileDevice from './components/utils/checkMobile';
import MapPage from './components/MapPage';

const AppContent = () => {
  const isMobile = checkMobileDevice();
  const location = useLocation();
  const showPlaceholder = location.pathname !== '/map';
  const fullHeight = location.pathname === '/map';

  return (
    <>
      {isMobile && < Header showPlaceholder={showPlaceholder} fullHeight={fullHeight} />}
      <Routes>
        <Route path="/" element={isMobile ? <HomePage /> : <NonMobilePage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
  );
}

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
