import ThemeButton from '../ThemeChange/ThemeButton';
import { AdditionalNavigation, BasketLogo, BasketLink } from '../Header.styled';
import { LanguegeButton } from '../LanguegeButton';
import React from 'react';
import basketLogo from '../../../images/cart.svg';

export const OtherNavigation = ({ isDarkTheme, handleChangeTheme }) => {
  return (
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
  );
};
