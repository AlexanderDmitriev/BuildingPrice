import { CoolSlogans } from './HeroSection.styled';

export const GetSlogans = ({ t }) => {
  const slogans = [
    t('homePage.slogans.part1'),
    t('homePage.slogans.part2'),
    t('homePage.slogans.part3'),
    t('homePage.slogans.part4'),
    t('homePage.slogans.part5'),
    t('homePage.slogans.part6'),
    t('homePage.slogans.part7'),
    t('homePage.slogans.part8'),
    t('homePage.slogans.part9'),
    t('homePage.slogans.part10'),
    t('homePage.slogans.part11'),
    t('homePage.slogans.part12'),
    t('homePage.slogans.part13'),
    t('homePage.slogans.part14'),
  ];
  const randomSlogan = Math.floor(Math.random() * 10);
  return <CoolSlogans>{slogans[randomSlogan]}</CoolSlogans>;
};
