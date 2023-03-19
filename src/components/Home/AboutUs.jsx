import {
  AboutUsTopic,
  AboutUsImg,
  AboutUsSecton,
  AboutUsTitle,
} from './HomePage.styled';
import money from '../../images/money.jpg';

export const AboutUs = ({ t }) => {
  return (
    <AboutUsSecton>
      <div>
        <AboutUsTitle>{t('homePage.aboutUs.title')}</AboutUsTitle>
        <AboutUsTopic>{t('homePage.aboutUs.topic')}</AboutUsTopic>
        <AboutUsTopic>{t('homePage.aboutUs.topic2')}</AboutUsTopic>
      </div>
      <AboutUsImg src={money} alt="" />
    </AboutUsSecton>
  );
};
