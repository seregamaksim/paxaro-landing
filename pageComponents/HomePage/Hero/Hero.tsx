import { Container } from '@/components/Container';
import { Button } from '@/ui/components/Button';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ImageNext from 'next/image';
import heroCollageImg from '@/assets/images/hero-collage.png';

if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger);
}

function getCurrentSrcFrame(index: number) {
  return `/notebook/notebook${index.toString().padStart(3, '0')}.png`;
}

const Hero: FC = () => {
  const { t } = useTranslation('hero');
  const rootRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoadImages, setIsLoadImages] = useState(false);
  const frameCount = 142;
  const notebook = {
    frame: 0,
  };

  const renderCanvas = () => {
    const context = canvasRef.current!.getContext('2d');
    const canvasWrapCurrent = canvasWrapRef.current!;
    context!.canvas.width = canvasWrapCurrent.offsetWidth;
    context!.canvas.height = canvasWrapCurrent.offsetWidth * 0.5625;

    const img = new Image();
    img.src = getCurrentSrcFrame(0);

    img.onload = function () {
      renderImage(img);
    };
  };

  function renderImage(image: HTMLImageElement) {
    const context = canvasRef!.current!.getContext('2d');
    const canvasWrapCurrent = canvasWrapRef.current!;

    context?.drawImage(
      image,
      0,
      0,
      canvasWrapCurrent.offsetWidth,
      (canvasWrapCurrent.offsetWidth * image.height) / image.width
    );
  }

  function preloadImages() {
    for (let i = 0; i <= frameCount; i++) {
      const img = new Image();
      img.src = getCurrentSrcFrame(i);

      setImages((prevImages: HTMLImageElement[]) => [...prevImages, img]);

      if (i === frameCount) {
        setIsLoadImages(true);
      }
    }
  }

  useEffect(() => {
    if (innerWidth > 1024) {
      renderCanvas();
      preloadImages();
    }
  }, []);

  useEffect(() => {
    if (innerWidth > 1024) {
      if (!canvasRef.current || images.length < 1) {
        return;
      }
      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => `+=${innerHeight * 1.5}`,
          markers: true,
          refreshPriority: 1,
          scrub: true,
          pin: true,
        },
      });

      heroTimeline
        .addLabel('start')
        .to(
          headRef.current,
          {
            yPercent: -60,
            opacity: 0,
            duration: 0.5,
          },
          'start'
        )
        .addLabel('hideHead')
        .to(
          notebook,
          {
            frame: frameCount - 1,
            snap: 'frame',
            duration: 2,
            onUpdate: () => {
              if (heroTimeline.scrollTrigger?.progress === 0) {
                renderImage(images[0]);
                return;
              }
              renderImage(images[notebook.frame]);
            },
          },
          'hideHead-=0.2'
        )
        .addLabel('finish');
    }
  }, [isLoadImages]);

  return (
    <Root ref={rootRef}>
      <StyledContainer>
        <Head ref={headRef}>
          <SectionTitle>{t('title')}</SectionTitle>
          <SectionText>{t('subtitle')}</SectionText>
          <Link href="#" passHref>
            <Button text={t('btnText')} isLink />
          </Link>
        </Head>

        <CanvasWrapper ref={canvasWrapRef}>
          <canvas ref={canvasRef} />
        </CanvasWrapper>
        <NotebookImageWrap>
          <ImageNext src={heroCollageImg} alt="Macbook and iPhone" />
        </NotebookImageWrap>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.section`
  height: 90vh;

  @media (min-width: 1024px) and (max-height: 700px) {
    height: 100vh;
  }
  @media (max-width: 1024px) {
    height: auto;
  }
`;

const StyledContainer = styled(Container)`
  padding-top: 66px;
  @media (max-width: 768px) {
    padding-top: 56px;
    padding-bottom: 40px;
  }
`;

const Head = styled.div`
  margin-bottom: 86px;
  color: var(--black2);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  will-change: transform, opacity;
  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 48px;
  line-height: 67px;
  text-align: center;
  max-width: 635px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
    max-width: 325px;
    margin-bottom: 14px;
  }
`;

const SectionText = styled.p`
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.01em;
  margin-bottom: 50px;
  max-width: 555px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 32px;
    max-width: 325px;
  }
`;

const CanvasWrapper = styled.div`
  position: relative;
  transform: translateY(-60%);
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 50%);
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NotebookImageWrap = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 768px) {
    width: 700px;
  }
  @media (max-width: 500px) {
    width: 521px;
  }
`;

export default Hero;
