import Navigation from './Navigation/NavigationSection';
import {
  HeaderSection,
  HeaderBody,
  HeaderContainer,
  Logo,
} from './Header.styled';
/* import Burger from './Navigation/Burger/Burger';
import Menu from './Navigation/Menu/Menu'; */
import React, { useEffect, useRef } from 'react';
/* import { useMediaQuery } from 'react-responsive'; */
import { useOnClickOutside } from './Navigation/Burger/hooks';
/* import sargonikaLogo from '../../images/SargonikaLogoUa.jpg'; */
import { NavLink } from 'react-router-dom';
import logo2 from '../../images/sargonikaUaLogo.jpg';
import { OtherNavigation } from './Navigation/OtherNavigation';

const Header = ({
  isOpen,
  setIsOpen,
  isDarkTheme,
  setIsDarkTheme,
  currentTheme,
  setCurrentTheme,
  t, i18n,
}) => {
  /* const isTab = useMediaQuery({ query: '(min-width: 768px)' }); */

  const node = useRef();
  useOnClickOutside(node, () => setIsOpen(false));

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    /* console.log(isDarkTheme); */
  };
  useEffect(() => {
    isDarkTheme ? setCurrentTheme('dark') : setCurrentTheme('light');
    /* console.log(currentTheme); */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkTheme]);

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderBody>
          <NavLink to="/">
            <span>
              <Logo src={logo2} alt="sargonika-ukraine" />
            </span>
          </NavLink>
          <Navigation  t={t}/>
          <OtherNavigation
            isDarkTheme={isDarkTheme}
            handleChangeTheme={handleChangeTheme}
            i18n={i18n}
          />
        </HeaderBody>
      </HeaderContainer>
      {/* 
        <>
          <LanguegeButton />
          <div ref={node}>
            <Burger open={isOpen} setOpen={setIsOpen} />
            <Menu open={isOpen} setOpen={setIsOpen} />
          </div>
        </>
      )}*/}
    </HeaderSection>
  );
};

export default Header;
