import {
  AboutUsTitle,
  ClientsSection,
  ClienList,
  ClientListItem,
} from '../components/Home/HomePage.styled';
import {
  HeroSection,
  MainSlogan,
  ReadMoreButton,
} from '../components/Home/HeroSection/HeroSection.styled';
import { AboutUs } from '../components/Home/AboutUs';
import { Offers } from '../components/Home/OffersSection/Offers';
import { GetSlogans } from '../components/Home/HeroSection/GetSlogans';
import osbbLogo from '../images/home3.svg';
import fopLogo from '../images/user-tie.svg';
import { BasketLogo } from '../components/Header/Header.styled';

export const HomePage = ({ t }) => {
  return (
    <>
      <HeroSection>
        <MainSlogan>{t('homePage.home.mainSlogan')}</MainSlogan>
        <GetSlogans t={t} />
        <ReadMoreButton to="/questions">
          {t('homePage.home.readMore')}
        </ReadMoreButton>
      </HeroSection>
      <AboutUs t={t} />
      <Offers t={t} />
      <ClientsSection>
        <AboutUsTitle>
          {t('homePage.home.ClientsTitle')} <div></div>{' '}
        </AboutUsTitle>
        <ClienList>
          <ClientListItem>
            {' '}
            <BasketLogo src={osbbLogo} alt="basket" />{' '}
            {t('homePage.home.Client1')}
          </ClientListItem>
          <ClientListItem>
            <BasketLogo src={osbbLogo} alt="basket" />{' '}
            {t('homePage.home.Client2')}
          </ClientListItem>
          <ClientListItem>
            <BasketLogo src={osbbLogo} alt="basket" />{' '}
            {t('homePage.home.Client3')}
          </ClientListItem>
          <ClientListItem>
            <BasketLogo src={fopLogo} alt="basket" />{' '}
            {t('homePage.home.Client4')}
          </ClientListItem>
          <ClientListItem>
            <BasketLogo src={fopLogo} alt="basket" />{' '}
            {t('homePage.home.Client5')}
          </ClientListItem>
          <ClientListItem>{t('homePage.home.Client6')}</ClientListItem>
        </ClienList>
      </ClientsSection>
    </>
  );
};
