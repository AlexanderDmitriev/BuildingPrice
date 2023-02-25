import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const ServicesLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Inter' serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 110%;
  color: #191924;
  cursor: pointer;
  text-align: center;
  padding: 6px 12px;
  transition-property: color, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: linear;
  &:hover,
  &:focus {
    color: green;
  }
`;
