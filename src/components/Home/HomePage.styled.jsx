import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import pointList from '../../images/point.svg';

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

export const MainSlogan = styled.p`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
  /* or 62px */
  text-transform: uppercase;
  color: #191924;
  position: relative;
  z-index: 20;
  padding-top: 100px;
  padding-bottom: 24px;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 48px;
  }
  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 110%;
  }
  @media screen and (min-width: 1200px) {
    font-size: 100px;
    line-height: 120%;
    /* or 120px */
  }
`;

export const CoolSlogans = styled.p`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 120%;
  margin: 0;
  color: #191924;
  padding-bottom: 40px;
  position: relative;
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
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

export const AboutUsTitle = styled.h2`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
  /* identical to box height, or 120px */
  margin: 0;
  display: block;
  text-transform: uppercase;
  color: #191924;
  border-bottom: 1px solid #418b77;
  width: 90%;
  text-align: center;
  @media screen and (min-width: 480px) {
    font-size: 48px;
  }
  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 110%;
  }
  @media screen and (min-width: 1200px) {
    text-align: start;
    font-size: 100px;
    line-height: 120%;
    /* or 120px */
  }
  div {
    height: 24px;
    display: block;
    border-top: 1px solid #418b77;
  }
`;

export const AboutUsSecton = styled.div`
  display: block;
  padding-bottom: 200px;
  @media screen and (min-width: 480px) {
    padding-bottom: 250px;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 275px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    padding-bottom: 300px;
  }
`;

export const AboutUsTopic = styled.p`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  /* or 22px */
  display: flex;
  align-items: center;
  color: #191924;
  padding-bottom: 24px;
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const AboutUsImg = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    max-width: 50%;
  }
`;
////////////////////////////
export const OffersSection = styled.div`
  padding-bottom: 150px;
  display: block;
  @media screen and (min-width: 480px) {
    padding-bottom: 200px;
  }
  @media screen and (min-width: 768px) {
    padding-bottom: 250px;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 300px;
  }
`;

export const OffersText = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const OffersTitle = styled.h2`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
  /* identical to box height, or 120px */
  margin: 0 auto;
  align-items: center;
  position: relative;
  text-transform: uppercase;
  text-align: center;
  color: #191924;
  border-bottom: 1px solid #418b77;
  @media screen and (min-width: 480px) {
    font-size: 48px;
  }
  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 110%;
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
    font-size: 100px;
    line-height: 120%;
    /* or 120px */
  }
  div {
    height: 24px;
    display: block;
    border-top: 1px solid #418b77;
  }
`;

export const OffersTopic = styled.p`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  /* or 22px */
  display: flex;
  align-items: center;
  color: #191924;
  padding-bottom: 24px;
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const OffersList = styled.ul`
  & li:not(:last-child) {
    padding-bottom: 25px;
    @media screen and (min-width: 480px) {
      padding-bottom: 30px;
    }
    @media screen and (min-width: 768px) {
      padding-bottom: 35px;
    }
    @media screen and (min-width: 1200px) {
      padding-bottom: 40px;
    }
  }
`;

export const OfferListItem = styled.li`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 53px */
  display: flex;
  align-items: center;
  text-align: right;
  color: #191924;
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }

  &::before {
    content: '';
    display: inline-block;
    background-size: contain;
    margin-right: 40px;
    height: 20px;
    width: 16px;
    background-image: url(${pointList});
    @media screen and (min-width: 480px) {
    height: 24px;
    width: 20px;
  }
  }
`;

export const ClientsSection = styled.div`
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

export const ClienList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & li:not(:last-child) {
    margin-right: 15px;
  }
`;

export const ClientListItem = styled.li`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 53px */
  margin-bottom: 10px;
  align-items: center;
  text-align: right;
  border-left: 1px solid #418b77;
  border-right: 1px solid #418b77;
  padding: 5px 10px;
  color: #191924;
  @media screen and (min-width: 480px) {
    font-size: 24px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 36px;
  }
`;
