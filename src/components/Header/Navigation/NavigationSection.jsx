import { NavigationList,ServicesLink } from './NavigationSection.styled';

const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <li><ServicesLink to="/">На головну</ServicesLink></li>
        <li><ServicesLink to="/fop">Послуги ФОП</ServicesLink></li>
        <li><ServicesLink to="/ooo">Послуги юр. особам</ServicesLink></li>
        <li><ServicesLink to="/questions">Питання</ServicesLink></li>
        <li><ServicesLink to="/team">Наша команда</ServicesLink></li>
      </NavigationList>
    </nav>
  );
};

export default Navigation;
