import {
  AboutUsTopic,
  AboutUsImg,
  AboutUsSecton,
  AboutUsTitle,
} from './HomePage.styled';
//import money from '../../images/money.jpg';
import moneyTree from '../../images/moneyTree.png';

export const AboutUs = ({ t }) => {
  return (
    <AboutUsSecton>
      <div>
        <AboutUsTitle>
          {t('homePage.aboutUs.title')}
          <div></div>
        </AboutUsTitle>
        <AboutUsTopic>{t('homePage.aboutUs.topic')}</AboutUsTopic>
        <AboutUsTopic>{t('homePage.aboutUs.topic2')}</AboutUsTopic>
      </div>
      <AboutUsImg src={moneyTree} alt="" />
    </AboutUsSecton>
  );
};
