import {
  CoolSlogans,
  MainSlogan,
  ReadMoreButton,
  HeroSection,
  AboutUsTitle,
  ClientsSection,
  ClienList,
  ClientListItem,
} from '../components/Home/HomePage.styled';
import { slogans } from 'components/Home/slogans';
import { AboutUs } from '../components/Home/AboutUs';
import { Offers } from '../components/Home/Offers';

export const HomePage = () => {
  const randomSlogan = Math.floor(Math.random() * 10);
  return (
    <>
      <HeroSection>
        <MainSlogan>Ми працюємо для вас</MainSlogan>
        <CoolSlogans>{slogans[randomSlogan]}</CoolSlogans>
        <ReadMoreButton to="/questions">Дізнатися більше</ReadMoreButton>
      </HeroSection>
      <AboutUs />
      <Offers />
      <ClientsSection>
        <AboutUsTitle>Клієнти</AboutUsTitle>
        <ClienList>
          <ClientListItem>ОСББ Елефант</ClientListItem>
          <ClientListItem>ОСББ Молодіжне містечко</ClientListItem>
          <ClientListItem>ОСББ Маршал</ClientListItem>
          <ClientListItem>ФОП Дмитрієв О.О.</ClientListItem>
          <ClientListItem>ФОП Михайлова Г.В</ClientListItem>
          <ClientListItem>та інші</ClientListItem>
        </ClienList>
      </ClientsSection>
    </>
  );
};
