import { ThemeProvider } from 'styled-components';
import { /* theme, */ light /* dark */ } from './theme';
import { GlobalStyles } from './global';
import React, {
  useState,
  useEffect,
  /* useRef, */
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
import { useTranslation } from 'react-i18next';
import '../utils/i18next';
import { useSelector } from 'react-redux';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('light');
  const { t, i18n } = useTranslation();

  const getLocale = state => state.locale.currentLocale;
  const currentLocale = useSelector(getLocale);

  useEffect(() => {
    window.localStorage.setItem('locale', JSON.stringify(currentLocale));
  }, [currentLocale]);

  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          currentTheme={currentTheme}
          setCurrentTheme={setCurrentTheme}
          t={t}
          i18n={i18n}
        />
        <Container>
          <div>
            <Routes>
              <Route path="/" element={<HomePage t={t} />} />
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
