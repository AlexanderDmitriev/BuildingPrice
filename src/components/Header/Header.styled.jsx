import styled from 'styled-components';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.header`
  position: fixed;
  width: 100%;
  top: 0; 
  z-index: 200;
  background-color: ${props => props.theme.colors.bgColor};
`;

export const HeaderBody = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

export const HeaderContainer = styled.div`
  /* max-width: 1400px; */
  margin: 0 auto;
  padding: 15px;
  /* box-shadow: 0px 5px 3px rgba(9, 30, 63, 0.1); */
`;

export const AdditionalNavigation = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  & li:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Logo = styled.img`
  height: 65px;
  border-radius: 40px;
`;
export const BasketLogo = styled.img`
  height: 24px;
  color: ${props => props.theme.colors.accentColor};
`;

export const BasketLogo2 = styled.svg`
  height: 24px;
  fill: ${props => props.theme.colors.accentColor};
`;

export const BasketLink = styled(NavLink)``;

//////////////////////////////////////////
export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 65px;
`;

export const SelectLanguege = styled(Select)`
  width: 57px;

  .css-13cymwt-control,
  .css-t3ipsp-control {
    border: none;
    font-family: Inter serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    align-items: center;
    color: ${props => props.theme.colors.primaryTextColor};
    background-color: ${props => props.theme.colors.bgColor};
    cursor: pointer;
  }
  .css-1u9des2-indicatorSeparator {
    width: 0;
  }
  .css-1jqq78o-placeholder {
    color: ${props => props.theme.colors.primaryTextColor};
  }
  .css-1xc3v61-indicatorContainer,
  .css-15lsz6c-indicatorContainer {
    color: ${props => props.theme.colors.primaryTextColor};
    padding: 0;
  }
  .css-1fdsijx-ValueContainer {
    padding: 0;
  }
  .css-1dimb5e-singleValue {
    color: ${props => props.theme.colors.primaryTextColor};
  }
  .css-1nmdiq5-menu {
    color: ${props => props.theme.colors.primaryTextColor};
    background-color: ${props => props.theme.colors.bgColor};
  }
`;
