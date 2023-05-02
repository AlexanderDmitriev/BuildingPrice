import styled from 'styled-components';

export const FooterList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & li:not(:last-child) {
    margin-right: 30px;
  }
`;

export const FooterListItem = styled.li`
  font-family: Inter serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */
  display: flex;
  align-items: center;
  color: #191924;
  border-top: 1px solid #418b77;
  padding-top: 24px;
  margin-bottom: 24px;
`;

export const FooterImg = styled.img`
  width: 20px;
  margin-right: 8px;
`;
