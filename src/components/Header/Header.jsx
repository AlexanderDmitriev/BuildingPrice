import Navigation from './Navigation/NavigationSection';
import ThemeButton from './ThemeChange/ThemeButton';
import {
  HeaderSection,
  HeaderBody,
  AdditionalNavigation,
  HeaderContainer,
  Logo,
  BasketLink,
} from './Header.styled';
import { LanguegeButton } from './LanguegeButton';
/* import Burger from './Navigation/Burger/Burger';
import Menu from './Navigation/Menu/Menu'; */
import React, { useState, useRef } from 'react';
/* import { useMediaQuery } from 'react-responsive'; */
import { useOnClickOutside } from './Navigation/Burger/hooks';
import sargonikaLogo from '../../images/SargonikaLogoUa.jpg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  /* const isTab = useMediaQuery({ query: '(min-width: 768px)' }); */
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const node = useRef();
  useOnClickOutside(node, () => setIsOpen(false));

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderBody>
          <NavLink to="/">
            <span>
              <Logo src={sargonikaLogo} alt="sargonika-ukraine" />
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
              <BasketLink to="/basket">До кошика</BasketLink>
            </li>
          </AdditionalNavigation>
        </HeaderBody>
      </HeaderContainer>

      {/* 
          <ThemeButton
            isDarkTheme={isDarkTheme}
            handleChangeTheme={handleChangeTheme}
          />

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
