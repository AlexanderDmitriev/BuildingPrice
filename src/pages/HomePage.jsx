import {
  CoolSlogans,
  MainSlogan,
  ReadMoreButton,
  HeroSection,
  AboutUsTopic,
  AboutUsImg,
  AboutUsSecton,
  AboutUsTitle,
  OffersSection,
  OffersText,OffersTitle,
  OffersTopic,
  OfferListItem,
  ClientsSection,ClienList,
  OffersList,ClientListItem,
} from '../components/Home/HomePage.styled';
import { slogans } from 'components/Home/slogans';
/* import altPic from '../images/PhotoAlt.png'; */
import money from '../images/money.jpg';

export const HomePage = () => {
  const randomSlogan = Math.floor(Math.random() * 10);
  return (
    <>
      <HeroSection>
        <MainSlogan>Ми працюємо для вас</MainSlogan>
        <CoolSlogans>{slogans[randomSlogan]}</CoolSlogans>
        <ReadMoreButton to="/questions">Дізнатися більше</ReadMoreButton>
      </HeroSection>
      <AboutUsSecton>
        <div>
          <AboutUsTitle>ПРО НАС</AboutUsTitle>
          <AboutUsTopic>
            Команда бухгалтерів Саргоніка Україна має багаторічний досвід
            ведення бухгалтерського обліку, розв'язання суперечок з
            контролюючими органами. Протягом усього свого професіонального стажу
            ми робимо все необхідне, щоб будь-які проблеми клієнта вирішувались
            ще до того, як вони зможуть тільки з'явитися.
          </AboutUsTopic>
          <AboutUsTopic>
            Ми вимогливо ставимось до якісної підтримки вашого бізнесу, бо це не
            тільки робота, але й наше "обличчя"
          </AboutUsTopic>
        </div>
        <AboutUsImg src={money} alt="" />
      </AboutUsSecton>
      <OffersSection>
        <OffersText>
          <OffersTitle>Послуги</OffersTitle>
          <OffersTopic>
            Якісний бухгалтерський облік по всій території України. Наші
            спеціалісти мають великий досвід, тож можете бути впевненими - ви в
            надійних руках
          </OffersTopic>
          <OffersTopic>
            Персональна турбота про кожного клієнта, індивідуальні рішення та
            зв'язок зручним для вас чином. Вам не треба перейматися тонкощами
            веденя обліку та змінами в податковому законодавстві. Це за вас
            зробимо ми
          </OffersTopic>
        </OffersText>
        <OffersList>
          <OfferListItem>Бухгалтерський облік</OfferListItem>
          <OfferListItem>Податкові зобов’язання</OfferListItem>
          <OfferListItem>Консультування ФОП</OfferListItem>
          <OfferListItem>Консультування ТОВ</OfferListItem>
        </OffersList>
      </OffersSection>
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
