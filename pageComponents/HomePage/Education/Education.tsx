import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import mockupMackbook from '@/assets/images/mockup-notebook.png';
import mockupIphone from '@/assets/images/mockup-iphone.png';
import Image from 'next/image';
import { InfoLink } from './components/InfoLink';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getCenterTopPosition } from '@/helpers/getCenterTopPosition';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Education: FC = () => {
  const { t } = useTranslation('education');
  const rootRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const descriptionWrapperRef = useRef<HTMLDivElement>(null);
  const descriptionFirstRef = useRef<HTMLDivElement>(null);
  const descriptionSecondRef = useRef<HTMLDivElement>(null);
  const notebookWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const infoLinkWrapperRef = useRef<HTMLDivElement>(null);
  const infoLinkBackgroundRef = useRef<HTMLDivElement>(null);
  const notebookImageWrapperRef = useRef<HTMLDivElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const educationTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => (innerWidth > 900 ? '+=2000' : '+=500'),
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 2 },
            delay: 0.2,
            ease: 'sine.out',
          },
          onEnter: () => {
            if (innerWidth > 900) {
              videoRef?.current?.play();
            } else {
              mobileVideoRef?.current?.play();
            }
          },
        },
      });
      if (innerWidth > 900) {
        educationTimeline
          .addLabel('start')
          .to(
            descriptionFirstRef.current,
            {
              opacity: 0,
              yPercent: -50,
              duration: 0.5,
            },

            'start'
          )
          .addLabel('finishHideFirstDescription')
          .to(
            descriptionSecondRef.current,
            {
              opacity: 1,
              yPercent: -100,
              duration: 0.5,
            },
            '<'
          )
          .addLabel('finishChangeDescription')
          .to(
            videoRef.current,
            {
              yPercent: -100,
              duration: 0.5,
              opacity: 0,
              onStart: () => {
                videoRef.current?.pause();
              },
            },
            'finishChangeDescription'
          )
          .to(
            infoLinkWrapperRef.current,
            {
              y: 0,
              duration: 0.5,
            },
            'finishChangeDescription'
          )
          .set(notebookWrapperRef.current, { overflow: 'initial' })
          .addLabel('finishChangeInfoLinkPosition')
          .to(
            descriptionWrapperRef.current,
            {
              xPercent: 100,
              opacity: 0,
              duration: 0.5,
            },
            'finishChangeInfoLinkPosition'
          )
          .to(
            notebookWrapperRef.current,
            {
              x:
                contentRef!.current!.offsetWidth / 2 -
                notebookWrapperRef!.current!.getBoundingClientRect().width / 2,

              duration: 0.5,
            },
            'finishChangeInfoLinkPosition'
          )
          .addLabel('finishMoveNotebook')
          .to(
            headRef.current,
            {
              yPercent: -100,
              opacity: 0,
              duration: 0.5,
            },
            'finishMoveNotebook'
          )
          .to(
            notebookWrapperRef.current,
            {
              x: 0,
              y: () =>
                getCenterTopPosition(
                  rootRef!.current!,
                  notebookWrapperRef!.current!
                ).y,
              scale: 1,
              duration: 0.5,
            },
            'finishMoveNotebook'
          )
          .to(
            notebookImageWrapperRef.current,
            {
              scale:
                innerWidth > 1440
                  ? document.documentElement.offsetWidth /
                      contentRef!.current!.offsetWidth +
                    1
                  : 1.242,
              duration: 0.5,
            },
            '>-0.1'
          )
          .to(
            infoLinkBackgroundRef.current,
            {
              scaleX:
                document.documentElement.offsetWidth /
                contentRef!.current!.offsetWidth,
              duration: 0.5,
            },
            '<'
          )
          .to(
            infoLinkWrapperRef.current,
            {
              scale: 1,
              duration: 0.5,
            },
            '<'
          )
          .to(
            notebookImageWrapperRef.current,
            {
              opacity: 0,
              duration: 0.2,
            },
            '>-0.1'
          )
          .addLabel('finish');
      } else {
        educationTimeline
          .addLabel('start')
          .to(
            descriptionFirstRef.current,
            {
              opacity: 0,
              duration: 0.5,
            },
            'start'
          )
          .to(
            descriptionSecondRef.current,
            {
              opacity: 1,
              duration: 0.5,
            },
            '<'
          )
          .addLabel('finish');
      }
    }, 0);
  }, []);

  return (
    <Root ref={rootRef} id="education">
      <SectionHead ref={headRef}>
        <StyledLabel text={t('label')} isDark />
        <StyledTitle text={t('title')} />
      </SectionHead>

      <SectionContent ref={contentRef}>
        <DescriptionWrapper ref={descriptionWrapperRef}>
          <DescriptionSection ref={descriptionFirstRef}>
            <DescriptionLabel text={t('descriptionLabel')} />
            <DescriptionText>{t('descriptionText1')}</DescriptionText>
          </DescriptionSection>
          <DescriptionSection2 ref={descriptionSecondRef}>
            <DescriptionText>{t('descriptionText2')}</DescriptionText>
          </DescriptionSection2>
        </DescriptionWrapper>
        <NotebookWrapper ref={notebookWrapperRef}>
          <DesktopVideo ref={videoRef}>
            <source src="/videos/education-desktop.mp4" />
            <source src="/videos/education-desktop.webm" />
          </DesktopVideo>
          <MobileVideoWrapper>
            <MobileVideo>
              <source src="/videos/education-mobile.mp4" />
              <source src="/videos/education-mobile.webm" />
            </MobileVideo>
            <IphoneImgWrapper>
              <Image src={mockupIphone} alt="Iphone" loading="eager" />
            </IphoneImgWrapper>
          </MobileVideoWrapper>
          <InfoLinkWrapper ref={infoLinkWrapperRef}>
            <InfoLinkContent>
              <InfoLinkBackground ref={infoLinkBackgroundRef} />
              <StyledInfoLink />
            </InfoLinkContent>
          </InfoLinkWrapper>
          <NotebookImageWrapper ref={notebookImageWrapperRef}>
            <Image src={mockupMackbook} alt="Mackbook Pro" loading="eager" />
          </NotebookImageWrapper>
        </NotebookWrapper>
      </SectionContent>
    </Root>
  );
};

