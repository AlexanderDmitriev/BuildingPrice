import Navigation from './Navigation/NavigationSection';
import ThemeButton from './ThemeChange/ThemeButton';
import {
  HeaderSection,
  HeaderBody,
  AdditionalNavigation,
  HeaderContainer,
  Logo,
  BasketLogo,
  BasketLink,
} from './Header.styled';
import { LanguegeButton } from './LanguegeButton';
/* import Burger from './Navigation/Burger/Burger';
import Menu from './Navigation/Menu/Menu'; */
import React, { useEffect, useRef } from 'react';
/* import { useMediaQuery } from 'react-responsive'; */
import { useOnClickOutside } from './Navigation/Burger/hooks';
/* import sargonikaLogo from '../../images/SargonikaLogoUa.jpg'; */
import { NavLink } from 'react-router-dom';
/* import logo from '../../images/Logo.svg'; */
import logo2 from '../../images/sargonikaUaLogo.jpg';
import basketLogo from '../../images/cart.svg';

const Header = ({
  isOpen,
  setIsOpen,
  isDarkTheme,
  setIsDarkTheme,
  currentTheme,
  setCurrentTheme,
}) => {
  /* const isTab = useMediaQuery({ query: '(min-width: 768px)' }); */

  const node = useRef();
  useOnClickOutside(node, () => setIsOpen(false));

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log(isDarkTheme);
  };
  useEffect(() => {
    isDarkTheme ? setCurrentTheme('dark') : setCurrentTheme('light');
    console.log(currentTheme);
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
          <Navigation />
          <AdditionalNavigation>
            <li>
              <ThemeButton
                isDarkTheme={isDarkTheme}
                handleChangeTheme={handleChangeTheme}
              />
            </li>
            <li>
              <LanguegeButton />
            </li>
            <li>
              <BasketLink to="/basket">
                <span>
                  {/* <BasketLogo width="24" height="24">
                    <use src={basketLogo}></use>
                  </BasketLogo> */}
                  <BasketLogo src={basketLogo} alt="basket" />
                </span>
              </BasketLink>
            </li>
          </AdditionalNavigation>
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
