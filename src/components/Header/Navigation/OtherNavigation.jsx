import ThemeButton from '../ThemeChange/ThemeButton';
import { AdditionalNavigation, BasketLogo, BasketLink } from '../Header.styled';
import { LanguegeButton } from '../LanguegeButton';
import React from 'react';
/* import basketLogo from '../../../images/cart.svg'; */
import basketLogo2 from '../../../images/basket2.svg';

export const OtherNavigation = ({ isDarkTheme, handleChangeTheme,i18n }) => {
  return (
    <AdditionalNavigation>
      <li>
        <ThemeButton
          isDarkTheme={isDarkTheme}
          handleChangeTheme={handleChangeTheme}
        />
      </li>
      <li>
        <LanguegeButton i18n={i18n}/>
      </li>
      <li>
        <BasketLink to="/basket">
          <span>
            {/* <BasketLogo width="24" height="24">
                    <use src={basketLogo}></use>
                  </BasketLogo> */}
            <BasketLogo src={basketLogo2} alt="basket" />
          </span>
        </BasketLink>
      </li>
    </AdditionalNavigation>
  );
};
