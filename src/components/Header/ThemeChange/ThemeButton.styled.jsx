import styled from 'styled-components';
import Switch from 'react-switch';

export const ThemeButtonCustom = styled(Switch)`
  border: 2px solid ${props => props.theme.colors.accentColor};
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
    color: #eb0e0e;
    box-shadow: 1px 1px 5px var(--company-color);
  } */
`;

export const Circle = styled.div`
width: 8px;
height: 8px;
background-color: ${props => props.theme.colors.bgColor};
border-radius: 50%;
margin: 5px auto;
`;
