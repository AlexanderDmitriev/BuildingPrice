import {
  CoolSlogans,
  MainSlogan,
  ReadMoreButton,
  HeroSection,
  AboutUsTopic,
} from '../components/Home/HomePage.styled';

export const HomePage = () => {
  return (
    <>
      <HeroSection>
        <MainSlogan>Ми працюємо для вас</MainSlogan>
        <CoolSlogans>якийсь слоган, якого поки ще немає</CoolSlogans>
        <ReadMoreButton to="/questions">Дізнатися більше</ReadMoreButton>
      </HeroSection>
      <div>
        <div>
          <h2>ПРО НАС</h2>
          <AboutUsTopic>
            We Help Retail And Real Estate Customers Solving Their Unique
            Data-Related Problems.
          </AboutUsTopic>
          <AboutUsTopic>
            We Don’t Claim To Have The Solutions For All Problems. But We
            Provide The Best Solutions For The Problems That We Are Experts In
            Solving.
          </AboutUsTopic>
        </div>
        <div>
          <img src="" alt="oops" />
        </div>
      </div>
    </>
  );
};
