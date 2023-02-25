import React from 'react';
/* import { MdDarkMode, MdWbSunny } from 'react-icons/md'; */
import { ThemeButtonCustom } from './ThemeButton.styled';
import Switch from 'react-switch';
import styled from 'styled-components';

const ThemeButton = ({ isDarkTheme, handleChangeTheme }) => {
  const Circle = styled.div`
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    margin: 5px auto;
  `;
  return (
    <>
      {/* <ThemeButtonCustom
        type="button"
        onClick={() => {
          handleChangeTheme();
        }}
      >
        {!isDarkTheme ? <MdWbSunny size="30" /> : <MdDarkMode size="30" />}
      </ThemeButtonCustom> */}
      <label>
        <ThemeButtonCustom
          onChange={handleChangeTheme}
          checked={isDarkTheme}
          offColor={'transparent'}
          onColor={'transparent'}
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
