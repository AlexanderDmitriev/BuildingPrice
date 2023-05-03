import styled from 'styled-components';
import {Title,Topic} from '../Common/Common';

export const AboutUsTitle = styled(Title)`
  margin: 0;
  display: block;
  width: 90%;
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

export const AboutUsTopic = styled(Topic)`
  display: flex;
  align-items: center;
  color: #191924;
  padding-bottom: 24px;
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
