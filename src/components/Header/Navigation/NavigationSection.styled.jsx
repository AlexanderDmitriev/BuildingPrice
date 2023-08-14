import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const ServicesLink = styled(NavLink)`
display: block;
  text-decoration: none;
  font-family: Inter serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 110%;
  color: ${props => props.theme.colors.primaryTextColor};
  cursor: pointer;
  text-align: center;
  padding: 5px 10px;
  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;
  @media screen and (min-width: 480px) {
    font-size: 14px;
    line-height: 110%;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 110%;
  }
  @media screen and (min-width: 1200px) {
    font-size: 20px;
    line-height: 110%;
    padding: 6px 12px;
  }
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.focusColor};
  }
`;
