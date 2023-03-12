import { NavigationList, ServicesLink } from './NavigationSection.styled';
import { useTranslation } from 'react-i18next';
import '../../../utils/i18next';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <NavigationList>
        <li>
          <ServicesLink to="/">{t('navigation.main')}</ServicesLink>
        </li>
        <li>
          <ServicesLink to="/fop">Послуги ФОП</ServicesLink>
        </li>
        <li>
          <ServicesLink to="/ooo">Послуги юр. особам</ServicesLink>
        </li>
        <li>
          <ServicesLink to="/questions">Питання</ServicesLink>
        </li>
        <li>
          <ServicesLink to="/team">Наша команда</ServicesLink>
        </li>
      </NavigationList>
    </nav>
  );
};

export default Navigation;
