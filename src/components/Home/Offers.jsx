import {
  OffersSection,
  OffersText,
  OffersTitle,
  OffersTopic,
  OfferListItem,
  OffersList,
} from './HomePage.styled';

export const Offers = () => {
  return (
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
  );
};
