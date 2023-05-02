import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import pointList from '../../images/point.svg';

export const HeroSection = styled.div`
  padding-bottom: 200px;
`;

export const MainSlogan = styled.p`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 120%;
  /* or 120px */
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin: 0;
  color: #191924;
  position: relative;
  z-index: 20;
  padding-top: 100px;
  padding-bottom: 24px;
  width: 801px;
`;

export const CoolSlogans = styled.p`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */
  margin: 0;
  display: flex;
  align-items: center;
  color: #191924;
  padding-bottom: 40px;
`;

export const ReadMoreButton = styled(NavLink)`
  background-color: #418b77;
  padding: 16px 32px;
  border-radius: 8px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 110%;
  /* or 26px */
  display: flex;
  align-items: center;
  color: #ffffff;
  display: inline;
  text-decoration: none;
  :hover {
    background-color: #529c88;
  }
`;

export const AboutUsTopic = styled.p`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* or 22px */
  display: flex;
  align-items: center;
  color: #191924;
  padding-bottom: 24px;
`;

export const AboutUsImg = styled.img`
  width: 50%;
`;

export const AboutUsSecton = styled.div`
  display: flex;
  padding-bottom: 300px;
`;

export const AboutUsTitle = styled.h2`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 120%;
  /* identical to box height, or 120px */
  margin: 0;
  display: block;
  text-transform: uppercase;
  color: #191924;
  border-bottom: 1px solid #418b77;
  width: 90%;
  div {
    height: 24px;
    display: block;
    border-top: 1px solid #418b77;
  }
`;

export const OffersSection = styled.div`
  padding-bottom: 300px;
  display: flex;
  justify-content: space-between;
`;

export const OffersText = styled.div`
  width: 50%;
`;
export const OffersTitle = styled.h2`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 120%;
  /* identical to box height, or 120px */
  margin: 0;

  align-items: center;
  text-transform: uppercase;

  color: #191924;
  border-bottom: 1px solid #418b77;
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
  font-size: 20px;
  line-height: 110%;
  /* or 22px */

  display: flex;
  align-items: center;
  color: #191924;
  padding-bottom: 24px;
`;

export const OffersList = styled.ul`
  & li:not(:last-child) {
    padding-bottom: 40px;
  }
`;

export const OfferListItem = styled.li`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 110%;
  /* identical to box height, or 53px */

  display: flex;
  align-items: center;
  text-align: right;

  color: #191924;
  &::before {
    content: '';
    display: inline-block;
    margin-right: 40px;
    height: 24px;
    width: 20px;
    background-image: url(${pointList});
  }
`;

export const ClientsSection = styled.div`
  padding-bottom: 200px;
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
  font-size: 36px;
  line-height: 110%;
  /* identical to box height, or 53px */

  margin-bottom: 10px;
  align-items: center;
  text-align: right;
  /* background-color: #547fe7; */
  /* border-radius: 10px; */
  border-left: 1px solid #418b77;
  border-right: 1px solid #418b77;

  padding: 5px 10px;
  color: #191924;
`;
