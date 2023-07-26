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
          offColor={`#FBFCFE`}
          onColor={`#191924`}
          onHandleColor={`#FBFCFE`}
          offHandleColor={`#191924`}
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
