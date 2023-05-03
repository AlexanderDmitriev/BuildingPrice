import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Title, Topic } from '../../Common/Common';

export const HeroSection = styled.div`
  padding-bottom: 125px;
  @media screen and (min-width: 480px) {
    padding-bottom: 150px;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 175px;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 200px;
  }
`;

export const MainSlogan = styled(Title)`
  position: relative;
  z-index: 20;
  padding-top: 100px;
  padding-bottom: 24px;
  margin: 0 auto;
`;

export const CoolSlogans = styled(Topic)`
  margin: 0;
  color: #191924;
  padding-bottom: 40px;
  position: relative;
`;

export const ReadMoreButton = styled(NavLink)`
  background-color: #418b77;
  padding: 16px 32px;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 110%;
  /* or 26px */
  display: block;
  max-width: 200px;
  margin: 0 auto;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  @media screen and (min-width: 480px) {
    max-width: 250px;
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1200px) {
    display: inline;
    font-size: 24px;
  }
  :hover {
    background-color: #529c88;
  }
`;
