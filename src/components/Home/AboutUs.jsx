import {
  AboutUsTopic,
  AboutUsImg,
  AboutUsSecton,
  AboutUsTitle,
} from './HomePage.styled';
import money from '../../images/money.jpg';

export const AboutUs = () => {
  return (
    <AboutUsSecton>
      <div>
        <AboutUsTitle>ПРО НАС</AboutUsTitle>
        <AboutUsTopic>
          Команда бухгалтерів Саргоніка Україна має багаторічний досвід ведення
          бухгалтерського обліку, розв'язання суперечок з контролюючими
          органами. Протягом усього свого професіонального стажу ми робимо все
          необхідне, щоб будь-які проблеми клієнта вирішувались ще до того, як
          вони зможуть тільки з'явитися.
        </AboutUsTopic>
        <AboutUsTopic>
          Ми вимогливо ставимось до якісної підтримки вашого бізнесу, бо це не
          тільки робота, але й наше "обличчя"
        </AboutUsTopic>
      </div>
      <AboutUsImg src={money} alt="" />
    </AboutUsSecton>
  );
};
