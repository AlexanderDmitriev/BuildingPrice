import { FooterList, FooterListItem, FooterImg } from './Footer.styled';
import emailLogo from '../../images/envelop.svg';
import facebookLogo from '../../images/facebook2.svg';
import instaLogo from '../../images/instagram.svg';
import phoneLogo from '../../images/phone.svg';
import telegramLogo from '../../images/telegram.svg';
import viberLogo from '../../images/viber.svg';
import whatsappLogo from '../../images/whatsapp.svg';

export const Footer = () => {
  return (
    <footer>
      <FooterList>
        <FooterListItem>
          <span>
            <FooterImg src={phoneLogo} alt="" />
          </span>
          099 XXX XX XX
        </FooterListItem>
        <FooterListItem>
          <span>
            <FooterImg src={phoneLogo} alt="" />
          </span>
          068 XXX XX XX
        </FooterListItem>
        <FooterListItem>
          <span>
            <FooterImg src={emailLogo} alt="" />
          </span>
          my_e-mail@mail.com
        </FooterListItem>
        <FooterListItem>
          <span>
            <FooterImg src={viberLogo} alt="" />
          </span>
          Viber
        </FooterListItem>
        <FooterListItem>
          <span>
            <FooterImg src={telegramLogo} alt="" />
          </span>{' '}
          Telegram
        </FooterListItem>
        <FooterListItem>
          <span>
            <FooterImg src={whatsappLogo} alt="" />
          </span>{' '}
          WhatsApp
        </FooterListItem>
        <FooterListItem>
          <span>
            <FooterImg src={facebookLogo} alt="" />
          </span>{' '}
          Facebook
        </FooterListItem>
        <FooterListItem>
          <span>
            <FooterImg src={instaLogo} alt="" />
          </span>{' '}
          Instagram
        </FooterListItem>
      </FooterList>
    </footer>
  );
};
