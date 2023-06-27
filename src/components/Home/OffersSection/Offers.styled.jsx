import styled from 'styled-components';
import { Title, Topic } from '../../Common/Common';
import pointList from '../../../images/point.svg';

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

export const OffersTitle = styled(Title)`
  margin: 0 auto;
  align-items: center;
  position: relative;
`;

export const OffersTopic = styled(Topic)`
  display: flex;
  align-items: center;
  color: #191924;
  padding-bottom: 24px;
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
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${pointList});
    @media screen and (min-width: 480px) {
      height: 24px;
      width: 20px;
    }
  }
`;
