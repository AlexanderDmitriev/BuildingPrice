import { FooterList, FooterListItem, FooterImg } from './Footer.styled';
import facebookLogo from '../../images/facebook2.svg';
import instaLogo from '../../images/instagram.svg';
import telegramLogo from '../../images/telegram.svg';
import viberLogo from '../../images/viber.svg';
import whatsappLogo from '../../images/whatsapp.svg';

export const Footer = () => {
  return (
    <footer>
      <FooterList>
        <FooterListItem>welcome@mail.ua</FooterListItem>
        <FooterListItem>+38 099 XXX XX XX</FooterListItem>
        <FooterListItem>+38 068 XXX XX XX</FooterListItem>
        <FooterListItem>
          <FooterImg src={viberLogo} alt="" />
          <FooterImg src={telegramLogo} alt="" />
          <FooterImg src={whatsappLogo} alt="" />
          <FooterImg src={facebookLogo} alt="" />
          <FooterImg src={instaLogo} alt="" />
        </FooterListItem>
      </FooterList>
    </footer>
  );
};
