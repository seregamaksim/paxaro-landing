import { Container } from '@/components/Container';
import { Button } from '@/ui/components/Button';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== undefined) {
  gsap.registerPlugin(ScrollTrigger);
}

function getCurrentFrame(index: any) {
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
    const context = canvasRef!.current!.getContext('2d');
    context!.canvas.width = canvasWrapRef!.current!.offsetWidth;
    context!.canvas.height = canvasWrapRef!.current!.offsetWidth * 0.5625;
    const img = new Image();
    const imgSrc = getCurrentFrame(0);
    img.src = imgSrc;
    img.onload = function () {
      renderImage(img);
    };
  };

  function renderImage(image: HTMLImageElement) {
    const context = canvasRef!.current!.getContext('2d');
    context?.drawImage(
      image,
      0,
      0,
      canvasWrapRef!.current!.offsetWidth,
      (canvasWrapRef!.current!.offsetWidth * image.height) / image.width
    );
  }

  function preloadImages() {
    for (let i = 0; i <= frameCount; i++) {
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      setImages((prevImages: HTMLImageElement[]) => [...prevImages, img]);
      if (i === frameCount) {
        setIsLoadImages(true);
      }
    }
  }

  useEffect(() => {
    renderCanvas();
    preloadImages();
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) {
      return;
    }
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: `${
          (headRef!.current!.offsetHeight / rootRef!.current!.offsetHeight) *
          100
        }% top`,

        markers: true,
        scrub: true,
        pin: true,
      },
    });

    heroTimeline
      .addLabel('start')
      .from(
        canvasWrapRef.current,
        {
          yPercent: -60,
          duration: 1,
        },
        'start'
      )
      .to(
        headRef.current,
        {
          yPercent: 60,
          opacity: 0,
          duration: 1,
        },
        'start'
      )
      .to(
        notebook,
        {
          frame: frameCount - 1,
          snap: 'frame',
          onUpdate: () => {
            if (heroTimeline.scrollTrigger?.progress === 0) {
              renderImage(images[0]);
              return;
            }
            renderImage(images[notebook.frame]);
          },
        },
        'start'
      );
  }, [isLoadImages]);

  return (
    <section ref={rootRef}>
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
      </StyledContainer>
    </section>
  );
};

const StyledContainer = styled(Container)`
  padding-top: 66px;
`;

const Head = styled.div`
  margin-bottom: 86px;
  color: var(--black2);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
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
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 50%);
  }
`;

export default Hero;
