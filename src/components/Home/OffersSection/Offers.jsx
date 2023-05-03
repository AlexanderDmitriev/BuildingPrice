import {
  OffersSection,
  OffersText,
  OffersTitle,
  OffersTopic,
  OfferListItem,
  OffersList,
} from '../OffersSection/Offers.styled';
import { ReadMoreButton } from '../HeroSection/HeroSection.styled';

export const Offers = ({ t }) => {
  return (
    <OffersSection>
      <OffersText>
        <OffersTitle>
          {t('homePage.offers.title')}
          <div></div>
        </OffersTitle>
        <OffersTopic>{t('homePage.offers.topic1')}</OffersTopic>
        <OffersTopic>{t('homePage.offers.topic2')}</OffersTopic>
        <ReadMoreButton to="/questions">
          {t('homePage.home.readMore')}
        </ReadMoreButton>
      </OffersText>

      <OffersList>
        <OfferListItem>{t('homePage.offers.forAccounting')}</OfferListItem>
        <OfferListItem>{t('homePage.offers.forTax')}</OfferListItem>
        <OfferListItem>{t('homePage.offers.forFOP')}</OfferListItem>
        <OfferListItem>{t('homePage.offers.forOOO')}</OfferListItem>
      </OffersList>
    </OffersSection>
  );
};
