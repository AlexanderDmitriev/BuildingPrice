import styled from 'styled-components';
import back1 from '../images/OBJECTS1.svg';
import back2 from '../images/Group30.svg';
import back3 from '../images/Group29.svg';

export const TempContainer = styled.div`
  padding: 60px;
`;
export const Back1 = styled.img`
  position: absolute;
  right: 0%;
  top: 0%;
`;
export const Back2 = styled.img`
  position: absolute;
  right: 0;
  top: 436px;
`;
export const Back3 = styled.img`
  position: absolute;
  left: 0;
  top: 636px;
`;

export const Container = ({ children }) => {
  return (
    <TempContainer>
      <Back1 src={back1}></Back1>
      <Back2 src={back2}></Back2>
      <Back3 src={back3}></Back3>
      {children}
    </TempContainer>
  );
};
