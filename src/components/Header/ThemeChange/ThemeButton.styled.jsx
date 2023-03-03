import styled from 'styled-components';
import Switch from 'react-switch';

export const ThemeButtonCustom = styled(Switch)`
  border: 2px solid #95e2e9;
  border-radius: 40px;
  /* border: none;
  background-color: transparent;
  cursor: pointer;
  color: #fff; */
  /*  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;

  &:hover,
  &:focus {
    color: red;
    box-shadow: 1px 1px 5px var(--company-color);
  } */
`;

export const Circle = styled.div`
width: 8px;
height: 8px;
background-color: #fff;
border-radius: 50%;
margin: 5px auto;
`;
