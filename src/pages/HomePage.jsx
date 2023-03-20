import {
  MainSlogan,
  ReadMoreButton,
  HeroSection,
  AboutUsTitle,
  ClientsSection,
  ClienList,
  ClientListItem,
} from '../components/Home/HomePage.styled';
import { AboutUs } from '../components/Home/AboutUs';
import { Offers } from '../components/Home/Offers';
import { GetSlogans } from '../components/Home/GetSlogans';

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
        <AboutUsTitle>{t('homePage.home.ClientsTitle')}</AboutUsTitle>
        <ClienList>
          <ClientListItem>{t('homePage.home.Client1')}</ClientListItem>
          <ClientListItem>{t('homePage.home.Client2')}</ClientListItem>
          <ClientListItem>{t('homePage.home.Client3')}</ClientListItem>
          <ClientListItem>{t('homePage.home.Client4')}</ClientListItem>
          <ClientListItem>{t('homePage.home.Client5')}</ClientListItem>
          <ClientListItem>{t('homePage.home.Client6')}</ClientListItem>
        </ClienList>
      </ClientsSection>
    </>
  );
};
