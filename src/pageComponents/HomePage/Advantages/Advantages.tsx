import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { FC, useEffect, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getCenterTopPosition } from '@/helpers/getCenterTopPosition';
import { COLORS } from '@/constants';
import { useIntersection } from '@/hooks/useIntersection';

function getItemSizes(item: HTMLElement) {
  return {
    width: item.offsetWidth,
    height: item.offsetHeight,
  };
}

const Advantages: FC = () => {
  const { t } = useTranslation('advantages');
  const rootId = 'advantages';
  const rootRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLLIElement[]>([]);
  const itemsBgRef = useRef<HTMLDivElement[]>([]);
  const listSecondScreens = useRef<HTMLLIElement[]>([]);
  const itemsTitleRef = useRef<HTMLParagraphElement[]>([]);
  const circleRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const descriptionSecondListRef = useRef<HTMLUListElement>(null);

  useIntersection(rootRef, rootId);

  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        const advantagesTimeline = gsap.timeline({
          defaults: {
            ease: 'sine.out',
          },
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top top',
            end: innerWidth > 768 ? `+=5000` : `+=1500`,
            pin: true,
            scrub: innerWidth > 768 ? 1 : 0,
            snap: {
              snapTo: 'labels',
              duration: { min: 0.2, max: 2 },
              delay: 0.2,
              ease: 'sine.out',
            },
          },
        });
        if (innerWidth > 768) {
          advantagesTimeline
            .addLabel('start')
            .from(
              itemsRef.current,
              {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
              },
              'start'
            )
            .addLabel('finishMoveItems')
            .set(itemsRef.current[0], {
              zIndex: 1,
            })
            .to(
              itemsRef.current[0],
              {
                x: getCenterTopPosition(
                  listSecondScreens.current[0],
                  itemsRef.current[0]
                ).x,
                y:
                  getCenterTopPosition(
                    listSecondScreens.current[0],
                    itemsRef.current[0]
                  ).y + 80,
                duration: 1,
              },
              'finishMoveItems'
            )
            .to(
              itemsBgRef.current[0],
              {
                width: getItemSizes(listSecondScreens.current[0]).width,
                height: getItemSizes(listSecondScreens.current[0]).height,
                duration: 1,
              },
              '<'
            )
            .to(
              headRef.current,
              {
                y: -800,
                duration: 1,
              },
              '>-0.5'
            )
            .to(
              [itemsRef.current[1], itemsRef.current[2]],
              {
                y: -800,
                duration: 1,
              },
              '<'
            )
            .to(
              itemsTitleRef.current[0],
              {
                opacity: 0,
                duration: 0.3,
              },
              '<'
            )
            .from(
              listSecondScreens.current[0],
              {
                opacity: 0,
                duration: 0.3,
              },
              '>+0.2'
            )
            .addLabel('startHideFirstDescription')
            .to(
              listSecondScreens.current[0],
              {
                opacity: 0,
                duration: 0.3,
              },
              'startHideFirstDescription+=0.3'
            )
            .to(
              itemsBgRef.current[0],
              {
                width: 133,
                height: 133,
                duration: 1,
              },
              '>'
            )
            .to(
              itemsRef.current[0],
              {
                x: -300,
                y: -700,
                width: 133,
                height: 133,
                duration: 1,
              },
              '<'
            )
            .to(
              itemsRef.current[1],
              {
                x: getCenterTopPosition(
                  listSecondScreens.current[1],
                  itemsRef.current[1]
                ).x,
                y:
                  getCenterTopPosition(
                    listSecondScreens.current[1],
                    itemsRef.current[1]
                  ).y + 80,
                duration: 1,
              },
              '<'
            )
            .to(
              itemsBgRef.current[1],
              {
                width: getItemSizes(listSecondScreens.current[1]).width,
                height: getItemSizes(listSecondScreens.current[1]).height,
                duration: 1,
              },
              '<'
            )
            .to(
              itemsTitleRef.current[1],
              {
                opacity: 0,
                duration: 0.3,
              },
              '>-0.7'
            )
            .from(
              listSecondScreens.current[1],
              {
                opacity: 0,
                duration: 0.3,
              },
              '>+0.4'
            )
            .addLabel('startHideSecondDescription')
            .to(
              listSecondScreens.current[1],
              {
                opacity: 0,
                duration: 0.5,
              },
              'startHideSecondDescription+0.3'
            )
            .to(
              itemsBgRef.current[1],
              {
                width: 133,
                height: 133,
                duration: 1,
              },
              '>'
            )
            .to(
              itemsRef.current[1],
              {
                x: -300,
                y: -700,
                width: 133,
                height: 133,
                duration: 1,
              },
              '<'
            )
            .to(
              itemsRef.current[2],
              {
                x: getCenterTopPosition(
                  listSecondScreens.current[2],
                  itemsRef.current[2]
                ).x,
                y:
                  getCenterTopPosition(
                    listSecondScreens.current[2],
                    itemsRef.current[2]
                  ).y + 80,
                duration: 1,
              },
              '<'
            )
            .to(
              itemsBgRef.current[2],
              {
                width: getItemSizes(listSecondScreens.current[2]).width,
                height: getItemSizes(listSecondScreens.current[2]).height,
                duration: 1,
              },
              '<'
            )
            .to(
              itemsTitleRef.current[2],
              {
                opacity: 0,
                duration: 0.3,
              },
              '>-0.7'
            )
            .from(
              listSecondScreens.current[2],
              {
                opacity: 0,
                duration: 0.3,
              },
              '>+0.4'
            )
            .addLabel('finishMoveThirdDescription')

            .set(circleRef.current, {
              opacity: 1,
            })
            .fromTo(
              circleRef.current,
              {
                scale: 0,
              },
              {
                scale:
                  rootRef!.current!.scrollWidth /
                    circleRef!.current!.offsetWidth +
                  10,
                duration: 1.3,
              }
            )
            .addLabel('finish');
        } else {
          advantagesTimeline
            .addLabel('start')
            .from(
              listSecondScreens.current[1],
              {
                y: innerHeight + 50,
                duration: 0.5,
              },
              'start+=0.5'
            )
            .addLabel('finishMoveFirstScreen')
            .from(
              listSecondScreens.current[2],
              {
                y: innerHeight + 50,
                duration: 0.5,
              },
              'finishMoveFirstScreen+=0.5'
            )
            .addLabel('finishMoveSecondScreen')
            .set(circleRef.current, {
              opacity: 1,
            })
            .to(
              descriptionSecondListRef.current,
              {
                y: -50,
                opacity: 0,
                duration: 0.5,
              },
              'finishMoveSecondScreen+=0.2'
            )
            .fromTo(
              circleRef.current,
              {
                scale: 0,
              },
              {
                scale:
                  rootRef!.current!.scrollWidth /
                    circleRef!.current!.offsetWidth +
                  7,
                duration: 0.5,
              },
              'finishMoveSecondScreen+=0.2'
            )
            .addLabel('finish');
        }
      }
    }, 0);
  }, []);

  return (
    <Root ref={rootRef} id={rootId}>
      <StyledContainer>
        <Cirle ref={circleRef} />
        <SectionHead ref={headRef}>
          <StyledLabel text={t('label')} />
          <SectionTitle>
            <Trans t={t} i18nKey="title">
              Почему мы <br /> уверены в Paxaro App?
            </Trans>
          </SectionTitle>
          <Subtitle>{t('subtitle')}</Subtitle>
        </SectionHead>
        <DescriptionList>
          <BlackDescriptionItem
            ref={(element: HTMLLIElement) => (itemsRef.current[0] = element)}
          >
            <DescriptionItemBg
              ref={(element: HTMLDivElement) =>
                (itemsBgRef.current[0] = element)
              }
            />
            <DescriptionStyleTitle
              ref={(element: HTMLParagraphElement) =>
                (itemsTitleRef.current[0] = element)
              }
            >
              <Trans t={t} i18nKey="card1.styledTitle">
                <span>Активы</span>
                <br /> хранятся <br /> на бирже
              </Trans>
            </DescriptionStyleTitle>
          </BlackDescriptionItem>
          <GrayDescriptionItem
            ref={(element: HTMLLIElement) => (itemsRef.current[1] = element)}
          >
            <DescriptionItemBg
              ref={(element: HTMLDivElement) =>
                (itemsBgRef.current[1] = element)
              }
            />
            <DescriptionStyleTitle
              ref={(element: HTMLParagraphElement) =>
                (itemsTitleRef.current[1] = element)
              }
            >
              <Trans t={t} i18nKey="card2.styledTitle">
                <span>Алгоритм</span>
                <br /> минимизирует <br /> риски
              </Trans>
            </DescriptionStyleTitle>
          </GrayDescriptionItem>
          <GreenDescriptionItem
            ref={(element: HTMLLIElement) => (itemsRef.current[2] = element)}
          >
            <DescriptionItemBg
              ref={(element: HTMLDivElement) =>
                (itemsBgRef.current[2] = element)
              }
            />
            <DescriptionStyleTitle
              ref={(element: HTMLParagraphElement) =>
                (itemsTitleRef.current[2] = element)
              }
            >
              <Trans t={t} i18nKey="card3.styledTitle">
                <span>Доходность</span>
                <br /> зависит <br /> от сроков
              </Trans>
            </DescriptionStyleTitle>
          </GreenDescriptionItem>
        </DescriptionList>

        <DescriptionSecondList ref={descriptionSecondListRef}>
          <GreenDescriptionSecondScreenItem
            ref={(element: HTMLLIElement) =>
              (listSecondScreens.current[2] = element)
            }
          >
            <DescriptionSecondScreenItemTitle>
              {t('card3.normalTitle')}
            </DescriptionSecondScreenItemTitle>
            <DescriptionSecondScreenItemText>
              {t('card3.description')}
            </DescriptionSecondScreenItemText>
          </GreenDescriptionSecondScreenItem>

          <GrayDescriptionSecondScreenItem
            ref={(element: HTMLLIElement) =>
              (listSecondScreens.current[1] = element)
            }
          >
            <DescriptionSecondScreenItemTitle>
              {t('card2.normalTitle')}
            </DescriptionSecondScreenItemTitle>
            <DescriptionSecondScreenItemText>
              {t('card2.description')}
            </DescriptionSecondScreenItemText>
          </GrayDescriptionSecondScreenItem>

          <DescriptionSecondScreenItem
            ref={(element: HTMLLIElement) =>
              (listSecondScreens.current[0] = element)
            }
          >
            <DescriptionSecondScreenItemTitle>
              {t('card1.normalTitle')}
            </DescriptionSecondScreenItemTitle>
            <DescriptionSecondScreenItemText>
              {t('card1.description')}
            </DescriptionSecondScreenItemText>
          </DescriptionSecondScreenItem>
        </DescriptionSecondList>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.section`
  height: 100vh;
  overflow: hidden;
`;

const StyledContainer = styled(Container)`
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  height: 100%;
  @media (min-width: 1024px) and (max-height: 700px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const Cirle = styled.div`
  position: absolute;
  right: -5%;
  top: -5%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: ${COLORS.black3};
  opacity: 0;
  pointer-events: none;
  @media (max-width: 768px) {
    right: -150px;
    top: -150px;
    z-index: 2;
  }
`;

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
  @media (min-width: 1024px) and (max-height: 700px) {
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    margin-bottom: 45px;
    z-index: 1;
  }
`;

const StyledLabel = styled(SectionLabel)`
  margin-bottom: 12px;
  @media (max-width: 768px) {
    margin-bottom: 18px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  line-height: 50px;
  font-weight: bold;
  color: ${COLORS.black2};
  margin-bottom: 24px;
  br {
    display: none;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
    br {
      display: block;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: ${COLORS.black2};
  max-width: 788px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    max-width: 370px;
  }
`;

const DescriptionList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  @media (max-width: 1100px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const DescriptionStyleTitle = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: ${COLORS.white};
  will-change: transform;
  position: relative;
  span {
    display: inline-block;
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      z-index: -1;
      width: 110%;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
      background-color: ${COLORS.green};
    }
  }

  @media (min-width: 1024px) and (max-height: 700px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (max-width: 1100px) {
    font-size: 28px;
    line-height: 38px;
  }
  @media (max-width: 850px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const DescriptionItem = styled.li`
  border-radius: 45px;
  padding: 40px 35px 143px 35px;
  position: relative;
  @media (min-width: 1024px) and (max-height: 700px) {
    padding-bottom: 100px;
  }
  @media (max-width: 1100px) {
    padding-bottom: 100px;
  }
  @media (max-width: 1024px) {
    border-radius: 30px;
    padding-top: 50px;
    padding-left: 25px;
    padding-right: 25px;
  }
`;

const DescriptionItemBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 45px;
  will-change: width, height;
  @media (max-width: 1024px) {
    border-radius: 30px;
  }
`;

const BlackDescriptionItem = styled(DescriptionItem)`
  &,
  & ${DescriptionItemBg} {
    background-color: ${COLORS.black3};
  }
`;

const GrayDescriptionItem = styled(DescriptionItem)`
  &,
  & ${DescriptionItemBg} {
    background-color: ${COLORS.lightGray};
  }
  & ${DescriptionStyleTitle} {
    color: ${COLORS.black2};
  }
`;

const GreenDescriptionItem = styled(DescriptionItem)`
  &,
  & ${DescriptionItemBg} {
    background: ${COLORS.greenGradient};
  }
  & ${DescriptionStyleTitle} span::before {
    background-color: ${COLORS.black3};
  }
`;

const DescriptionSecondList = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  will-change: transform, opacity;
  @media (max-width: 768px) {
    position: relative;
    pointer-events: all;
    z-index: 3;
  }
`;

const DescriptionSecondScreenItemTitle = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: ${COLORS.white};
  padding: 4px 8px;
  margin-bottom: 10px;
  background-color: ${COLORS.green};
`;

const DescriptionSecondScreenItemText = styled.p`
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: ${COLORS.white};

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (min-width: 320px) and (max-width: 768px) and (max-height: 700px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const DescriptionSecondScreenItem = styled.li`
  will-change: transform, opacity;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 390px;
  width: 100%;
  max-width: 650px;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 45px;
  background: ${COLORS.black3};
  z-index: 2;
  @media (min-width: 1024px) and (max-height: 700px) {
    padding-top: 50px;
    min-height: 320px;
  }

  @media (max-width: 1100px) {
    padding-top: 50px;
    min-height: 320px;
  }
  @media (max-width: 1024px) {
    padding: 50px 25px;
    border-radius: 30px;
  }
  @media (max-width: 768px) {
    display: block;
    position: relative;
    transform: none;
    top: 0;
    left: 0;
    max-width: none;
    z-index: 0;
  }
  @media (min-width: 320px) and (max-width: 768px) and (max-height: 700px) {
    padding-top: 30px;
    padding-bottom: 30px;
    min-height: auto;
  }
`;

const GrayDescriptionSecondScreenItem = styled(DescriptionSecondScreenItem)`
  background-color: ${COLORS.lightGray};

  & ${DescriptionSecondScreenItemTitle}, & ${DescriptionSecondScreenItemText} {
    color: ${COLORS.black2};
  }
  @media (max-width: 768px) {
    position: absolute;
    z-index: 1;
  }
`;

const GreenDescriptionSecondScreenItem = styled(DescriptionSecondScreenItem)`
  background: ${COLORS.greenGradient};

  & ${DescriptionSecondScreenItemTitle} {
    background-color: ${COLORS.black3};
  }
  @media (max-width: 768px) {
    position: absolute;
    z-index: 2;
  }
`;

export default Advantages;
