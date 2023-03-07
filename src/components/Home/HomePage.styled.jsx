import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeroSection = styled.div`
  padding-bottom: 245px;
`;

export const MainSlogan = styled.p`
  font-family: 'Inter' serif;
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
  padding-top: 113px;
  padding-bottom: 24px;
  width: 801px;
`;

export const CoolSlogans = styled.p`
  font-family: 'Inter' serif;
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
  background: #547fe7;
  padding: 16px 32px;
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
`;

export const AboutUsTopic = styled.p`
  font-family: 'Inter' serif;
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
  height: 438px;
`;

export const AboutUsSecton = styled.div`
  display: flex;
  padding-bottom: 350px;
`;

export const AboutUsTitle = styled.h2`
  font-family: 'Inter' serif;
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 120%;
  /* identical to box height, or 120px */
  margin: 0;
  display: flex;
  align-items: center;
  text-transform: uppercase;

  color: #191924;
`;

export const OffersSection = styled.div`
  padding-bottom: 320px;
  display: flex;
  justify-content: space-between;
`;

export const OffersText = styled.div`
  width: 50%;
`;
export const OffersTitle = styled.h2`
  font-family: 'Inter' serif;
  font-style: normal;
  font-weight: 500;
  font-size: 100px;
  line-height: 120%;
  /* identical to box height, or 120px */
  margin: 0;

  align-items: center;
  text-transform: uppercase;

  color: #191924;
`;

export const OffersTopic = styled.p`
  font-family: 'Inter' serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* or 22px */

  display: flex;
  align-items: center;
  color: #191924;
`;

export const OffersList = styled.ul`
  list-style: none;
  & li:not(:last-child) {
    padding-bottom: 40px;
  }
`;

export const OfferListItem = styled.li`
  font-family: 'Inter' serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 110%;
  /* identical to box height, or 53px */

  display: flex;
  align-items: center;
  text-align: right;

  color: #191924;
`;

export const ClientsSection = styled.div`
  padding-bottom: 240px;
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
  font-family: 'Inter' serif;
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 110%;
  /* identical to box height, or 53px */

  margin-bottom: 10px;
  align-items: center;
  text-align: right;
  background-color: #547fe7;
  border-radius: 10px;

  padding: 5px 10px;
  color: #fff;
`;
