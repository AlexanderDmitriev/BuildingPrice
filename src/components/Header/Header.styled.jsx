import styled from 'styled-components';
import Select from 'react-select';
import { NavLink } from "react-router-dom";

export const HeaderSection = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 200;
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 0px 5px 3px rgba(9, 30, 63, 0.1);
`;

export const AdditionalNavigation = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  & li:not(:last-child){
    margin-right: 15px;
  }
`;

export const Logo = styled.img`
  height: 65px;
`;

export const BasketLink = styled(NavLink)`
  
`;

//////////////////////////////////////////
export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 65px;
`;

export const SelectLanguege = styled(Select)`
  width: 85px;
  border: none;
`;
