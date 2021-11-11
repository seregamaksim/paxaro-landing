import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { Button } from '@/ui/components/Button';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Link from 'next/link';
import { CanvasNotebook } from './components/CanvasNotebook';
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
  const rootRef = useRef(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasWrapRef = useRef(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 142;
  const notebook = {
    frame: 0,
  };
  useEffect(() => {
    const context = canvasRef!.current!.getContext('2d');

    const renderCanvas = () => {
      context!.canvas.width = innerWidth;
      context!.canvas.height = innerHeight;
    };

    renderCanvas();
    preloadImages();
    function preloadImages() {
      for (let i = 0; i <= frameCount; i++) {
        const img = new Image();
        const imgSrc = getCurrentFrame(i);
        img.src = imgSrc;
        setImages((prevImages: any) => [...prevImages, img]);
      }
    }

    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: canvasWrapRef.current,
        pinnedContainer: rootRef.current,
        start: 'top top',
        // end: '+=4000',
        markers: true,
        scrub: 1,
        pin: true,
      },
    });

    heroTimeline.to(notebook, {
      frame: frameCount - 1,
      snap: 'frame',
      scrollTrigger: {
        scrub: 0.5,
      },
      onUpdate: render, // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    function render() {
      console.log('render');

      // context!.clearRect(
      //   0,
      //   0,
      //   canvasRef!.current!.width,
      //   canvasRef!.current!.height
      // );
      // context!.drawImage(images[notebook.frame], 0, 0);
    }
  }, []);

  return (
    <Root ref={rootRef}>
      <StyledContainer>
        <Head>
          <SectionTitle>{t('title')}</SectionTitle>
          <SectionText>{t('subtitle')}</SectionText>
          <Link href="#" passHref>
            <StyledLink text={t('btnText')} isLink />
          </Link>
        </Head>

        <CanvasWrapper ref={canvasWrapRef}>
          <canvas ref={canvasRef} />
        </CanvasWrapper>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.section``;

const StyledContainer = styled(Container)`
  padding-top: 66px;
`;

const Head = styled.div`
  margin-bottom: 66px;
  color: var(--black2);
  display: flex;
  flex-direction: column;
  align-items: center;
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

const StyledLink = styled(Button)``;

const CanvasWrapper = styled.div`
  height: 100vh;
  background-color: red;
`;

export default Hero;
