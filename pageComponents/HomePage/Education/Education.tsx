import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import mockup from '@/assets/images/mockup-notebook.png';
import Image from 'next/image';
import { InfoLink } from './components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Education: FC = () => {
  const { t } = useTranslation('education');
  const rootRef = useRef(null);
  const headRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const descriptionWrapperRef = useRef(null);
  const descriptionFirstRef = useRef(null);
  const descriptionSecondRef = useRef(null);
  const notebookWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const infoLinkWrapperRef = useRef(null);
  const notebookImageWrapperRef = useRef(null);

  useEffect(() => {
    const educationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: '+=2000',
        markers: true,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 2 },
          delay: 0.2,
          ease: 'sine.out',
        },
        onEnter: () => {
          videoRef?.current?.play();
        },
      },
    });

    educationTimeline
      .addLabel('start')
      .to(
        descriptionFirstRef.current,
        {
          opacity: 0,
          yPercent: -100,
          duration: 0.5,
        },

        'start'
      )
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
          onComplete: () => {
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
          y: -300,
          scale: 1,
          duration: 0.5,
        },
        'finishMoveNotebook'
      )
      .to(
        notebookImageWrapperRef.current,
        {
          scale: 1.242,
          duration: 0.5,
        },
        '>-0.1'
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
  }, []);

  return (
    <Root ref={rootRef}>
      <SectionHead ref={headRef}>
        <StyledLabel text={t('label')} isDark />
        <StyledTitle text={t('title')} />
      </SectionHead>

      <SectionContent ref={contentRef}>
        <DescriptionWrapper ref={descriptionWrapperRef}>
          <DescriptionSection1 ref={descriptionFirstRef}>
            <DescriptionLabel text={t('descriptionLabel')} />
            <DescriptionText>{t('descriptionText1')}</DescriptionText>
          </DescriptionSection1>
          <DescriptionSection2 ref={descriptionSecondRef}>
            <DescriptionText>{t('descriptionText2')}</DescriptionText>
          </DescriptionSection2>
        </DescriptionWrapper>
        <NotebookWrapper ref={notebookWrapperRef}>
          <DesktopVideo playsInline muted ref={videoRef}>
            <source src="/videos/education-desktop.mp4" />
            <source src="/videos/education-desktop.webm" />
          </DesktopVideo>
          <InfoLinkWrapper ref={infoLinkWrapperRef}>
            <StyledInfoLink />
          </InfoLinkWrapper>
          <NotebookImageWrapper ref={notebookImageWrapperRef}>
            <Image src={mockup} alt="Mackbook Pro" />
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
`;

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  padding-top: 120px;
`;

const StyledLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const StyledTitle = styled(SectionTitle)`
  color: var(--white);
`;

const SectionContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

const NotebookWrapper = styled.div`
  position: relative;
  transform: translateX(100px) scale(0.4375);
  transform-origin: top left;
  overflow: hidden;
`;

const NotebookImageWrapper = styled.div`
  position: relative;
  pointer-events: none;
`;

const DesktopVideo = styled.video.attrs(() => ({
  muted: true,
  controls: false,
}))`
  transform: scale(0.758);
  transform-origin: top;
  position: absolute;
  top: 75px;
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  max-width: 400px;
  top: 50px;
  right: 200px;
`;

const DescriptionSection = styled.div`
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const DescriptionSection1 = styled(DescriptionSection)``;

const DescriptionSection2 = styled(DescriptionSection)`
  opacity: 0;
`;

const DescriptionLabel = styled(SectionLabel)`
  background-color: #168665;
  margin-bottom: 24px;
  color: var(--white);
`;

const DescriptionText = styled.p`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--white);
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
`;

const StyledInfoLink = styled(InfoLink)`
  width: 100%;
`;

export default Education;
