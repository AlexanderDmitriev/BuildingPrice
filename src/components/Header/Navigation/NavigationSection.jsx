import { NavigationList, ServicesLink } from './NavigationSection.styled';

const Navigation = ({ t }) => {

  return (
    <nav>
      <NavigationList>
        <li>
          <ServicesLink to="/">{t('navigation.main')}</ServicesLink>
        </li>
        <li>
          <ServicesLink to="/fop">{t('navigation.toFOP')}</ServicesLink>
        </li>
        <li>
          <ServicesLink to="/ooo">{t('navigation.toOOO')}</ServicesLink>
        </li>
        <li>
          <ServicesLink to="/questions">{t('navigation.questions')}</ServicesLink>
        </li>
        <li>
          <ServicesLink to="/team">{t('navigation.team')}</ServicesLink>
        </li>
      </NavigationList>
    </nav>
  );
};

export default Navigation;