const Root = styled.section`
  background-color: var(--black1);
  height: 100vh;
  overflow: hidden;
  @media (max-width: 900px) {
    height: auto;
    min-height: 100vh;
  }
`;

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 100px;
  padding-top: 120px;
  will-change: transform, opacity;
  @media (max-width: 1300px) {
    padding-top: 70px;
    padding-bottom: 50px;
  }
  @media (max-width: 900px) {
    padding-top: 50px;
    padding-bottom: 0;
    margin-bottom: 24px;
  }
`;

const StyledLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const StyledTitle = styled(SectionTitle)`
  color: var(--white);
  @media (max-width: 500px) {
    max-width: 180px;
  }
`;

const SectionContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 900px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const NotebookWrapper = styled.div`
  position: relative;
  transform: translateX(100px) scale(0.4375);
  transform-origin: top left;
  overflow: hidden;
  will-change: transform;

  @media (max-width: 1100px) {
    transform: translate(50px, 50px) scale(0.4375);
  }
  @media (max-width: 900px) {
    transform: none;
    overflow: initial;
  }
`;

const NotebookImageWrapper = styled.div`
  position: relative;
  pointer-events: none;
  will-change: transform, opacity;

  @media (max-width: 900px) {
    display: none;
  }
`;

const DesktopVideo = styled.video.attrs(() => ({
  muted: true,
  controls: false,
  playsInline: true,
}))`
  transform: scale(0.758);
  transform-origin: top;
  position: absolute;
  top: 4%;
  will-change: transform;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileVideoWrapper = styled.div`
  width: 100%;
  position: relative;
  display: none;
  max-height: 480px;
  overflow: hidden;
  padding-top: 13px;
  margin-bottom: 80px;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(180deg, rgba(1, 2, 2, 0) 0%, #010202 100%);
    z-index: 2;
  }

  @media (max-width: 900px) {
    display: block;
  }
`;

const IphoneImgWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 308px;
  @media (max-width: 374px) {
    width: 280px;
  }
`;

const MobileVideo = styled.video.attrs(() => ({
  muted: true,
  controls: false,
  playsInline: true,
  autoPlay: true,
  loop: true,
}))`
  width: 274px;
  margin: 0 auto;
  @media (max-width: 374px) {
    width: 257px;
  }
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  max-width: 400px;
  top: 50px;
  right: 200px;
  will-change: transform, opacity;
  @media (max-width: 1300px) {
    right: 50px;
  }
  @media (max-width: 1024px) {
    max-width: 300px;
  }
  @media (max-width: 900px) {
    position: relative;
    right: auto;
    top: auto;
    margin-bottom: 40px;
    max-width: none;
  }
`;

const DescriptionSection = styled.div`
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
  will-change: transform, opacity;
  @media (max-width: 1300px) {
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const DescriptionSection2 = styled(DescriptionSection)`
  opacity: 0;
  @media (max-width: 900px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const DescriptionLabel = styled(SectionLabel)`
  background-color: #168665;
  margin-bottom: 24px;
  color: var(--white);
  @media (max-width: 900px) {
    display: none;
  }
`;

const DescriptionText = styled.p`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--white);
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

const InfoLinkWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.758) translateY(100%);
  display: flex;
  align-items: center;

  will-change: transform;
  @media (max-width: 900px) {
    position: static;
    transform: none;
    margin-left: -32px;
    width: calc(100% + 64px);
  }
  @media (max-width: 768px) {
    margin-left: -20px;
    width: calc(100% + 40px);
  }
`;

const InfoLinkContent = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInfoLink = styled(InfoLink)`
  position: relative;
`;

const InfoLinkBackground = styled.div`
  background-color: var(--black5);
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  will-change: transform;
  width: 100%;
  height: 100%;
`;

export default Education;
