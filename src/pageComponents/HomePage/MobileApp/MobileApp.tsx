import { Container } from '@/components/Container';
import { FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import phoneImg from '@/assets/images/phone.png';
import logo from '@/assets/images/logo.svg';
import appStoreImg from '@/assets/images/app-store.svg';
import googleStoreImg from '@/assets/images/google-play.svg';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { COLORS } from '@/constants';
import { LINKS } from '@/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MobileApp: FC = () => {
  const { t } = useTranslation('common');
  const rootRef = useRef<HTMLElement>(null);
  const phoneBlockRef = useRef<HTMLDivElement>(null);
  const phoneImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(phoneImgRef.current, {
      scrollTrigger: {
        trigger: innerWidth > 1024 ? rootRef.current : phoneBlockRef.current,
        start: innerWidth > 1024 ? '20% 90%' : '20% 70%',
        end: innerWidth > 1024 ? '21% 90%' : '21% 70%',
        toggleActions: 'play none reverse none',
      },
      opacity: 0,
      yPercent: 50,
      duration: 1,
    });
  }, []);

  return (
    <Root className="modile-app-section" ref={rootRef}>
      <StyledContainer>
        <PhoneBlock ref={phoneBlockRef}>
          <PhoneImgWrap ref={phoneImgRef}>
            <PhoneImg />
          </PhoneImgWrap>
        </PhoneBlock>
        <StoresBlock>
          <StoresBlockContent>
            <StoresBlockLogo></StoresBlockLogo>
            <StoresBlockText>{t('mobileApp')}</StoresBlockText>
            <StoresBlockList>
              <Link href={LINKS.appStoreLink} passHref>
                <StoresBlockLink target="_blank">
                  <AppStoreImg />
                </StoresBlockLink>
              </Link>
              <Link href={LINKS.googlePlayLink} passHref>
                <StoresBlockLink target="_blank">
                  <GooglePlayImg />
                </StoresBlockLink>
              </Link>
            </StoresBlockList>
          </StoresBlockContent>
        </StoresBlock>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.section`
  height: 100vh;
  min-height: 620px;
  max-height: 845px;
  @media (max-width: 1200px) {
    height: auto;
    min-height: auto;
    max-height: none;
  }
`;

const StyledContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-top: 27px;
  padding-bottom: 27px;
  height: 100%;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 0;
    height: auto;
  }
`;

const PhoneBlock = styled.div`
  position: relative;
  background-color: ${COLORS.black1};
  overflow: hidden;
  border-radius: 45px;
  &::before {
    content: '';
    position: absolute;
    height: 69%;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 87.61%);
    bottom: 0;
    left: 0;
    z-index: 1;
    border-bottom-left-radius: 45px;
    border-bottom-right-radius: 45px;
  }
  @media (max-width: 1200px) {
    width: 100%;
    min-height: 400px;
  }
  @media (max-width: 500px) {
    min-height: 335px;
  }
`;

const PhoneImgWrap = styled.div`
  width: fit-content;
  position: absolute;
  top: 17%;
  left: 50%;
  width: 370px;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    width: 225px;
  }
`;

const PhoneImg = styled(Image).attrs(() => ({
  src: phoneImg,
  alt: 'Paxaro App',
  loading: 'eager',
}))``;

const StoresBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 45px;
  background: linear-gradient(210.33deg, #45c6a1 0%, #179a74 100%);
  @media (max-width: 1024px) {
    width: 100%;
    min-height: 400px;
    margin-bottom: 20px;
  }
  @media (max-width: 500px) {
    min-height: 335px;
  }
`;

const StoresBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoresBlockLogo = styled.div`
  width: 277px;
  height: 86px;
  background: url(${logo.src}) no-repeat center;
  background-size: cover;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    width: 204px;
    height: 63px;
    margin-bottom: 14px;
  }
`;

const StoresBlockText = styled.p`
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: ${COLORS.white};
  margin-bottom: 77px;
  @media (max-width: 768px) {
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 33px;
  }
`;

const StoresBlockList = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StoresBlockLink = styled.a`
  display: block;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const AppStoreImg = styled(Image).attrs(() => ({
  src: appStoreImg,
  alt: 'App Store app',
}))``;

const GooglePlayImg = styled(Image).attrs(() => ({
  src: googleStoreImg,
  alt: 'Google play app',
}))``;

export default MobileApp;
