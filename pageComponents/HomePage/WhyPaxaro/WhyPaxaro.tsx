import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import bitcoinIcon from '@/assets/images/bitcoin.svg';
import ethereumIcon from '@/assets/images/ethereum.svg';
import coin1Icon from '@/assets/images/coin-icon1.svg';
import coin2Icon from '@/assets/images/coin-icon2.svg';
import coin3Icon from '@/assets/images/coin-icon3.svg';
import gridWithArrow from '@/assets/images/grid-with-arrow.svg';
import { useIsMounted } from '@/hooks/useIsMounted';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
const WhyPaxaro: FC = () => {
  const { t } = useTranslation('whyPaxaro');
  const isMounted = useIsMounted();
  const mainRef = useRef<HTMLElement>(null);
  const whyPaxaroTitleRef = useRef(null);
  const desciptionBlockRef = useRef(null);
  const counterFirstNumberRef = useRef(null);
  const counterSecondNumberRef = useRef(null);
  const counterLineBarRef = useRef(null);
  const descriptionTextWrapFirstRef = useRef(null);
  const descriptionTextWrapSecondRef = useRef(null);
  const secondDescriptionBlockRef = useRef(null);
  const bitcoinRef = useRef(null);
  const ethereumRef = useRef(null);
  const coin1Ref = useRef(null);
  const coin2Ref = useRef(null);
  const coin3Ref = useRef(null);
  const gridWithArrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function getPixelsByVw(vw: number) {
      const widthWindow = innerWidth <= 1440 ? innerWidth : 1440;
      return (vw * widthWindow) / 100;
    }

    function getGridPixels() {
      if (innerWidth > 1300) {
        return {
          x: getPixelsByVw(55),
          y: getPixelsByVw(25.4),
        };
      }
      if (innerWidth > 1100 && innerWidth < 1300) {
        return {
          x: getPixelsByVw(52),
          y: getPixelsByVw(22.4),
        };
      }
      if (innerWidth > 1024 && innerWidth < 1100) {
        return {
          x: getPixelsByVw(49),
          y: getPixelsByVw(21.4),
        };
      }
      if (innerWidth < 1024 && innerWidth > 768) {
        return {
          x: innerWidth / 2 - gridWithArrowRef!.current!.offsetWidth / 2,
          y: getPixelsByVw(42),
        };
      }
      if (innerWidth < 768) {
        return {
          x: innerWidth / 2 - gridWithArrowRef!.current!.offsetWidth / 2,
          y: 400,
        };
      }
      return {
        x: getPixelsByVw(55),
        y: getPixelsByVw(25.4),
      };
    }
    if (isMounted) {
      const WhyPaxaroTimeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top top',
          end: () => `+=3000`,
          pin: true,
          scrub: 1,

          snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 2 },
            delay: 0.2,
            ease: 'power3.out',
          },
        },
      });
      if (innerWidth > 1024) {
        WhyPaxaroTimeline.addLabel('start')
          .set(gridWithArrowRef.current, getGridPixels())
          .set(bitcoinRef.current, {
            x: getPixelsByVw(68.75),
            y: getPixelsByVw(32.7),
          })
          .set(ethereumRef.current, {
            x: getPixelsByVw(58.6),
            y: getPixelsByVw(27.7),
          })
          .set(coin1Ref.current, {
            x: getPixelsByVw(75),
            y: getPixelsByVw(20.3),
          })
          .set(coin2Ref.current, {
            x: getPixelsByVw(57.9),
            y: getPixelsByVw(42.8),
          })
          .set(coin3Ref.current, {
            x: getPixelsByVw(80.4),
            y: getPixelsByVw(39.2),
          })
          .to(
            whyPaxaroTitleRef.current,
            {
              x: -100,
              opacity: 0,
              duration: 0.3,
            },
            0
          )
          .from(
            desciptionBlockRef.current,
            {
              opacity: 0,
              duration: 0.3,
            },
            '>-0.1'
          )
          .addLabel('showDescriptionBlock')
          .to(
            [
              counterFirstNumberRef.current,
              descriptionTextWrapFirstRef.current,
            ],
            {
              opacity: 0,
              duration: 0.1,
            },
            'showDescriptionBlock'
          )
          .to(
            counterLineBarRef.current,
            {
              x: 35,
              duration: 0.1,
            },
            'showDescriptionBlock'
          )
          .from(
            [
              counterSecondNumberRef.current,
              descriptionTextWrapSecondRef.current,
            ],
            {
              opacity: 0,
              duration: 0.1,
            },
            '<'
          )
          .addLabel('showSecondDescriptionBlockItem')
          .from(
            gridWithArrowRef.current,
            {
              opacity: 0,
              duration: 0.6,
            },
            '>-0.3'
          )
          .to(
            bitcoinRef.current,
            {
              x: getPixelsByVw(79.4),
              y: getPixelsByVw(30.2),
              duration: 0.6,
              scale: 0.7,
            },
            '<'
          )
          .to(
            ethereumRef.current,
            {
              x: getPixelsByVw(63.2),
              y: getPixelsByVw(34.5),
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin1Ref.current,
            {
              x: getPixelsByVw(71.4),
              y: getPixelsByVw(30.7),
              scale: 0.6,
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin2Ref.current,
            {
              x: getPixelsByVw(74.3),
              y: getPixelsByVw(32.9),
              scale: 0.6,
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin3Ref.current,
            {
              x: getPixelsByVw(70.4),
              y: getPixelsByVw(37.8),
              duration: 0.6,
            },
            '<'
          )
          .addLabel('hideDescriptionBlock')

          .to(
            desciptionBlockRef.current,
            {
              opacity: 0,
              duration: 0.3,
            },
            'hideDescriptionBlock+=0.5'
          )
          .to(
            gridWithArrowRef.current,
            {
              opacity: 0,
              duration: 0.6,
            },
            '>-0.3'
          )
          .to(
            bitcoinRef.current,
            {
              x: getPixelsByVw(77.5),
              y: getPixelsByVw(15.7),
              scale: 1,
              duration: 0.6,
            },
            '<'
          )
          .to(
            ethereumRef.current,
            {
              x: getPixelsByVw(14.9),
              y: getPixelsByVw(19),
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin1Ref.current,
            {
              x: getPixelsByVw(5.4),
              y: getPixelsByVw(32.4),
              scale: 1,
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin2Ref.current,
            {
              x: getPixelsByVw(85.5),
              y: getPixelsByVw(21.5),
              scale: 1,
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin3Ref.current,
            {
              x: getPixelsByVw(66.3),
              y: getPixelsByVw(45.3),
              duration: 0.6,
            },
            '<'
          )
          .from(
            secondDescriptionBlockRef.current,
            {
              opacity: 0,
              duration: 0.3,
              y: 30,
            },
            '>'
          )
          .addLabel('showSecondDescriptionBlock');
      } else {
        const isMore600px = innerWidth > 600 ? true : false;
        // ---------
        // MOBILE
        // ---------
        WhyPaxaroTimeline.addLabel('start')
          .set(gridWithArrowRef.current, getGridPixels())
          .set(bitcoinRef.current, {
            x: isMore600px ? getPixelsByVw(46.2) : 150,
            y: isMore600px ? getPixelsByVw(56.7) : 350,
          })
          .set(ethereumRef.current, {
            x: isMore600px ? getPixelsByVw(38.6) : 80,
            y: isMore600px ? getPixelsByVw(50.5) : 300,
          })
          .set(coin1Ref.current, {
            x: isMore600px ? getPixelsByVw(52.6) : 230,
            y: isMore600px ? getPixelsByVw(46.7) : 300,
          })
          .set(coin2Ref.current, {
            x: isMore600px ? getPixelsByVw(35.9) : 50,
            y: isMore600px ? getPixelsByVw(63.9) : 430,
          })
          .set(coin3Ref.current, {
            x: isMore600px ? getPixelsByVw(57.4) : 250,
            y: isMore600px ? getPixelsByVw(62) : 450,
          })
          .to(
            whyPaxaroTitleRef.current,
            {
              x: -100,
              opacity: 0,
              duration: 0.3,
            },
            0
          )
          .from(
            desciptionBlockRef.current,
            {
              opacity: 0,
              duration: 0.3,
            },
            '>-0.1'
          )
          .addLabel('showDescriptionBlock')
          .to(
            [
              counterFirstNumberRef.current,
              descriptionTextWrapFirstRef.current,
            ],
            {
              opacity: 0,
              duration: 0.1,
            },
            'showDescriptionBlock'
          )
          .to(
            counterLineBarRef.current,
            {
              x: 35,
              duration: 0.1,
            },
            'showDescriptionBlock'
          )
          .from(
            [
              counterSecondNumberRef.current,
              descriptionTextWrapSecondRef.current,
            ],
            {
              opacity: 0,
              duration: 0.1,
            },
            '<'
          )
          .addLabel('showSecondDescriptionBlockItem')
          .from(
            gridWithArrowRef.current,
            {
              opacity: 0,
              duration: 0.6,
            },
            '>-0.3'
          )
          .to(
            bitcoinRef.current,
            {
              x: getPixelsByVw(63.4),
              y: 450,
              duration: 0.6,
              scale: 0.7,
            },
            '<'
          )
          .to(
            ethereumRef.current,
            {
              x: getPixelsByVw(43.4),
              y: 530,
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin1Ref.current,
            {
              x: getPixelsByVw(56.6),
              y: 480,
              scale: 0.6,
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin2Ref.current,
            {
              x: getPixelsByVw(59.5),
              y: 450,
              scale: 0.6,
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin3Ref.current,
            {
              x: getPixelsByVw(51.7),
              y: 520,
              duration: 0.6,
            },
            '<'
          )
          .addLabel('hideDescriptionBlock')

          .to(
            desciptionBlockRef.current,
            {
              opacity: 0,
              duration: 0.3,
            },
            'hideDescriptionBlock+=0.5'
          )
          .to(
            gridWithArrowRef.current,
            {
              opacity: 0,
              duration: 0.6,
            },
            '>-0.3'
          )
          .to(
            bitcoinRef.current,
            {
              x: getPixelsByVw(80.5),
              y: isMore600px ? getPixelsByVw(15.7) : 150,
              scale: 1,
              duration: 0.6,
            },
            '<'
          )
          .to(
            ethereumRef.current,
            {
              x: getPixelsByVw(8.9),
              y: isMore600px ? getPixelsByVw(19) : 180,
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin1Ref.current,
            {
              x: getPixelsByVw(2.4),
              y: isMore600px ? getPixelsByVw(42.4) : 550,
              scale: 1,
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin2Ref.current,
            {
              x: getPixelsByVw(88.5),
              y: isMore600px ? getPixelsByVw(27.5) : 500,
              scale: 1,
              duration: 0.6,
            },
            '<'
          )
          .to(
            coin3Ref.current,
            {
              x: getPixelsByVw(66.3),
              y: isMore600px ? getPixelsByVw(55.3) : 550,
              duration: 0.6,
            },
            '<'
          )
          .from(
            secondDescriptionBlockRef.current,
            {
              opacity: 0,
              duration: 0.3,
              y: 30,
            },
            '>'
          )
          .addLabel('showSecondDescriptionBlock');
      }
    }
  }, [isMounted]);

  return isMounted ? (
    <Root ref={mainRef}>
      <StyledContainer>
        <SectionHead>
          <StyledSectionLabel text={t('label')} />
          <StyledSectionTitle text={t('title')} />
        </SectionHead>

        <GridWithArrowWrap ref={gridWithArrowRef}>
          <GridWithArrow loading="eager" />
        </GridWithArrowWrap>
        <BitcoinWrap ref={bitcoinRef}>
          <Bitcoin loading="eager" />
        </BitcoinWrap>
        <EthereumWrap ref={ethereumRef}>
          <Ethereum loading="eager" />
        </EthereumWrap>
        <Coin1Wrap ref={coin1Ref}>
          <Coin1 loading="eager" />
        </Coin1Wrap>
        <Coin2Wrap ref={coin2Ref}>
          <Coin2 loading="eager" />
        </Coin2Wrap>
        <Coin3Wrap ref={coin3Ref}>
          <Coin3 loading="eager" />
        </Coin3Wrap>

        <Content>
          <ContentTitle ref={whyPaxaroTitleRef}>
            <Trans t={t} i18nKey="whyPaxaro">
              <span>Почему именно</span>
              <br /> Paxaro App?
            </Trans>
          </ContentTitle>
          <DescriptionsWrapper ref={desciptionBlockRef}>
            <DescriptionsCounter>
              <DescriptionCounterNumbersWrap>
                <DescriptionCounterText ref={counterFirstNumberRef}>
                  1
                </DescriptionCounterText>
                <DescriptionCounterTextAbsolute ref={counterSecondNumberRef}>
                  2
                </DescriptionCounterTextAbsolute>
              </DescriptionCounterNumbersWrap>
              <DescriptionCounterLineWrap>
                <span ref={counterLineBarRef}></span>
              </DescriptionCounterLineWrap>
            </DescriptionsCounter>
            <DescriptionCounterTextsWrapper>
              <DescriptionCounterTextWrap ref={descriptionTextWrapFirstRef}>
                <DescriptionText>{t('description1.text1')}</DescriptionText>
                <DescriptionText>{t('description1.text2')}</DescriptionText>
              </DescriptionCounterTextWrap>
              <DescriptionCounterTextWrapAbsolute
                ref={descriptionTextWrapSecondRef}
              >
                <DescriptionText>{t('description2.text1')}</DescriptionText>
              </DescriptionCounterTextWrapAbsolute>
            </DescriptionCounterTextsWrapper>
          </DescriptionsWrapper>
          <SecondDescriptionBlockRef ref={secondDescriptionBlockRef}>
            <DescriptionText>{t('description3.text1')}</DescriptionText>
          </SecondDescriptionBlockRef>
        </Content>
      </StyledContainer>
    </Root>
  ) : null;
};

const Root = styled.section`
  height: 100vh;
`;
const StyledContainer = styled(Container)`
  padding-top: 86px;
  position: relative;
  height: 100%;
  @media (max-width: 1300px) {
    padding-top: 40px;
  }
`;

const SectionHead = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledSectionLabel = styled(SectionLabel)`
  margin-bottom: 15px;
`;

const StyledSectionTitle = styled(SectionTitle)`
  max-width: 454px;
`;

const Content = styled.div`
  position: relative;
`;

const ContentTitle = styled.p`
  max-width: 530px;
  font-weight: bold;
  font-size: 72px;
  line-height: 87px;
  color: var(--black2);
  position: absolute;
  z-index: 1;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  will-change: transform, opacity;
  span {
    color: #bdbdbd;
  }
  @media (max-width: 1440px) {
    left: 0;
  }
  @media (max-width: 768px) {
    font-size: 36px;
    line-height: 44px;
    top: 30%;
  }
  @media (max-width: 500px) {
    top: 0;
    transform: none;
  }
`;

const DescriptionsWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 50px;

  background: var(--white);
  box-shadow: 0px 6px 36px rgba(104, 104, 104, 0.08);
  border-radius: 40px;
  will-change: opacity;

  @media (max-width: 1024px) {
    max-width: none;
    padding: 40px 24px;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    padding-left: 14px;
    padding-right: 14px;
  }
`;

const DescriptionsCounter = styled.div`
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    margin-bottom: 24px;
  }
`;

const DescriptionCounterNumbersWrap = styled.div`
  position: relative;
  margin-left: 12px;
  margin-bottom: 8px;
`;

const DescriptionCounterText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  letter-spacing: 0.01em;
  will-change: opacity;
  color: var(--black2);
  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const DescriptionCounterTextAbsolute = styled(DescriptionCounterText)`
  position: absolute;
  top: 0;
  left: 0;
`;

const DescriptionCounterLineWrap = styled.div`
  width: 70px;
  height: 2px;
  background-color: #c0c0c0;

  position: relative;
  span {
    display: inline-block;
    position: absolute;
    height: 100%;
    width: 50%;
    left: 0;
    top: 0;
    background-color: var(--green);
    will-change: transform;
  }
`;

const DescriptionCounterTextsWrapper = styled.div`
  position: relative;
`;

const DescriptionCounterTextWrap = styled.div`
  will-change: opacity;
`;

const DescriptionCounterTextWrapAbsolute = styled(DescriptionCounterTextWrap)`
  position: absolute;
  top: 0;
  left: 0;
`;

const DescriptionText = styled.p`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--black2);
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const SecondDescriptionBlockRef = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 720px;
  padding: 58px 35px;
  background: var(--white);
  box-shadow: 0px 6px 36px rgba(104, 104, 104, 0.08);
  border-radius: 40px;
  will-change: transform, opacity;
  & ${DescriptionText} {
    font-weight: 600;
    text-align: center;
  }
  @media (max-height: 700px) {
    top: 35%;
  }
  @media (max-width: 1024px) {
    top: 100%;
  }
`;

const BitcoinWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  @media (max-width: 1024px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Bitcoin = styled(Image).attrs(() => ({
  src: bitcoinIcon,
}))``;

const EthereumWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 768px) {
    width: 62px;
    height: 62px;
  }
`;

const Ethereum = styled(Image).attrs(() => ({
  src: ethereumIcon,
}))``;

const Coin1Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Coin1 = styled(Image).attrs(() => ({
  src: coin1Icon,
}))``;

const Coin2Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }
`;

const Coin2 = styled(Image).attrs(() => ({
  src: coin2Icon,
}))``;

const Coin3Wrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 768px) {
    width: 65px;
    height: 65px;
  }
`;

const Coin3 = styled(Image).attrs(() => ({
  src: coin3Icon,
}))``;

const GridWithArrowWrap = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 900px) {
    width: 450px;
  }
  @media (max-width: 768px) {
    width: 375px;
  }
`;

const GridWithArrow = styled(Image).attrs(() => ({
  src: gridWithArrow,
}))``;

export default WhyPaxaro;
