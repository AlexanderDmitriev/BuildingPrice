import { ThemeProvider } from 'styled-components';
import { /* theme, */ light /* dark */ } from './theme';
import { GlobalStyles } from './global';
import React, {
  useState,
  /* useEffect,
  useRef, */
  /* lazy, */ Suspense,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { HomePage } from '../pages/HomePage';
import { Footer } from './Footer/Footer';
import { Services } from '../pages/Services';
import { MakeQuestionPage } from '../pages/MakeQuestionPage';
import { OurTeamPage } from '../pages/OurTeamPage';
import { Basket } from '../pages/Basket';
import { NotFoundPage } from '../pages/NotFoundPage';
import { Container } from './Container';
/* const Header = lazy(() => import('./Header/Header')); */
/* const HomePage = lazy(() => import('../pages/HomePage')); */

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Container>
          <Header
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isDarkTheme={isDarkTheme}
            setIsDarkTheme={setIsDarkTheme}
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
          <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fop" element={<Services />} />
            <Route path="/ooo" element={<Services />} />
            <Route path="/questions" element={<MakeQuestionPage />} />
            <Route path="/team" element={<OurTeamPage />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          </div>
          
          <Footer />
        </Container>
      </Suspense>
    </ThemeProvider>
  );
};
