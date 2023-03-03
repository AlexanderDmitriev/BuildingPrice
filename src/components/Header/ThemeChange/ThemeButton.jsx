import React from 'react';
import { ThemeButtonCustom,Circle } from './ThemeButton.styled';

const ThemeButton = ({ isDarkTheme, handleChangeTheme }) => {

  return (
    <>
      {/* <ThemeButtonCustom
        type="button"
        onClick={() => {
          handleChangeTheme();
        }}
      >
      </ThemeButtonCustom> */}
      <label>
        <ThemeButtonCustom
          onChange={handleChangeTheme}
          checked={isDarkTheme}
          offColor={'#fff'}
          onColor={'#fff'}
          onHandleColor={'#000'}
          offHandleColor={'#000'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={24}
          width={56}
          borderRadius={40}
          handleDiameter={17}
          checkedHandleIcon={<Circle />}
          uncheckedHandleIcon={<Circle />}
        />
      </label>
    </>
  );
};

export default ThemeButton;
