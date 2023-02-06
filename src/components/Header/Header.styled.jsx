import styled from 'styled-components';
import Select from 'react-select';

export const AdditionalNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserMenu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 65px;
`;

export const Logo = styled.img`
  height: 75px;
`;

export const SelectLanguege = styled(Select)`
  width: 100px;
  height: 50px;
  @media screen and (max-width: 768px) {
    margin-left: auto;
  }
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 15px;
  position: fixed;
  background-color: #008cff;
  top: 0;
  left: 0;
  width: 100vw;
  box-shadow: 0px 5px 3px rgba(9, 30, 63, 0.1);
`;
