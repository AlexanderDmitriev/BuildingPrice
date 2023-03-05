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
  ClientsSection,
  OffersList,
} from '../components/Home/HomePage.styled';
import { slogans } from 'components/Home/slogans';
import altPic from '../images/PhotoAlt.png';

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
            Якісний бухгалтерський облік по всій території України. Наші
            спеціалісти мають великий досвід, тож можете бути впевненими - ви в
            надійних руках
          </AboutUsTopic>
          <AboutUsTopic>
            Персональна опека кожного клієнта, індивідуальні рішення та зв'язок
            зручним для вас чином
          </AboutUsTopic>
        </div>
        <AboutUsImg src={altPic} alt="" />
      </AboutUsSecton>
      <OffersSection>
        <div>
          <h2>Послуги</h2>
          <p>
            Опис продуктів та рішень компанії. Які саме проблеми допоможуть
            вирішити кляєнтам
          </p>
        </div>
        <OffersList>
          <li>Бухгалтерський облік</li>
          <li>Податкові зобов’язання</li>
          <li>Консультування ФОП</li>
        </OffersList>
      </OffersSection>
      <ClientsSection>
        <h2>Клієнти</h2>
        <ul>
          <li>client</li>
          <li>client</li>
          <li>client</li>
          <li>client</li>
          <li>client</li>
          <li>client</li>
        </ul>
      </ClientsSection>
    </>
  );
};
