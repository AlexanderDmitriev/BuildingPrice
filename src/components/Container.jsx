import styled from 'styled-components';
//import back1 from '../images/OBJECTS1.svg';
import back1 from '../images/Background1.svg';
import back2 from '../images/Background2.svg';
//import back2 from '../images/Group30.svg';
import back3 from '../images/Group29.svg';
import back4 from '../images/Background3.svg';
//import back4 from '../images/Group31.svg';

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
export const Back4 = styled.img`
  position: absolute;
  left: 0;
  top: 1289px;
`;

export const Container = ({ children }) => {
  return (
    <TempContainer>
      <Back1 src={back1}></Back1>
      <Back2 src={back2}></Back2>
      <Back3 src={back3}></Back3>
      <Back4 src={back4}></Back4>
      {children}
    </TempContainer>
  );
};
