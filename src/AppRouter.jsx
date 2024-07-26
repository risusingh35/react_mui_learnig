import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TypographyPage from './pages/mui/TypographyPage';
import MuiButtonPage from './pages/mui/MuiButtonPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/TypographyPage" element={<TypographyPage />} />
        <Route exact path="/MuiButtonPage" element={<MuiButtonPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
