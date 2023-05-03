import styled from 'styled-components';

export const Title = styled.h2`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
  text-transform: uppercase;
  text-align: center;
  color: #191924;
  border-bottom: 1px solid #418b77;
  div {
    height: 24px;
    display: block;
    border-top: 1px solid #418b77;
  }
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
`;

export const Topic = styled.p`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  @media screen and (min-width: 480px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
