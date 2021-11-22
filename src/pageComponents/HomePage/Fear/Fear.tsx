import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Image from 'next/image';
import phoneImg from '@/assets/images/fear-phone.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getCenterTopPosition } from '@/helpers/getCenterTopPosition';
import { COLORS } from '@/constants';
import { useIntersection } from '@/hooks/useIntersection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function getItemSizes(item: HTMLElement) {
  return { width: item.offsetWidth, height: item.offsetHeight };
}

function getScaleParams(targetElem: HTMLElement, toElem: HTMLElement) {
  return {
    scaleX: getItemSizes(toElem).width / getItemSizes(targetElem).width,
    scaleY: getItemSizes(toElem).height / getItemSizes(targetElem).height,
  };
}

const Fear: FC = () => {
  const { t } = useTranslation('fear');
  const rootId = 'howToStart';
  const rootRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const messagesListRef = useRef<HTMLUListElement>(null);
  const cardItems = useRef<HTMLLIElement[]>([]);
  const miniCardItems = useRef<HTMLDivElement[]>([]);
  const miniCardTitles = useRef<HTMLParagraphElement[]>([]);
  const miniCardBackgrounds = useRef<HTMLDivElement[]>([]);
  const messagesBlockRef = useRef<HTMLDivElement>(null);

  useIntersection(rootRef, rootId);

  useEffect(() => {
    setTimeout(() => {
      const fearTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => (innerWidth > 1024 ? '+=5000' : '+=3500'),
          pin: true,
          scrub: 0.3,
          snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 2 },
            delay: 0.2,
            ease: 'sine.out',
          },
        },
      });
      if (innerWidth > 1024) {
        fearTimeline
          .set(cardItems.current[1], {
            y: getItemSizes(cardItems.current[0]).height + 24,
          })
          .set(cardItems.current[2], {
            y: getItemSizes(cardItems.current[1]).height + 24,
          })
          .set(cardItems.current[3], {
            y: getItemSizes(cardItems.current[2]).height + 24,
          })

          .addLabel('start')
          .to(
            headRef.current,
            {
              yPercent: -100,
              opacity: 0,
              duration: 0.5,
            },
            'start+=0.5'
          )
          .to(
            messagesBlockRef.current,
            {
              y: -headRef!.current!.offsetHeight,
              duration: 0.5,
            },
            'start+=0.5'
          )
          .addLabel('finishMoveToTop')
          .to(
            miniCardItems.current[0],
            {
              opacity: 1,
              duration: 0.5,
            },
            'finishMoveToTop+=0.2'
          )
          .to(
            miniCardTitles.current[0],
            {
              color: '#1d1d1d',
              duration: 0.5,
            },
            '>'
          )
          .to(
            miniCardBackgrounds.current[0],
            {
              backgroundColor: '#fff',
            },
            '<'
          )
          .addLabel('showFirstMiniCardWithBackground')
          .fromTo(
            miniCardBackgrounds.current[0],
            {
              scaleX: getScaleParams(
                miniCardBackgrounds.current[0],
                miniCardItems!.current[0]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardBackgrounds.current[0],
                miniCardItems!.current[0]
              ).scaleY,
            },
            {
              scaleX: getScaleParams(
                miniCardItems!.current[0],
                cardItems!.current[0]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardItems!.current[0],
                cardItems!.current[0]
              ).scaleY,
              duration: 0.8,
            },
            'showFirstMiniCardWithBackground'
          )
          .to(
            miniCardItems.current[0],
            {
              x:
                getCenterTopPosition(
                  cardItems!.current[0],
                  miniCardBackgrounds!.current[0]
                ).x +
                getItemSizes(miniCardBackgrounds!.current[0]).width / 2 -
                7,
              y: getItemSizes(miniCardBackgrounds!.current[0]).height / 2 - 32,
              duration: 0.8,
            },
            'showFirstMiniCardWithBackground'
          )
          .to(
            miniCardTitles.current[0],
            {
              opacity: 0,
              duration: 0.3,
            },
            '>-0.3'
          )
          .addLabel('finishMoveFirstMiniCard')

          .to(
            cardItems.current[0],
            {
              opacity: 1,
              duration: 0.3,
            },
            'finishMoveFirstMiniCard'
          )
          .to(
            miniCardItems.current[0],
            {
              opacity: 0,
              duration: 0.3,
            },
            'finishMoveFirstMiniCard'
          )
          .addLabel('showFirstCard')
          .to(
            miniCardItems.current[1],
            {
              opacity: 1,
              duration: 0.5,
            },
            'showFirstCard+=0.2'
          )
          .to(
            miniCardTitles.current[1],
            {
              color: '#1d1d1d',
              duration: 0.5,
            },
            '>'
          )
          .to(
            miniCardBackgrounds.current[1],
            {
              backgroundColor: '#fff',
            },
            '<'
          )
          .addLabel('showSecondMiniCardWithBackground')
          .to(
            miniCardBackgrounds.current[1],
            {
              scaleX: getScaleParams(
                miniCardItems!.current[1],
                cardItems!.current[1]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardItems!.current[1],
                cardItems!.current[1]
              ).scaleY,
              duration: 0.8,
            },
            'showSecondMiniCardWithBackground'
          )
          .to(
            miniCardItems.current[1],
            {
              x:
                getCenterTopPosition(
                  cardItems!.current[1],
                  miniCardItems!.current[1]
                ).x +
                getItemSizes(miniCardItems!.current[1]).width / 2 -
                7,

              y:
                getItemSizes(cardItems!.current[0]).height +
                getItemSizes(miniCardItems!.current[1]).height / 2 -
                33,

              duration: 0.8,
            },
            'showSecondMiniCardWithBackground'
          )
          .to(
            miniCardTitles.current[1],
            {
              opacity: 0,
              duration: 0.3,
            },
            '>-0.3'
          )
          .addLabel('finishMoveSecondtMiniCard')

          .to(
            cardItems.current[1],
            {
              opacity: 1,
              duration: 0.3,
            },
            'finishMoveSecondtMiniCard'
          )
          .to(
            miniCardItems.current[1],
            {
              opacity: 0,
              duration: 0.3,
            },
            'finishMoveSecondtMiniCard'
          )
          .addLabel('showSecondCard')
          .to(
            [cardItems.current[0], miniCardItems.current[0]],
            {
              yPercent: -100,
              opacity: 0,
              duration: 0.4,
            },
            'showSecondCard'
          )
          .to(
            [cardItems.current[1], miniCardItems.current[1]],
            {
              y: 0,
              duration: 0.4,
            },
            'showSecondCard'
          )
          .addLabel('removeFirstCards')
          .to(
            miniCardItems.current[2],
            {
              opacity: 1,
              duration: 0.5,
            },
            'removeFirstCards+=0.2'
          )
          .to(
            miniCardTitles.current[2],
            {
              color: '#1d1d1d',
              duration: 0.5,
            },
            '>'
          )
          .to(
            miniCardBackgrounds.current[2],
            {
              backgroundColor: '#fff',
            },
            '<'
          )
          .addLabel('showThirdMiniCardWithBackground')
          .to(
            miniCardBackgrounds.current[2],
            {
              scaleX: getScaleParams(
                miniCardItems!.current[2],
                cardItems!.current[2]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardItems!.current[2],
                cardItems!.current[2]
              ).scaleY,
              duration: 0.8,
            },
            'showThirdMiniCardWithBackground'
          )
          .to(
            miniCardItems.current[2],
            {
              x:
                getCenterTopPosition(
                  cardItems!.current[2],
                  miniCardItems!.current[2]
                ).x +
                getItemSizes(miniCardItems!.current[2]).width / 2 -
                7,
              y:
                getItemSizes(cardItems!.current[2]).height +
                getItemSizes(miniCardItems!.current[2]).height / 2 -
                82,
              duration: 0.8,
            },
            'showThirdMiniCardWithBackground'
          )
          .to(
            miniCardTitles.current[2],
            {
              opacity: 0,
              duration: 0.3,
            },
            '>-0.3'
          )
          .addLabel('finishMoveThirdtMiniCard')

          .to(
            cardItems.current[2],
            {
              opacity: 1,
              duration: 0.3,
            },
            'finishMoveThirdtMiniCard'
          )
          .to(
            miniCardItems.current[2],
            {
              opacity: 0,
              duration: 0.3,
            },
            'finishMoveThirdtMiniCard'
          )
          .addLabel('showThirdCard')
          .to(
            [cardItems.current[1], miniCardItems.current[1]],
            {
              yPercent: -100,
              opacity: 0,
              duration: 0.4,
            },
            'showThirdCard'
          )
          .to(
            [cardItems.current[2], miniCardItems.current[2]],
            {
              y: 0,
              duration: 0.4,
            },
            'showThirdCard'
          )
          .addLabel('removeSecondCards')
          .to(
            miniCardItems.current[3],
            {
              opacity: 1,
              duration: 0.5,
            },
            'removeSecondCards+=0.2'
          )
          .to(
            miniCardTitles.current[3],
            {
              color: '#1d1d1d',
              duration: 0.5,
            },
            '>'
          )
          .to(
            miniCardBackgrounds.current[3],
            {
              backgroundColor: '#fff',
            },
            '<'
          )
          .addLabel('showFourthMiniCardWithBackground')
          .to(
            miniCardBackgrounds.current[3],
            {
              scaleX: getScaleParams(
                miniCardItems!.current[3],
                cardItems!.current[3]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardItems!.current[3],
                cardItems!.current[3]
              ).scaleY,
              duration: 0.8,
            },
            'showFourthMiniCardWithBackground'
          )
          .to(
            miniCardItems.current[3],
            {
              x:
                getCenterTopPosition(
                  cardItems!.current[3],
                  miniCardItems!.current[3]
                ).x +
                getItemSizes(miniCardItems!.current[3]).width / 2 -
                7,
              y:
                getItemSizes(cardItems!.current[3]).height +
                getItemSizes(miniCardItems!.current[3]).height / 2 +
                80,
              duration: 0.8,
            },
            'showFourthMiniCardWithBackground'
          )
          .to(
            miniCardTitles.current[3],
            {
              opacity: 0,
              duration: 0.3,
            },
            '>-0.3'
          )
          .addLabel('finishMoveFourthtMiniCard')

          .to(
            cardItems.current[3],
            {
              opacity: 1,
              duration: 0.3,
            },
            'finishMoveFourthtMiniCard'
          )
          .to(
            miniCardItems.current[3],
            {
              opacity: 0,
              duration: 0.3,
            },
            'finishMoveFourthtMiniCard'
          )
          .addLabel('showFourthCard');
      } else {
        fearTimeline
          .addLabel('start')
          .to(
            headRef.current,
            {
              yPercent: -100,
              opacity: 0,
              duration: 0.5,
            },
            'start+=0.5'
          )
          .to(
            messagesBlockRef.current,
            {
              y: -headRef!.current!.offsetHeight,
              duration: 0.5,
            },
            'start+=0.5'
          )
          .addLabel('finishMoveToTop')
          .to(
            miniCardItems.current[0],
            {
              opacity: 1,
              duration: 0.5,
            },
            'finishMoveToTop+=0.2'
          )
          .to(
            miniCardTitles.current[0],
            {
              color: '#1d1d1d',
              duration: 0.5,
            },
            '>'
          )
          .to(
            miniCardBackgrounds.current[0],
            {
              backgroundColor: '#fff',
            },
            '<'
          )
          .addLabel('showFirstMiniCardWithBackground')
          .fromTo(
            miniCardBackgrounds.current[0],
            {
              scaleX: getScaleParams(
                miniCardBackgrounds.current[0],
                miniCardItems!.current[0]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardBackgrounds.current[0],
                miniCardItems!.current[0]
              ).scaleY,
            },
            {
              scaleX: getScaleParams(
                miniCardItems!.current[0],
                cardItems!.current[0]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardItems!.current[0],
                cardItems!.current[0]
              ).scaleY,
              duration: 0.8,
            },
            'showFirstMiniCardWithBackground'
          )
          .to(
            miniCardItems.current[0],
            {
              y:
                getCenterTopPosition(
                  cardItems!.current[0],
                  miniCardBackgrounds!.current[0]
                ).y +
                getItemSizes(miniCardBackgrounds!.current[0]).width / 2 -
                10,
              duration: 0.8,
            },
            'showFirstMiniCardWithBackground'
          )
          .to(
            miniCardTitles.current[0],
            {
              opacity: 0,
              duration: 0.3,
            },
            '>-0.3'
          )
          .addLabel('finishMoveFirstMiniCard')
          .to(
            cardItems.current[0],
            {
              opacity: 1,
              duration: 0.3,
            },
            'finishMoveFirstMiniCard'
          )
          .to(
            miniCardItems.current[0],
            {
              opacity: 0,
              duration: 0.3,
            },
            'finishMoveFirstMiniCard'
          )
          .addLabel('showFirstCard')
          .to(
            miniCardItems.current[1],
            {
              opacity: 1,
              duration: 0.5,
            },
            'showFirstCard+=0.2'
          )
          .to(
            miniCardTitles.current[1],
            {
              color: '#1d1d1d',
              duration: 0.5,
            },
            '>'
          )
          .to(
            miniCardBackgrounds.current[1],
            {
              backgroundColor: '#fff',
            },
            '<'
          )
          .addLabel('showSecondtMiniCardWithBackground')
          .to(
            [cardItems.current[0], miniCardItems.current[0]],
            {
              yPercent: -100,
              opacity: 0,
              duration: 0.4,
            },
            'showSecondtMiniCardWithBackground'
          )
          .fromTo(
            miniCardBackgrounds.current[1],
            {
              scaleX: getScaleParams(
                miniCardBackgrounds.current[1],
                miniCardItems!.current[1]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardBackgrounds.current[1],
                miniCardItems!.current[1]
              ).scaleY,
            },
            {
              scaleX: getScaleParams(
                miniCardItems!.current[1],
                cardItems!.current[1]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardItems!.current[1],
                cardItems!.current[1]
              ).scaleY,
              duration: 0.8,
            },
            'showSecondtMiniCardWithBackground'
          )
          .to(
            miniCardItems.current[1],
            {
              y:
                getCenterTopPosition(
                  cardItems!.current[1],
                  miniCardBackgrounds!.current[1]
                ).y +
                getItemSizes(miniCardBackgrounds!.current[1]).width / 2 -
                10,
              duration: 0.8,
            },
            'showSecondtMiniCardWithBackground'
          )
          .to(
            miniCardTitles.current[1],
            {
              opacity: 0,
              duration: 0.3,
            },
            '>-0.3'
          )
          .addLabel('finishMoveSecondMiniCard')

          .to(
            cardItems.current[1],
            {
              opacity: 1,
              duration: 0.3,
            },
            'finishMoveSecondMiniCard'
          )
          .to(
            miniCardItems.current[1],
            {
              opacity: 0,
              duration: 0.3,
            },
            'finishMoveSecondMiniCard'
          )
          .addLabel('showSecondCard')
          .to(
            miniCardItems.current[2],
            {
              opacity: 1,
              duration: 0.5,
            },
            'showSecondCard+=0.2'
          )
          .to(
            miniCardTitles.current[2],
            {
              color: '#1d1d1d',
              duration: 0.5,
            },
            '>'
          )
          .to(
            miniCardBackgrounds.current[2],
            {
              backgroundColor: '#fff',
            },
            '<'
          )
          .addLabel('showThirdMiniCardWithBackground')
          .to(
            [cardItems.current[1], miniCardItems.current[1]],
            {
              yPercent: -100,
              opacity: 0,
              duration: 0.4,
            },
            'showThirdMiniCardWithBackground'
          )
          .fromTo(
            miniCardBackgrounds.current[2],
            {
              scaleX: getScaleParams(
                miniCardBackgrounds.current[2],
                miniCardItems!.current[2]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardBackgrounds.current[2],
                miniCardItems!.current[2]
              ).scaleY,
            },
            {
              scaleX: getScaleParams(
                miniCardItems!.current[2],
                cardItems!.current[2]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardItems!.current[2],
                cardItems!.current[2]
              ).scaleY,
              duration: 0.8,
            },
            'showThirdMiniCardWithBackground'
          )
          .to(
            miniCardItems.current[2],
            {
              y:
                getCenterTopPosition(
                  cardItems!.current[2],
                  miniCardBackgrounds!.current[2]
                ).y +
                getItemSizes(miniCardBackgrounds!.current[2]).width / 2 -
                10,
              duration: 0.8,
            },
            'showThirdMiniCardWithBackground'
          )
          .to(
            miniCardTitles.current[2],
            {
              opacity: 0,
              duration: 0.3,
            },
            '>-0.3'
          )
          .addLabel('finishMoveThirdMiniCard')

          .to(
            cardItems.current[2],
            {
              opacity: 1,
              duration: 0.3,
            },
            'finishMoveThirdMiniCard'
          )
          .to(
            miniCardItems.current[2],
            {
              opacity: 0,
              duration: 0.3,
            },
            'finishMoveThirdMiniCard'
          )
          .addLabel('showThirdCard')
          .to(
            miniCardItems.current[3],
            {
              opacity: 1,
              duration: 0.5,
            },
            'showThirdCard+=0.2'
          )
          .to(
            miniCardTitles.current[3],
            {
              color: '#1d1d1d',
              duration: 0.5,
            },
            '>'
          )
          .to(
            miniCardBackgrounds.current[3],
            {
              backgroundColor: '#fff',
            },
            '<'
          )
          .addLabel('showFourthMiniCardWithBackground')
          .to(
            [cardItems.current[2], miniCardItems.current[2]],
            {
              yPercent: -100,
              opacity: 0,
              duration: 0.4,
            },
            'showFourthMiniCardWithBackground'
          )
          .fromTo(
            miniCardBackgrounds.current[3],
            {
              scaleX: getScaleParams(
                miniCardBackgrounds.current[3],
                miniCardItems!.current[3]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardBackgrounds.current[3],
                miniCardItems!.current[3]
              ).scaleY,
            },
            {
              scaleX: getScaleParams(
                miniCardItems!.current[3],
                cardItems!.current[3]
              ).scaleX,
              scaleY: getScaleParams(
                miniCardItems!.current[3],
                cardItems!.current[3]
              ).scaleY,
              duration: 0.8,
            },
            'showFourthMiniCardWithBackground'
          )
          .to(
            miniCardItems.current[3],
            {
              y:
                getCenterTopPosition(
                  cardItems!.current[3],
                  miniCardBackgrounds!.current[3]
                ).y +
                getItemSizes(miniCardBackgrounds!.current[3]).width / 2 -
                10,
              duration: 0.8,
            },
            'showFourthMiniCardWithBackground'
          )
          .to(
            miniCardTitles.current[3],
            {
              opacity: 0,
              duration: 0.3,
            },
            '>-0.3'
          )
          .addLabel('finishMoveFourthMiniCard')

          .to(
            cardItems.current[3],
            {
              opacity: 1,
              duration: 0.3,
            },
            'finishMoveFourthMiniCard'
          )
          .to(
            miniCardItems.current[3],
            {
              opacity: 0,
              duration: 0.3,
            },
            'finishMoveFourthMiniCard'
          )
          .addLabel('showFourthCard');
      }
    }, 0);
  }, []);

  return (
    <Root ref={rootRef} id={rootId}>
      <StyledContainer>
        <SectionHead ref={headRef}>
          <StyledSectionLabel text={t('label')} />
          <SectionTitle text={t('title')} />
        </SectionHead>
        <MessagesBlock ref={messagesBlockRef}>
          <MessagesList ref={messagesListRef}>
            <MessageItem
              ref={(item: HTMLLIElement) => {
                cardItems.current[0] = item;
              }}
            >
              <MessageItemTitle>{t('card1.title')}</MessageItemTitle>
              <MessageItemText>{t('card1.description')}</MessageItemText>
            </MessageItem>
            <MessageItem
              ref={(item: HTMLLIElement) => {
                cardItems.current[1] = item;
              }}
            >
              <MessageItemTitle>{t('card2.title')}</MessageItemTitle>
              <MessageItemText>{t('card2.description')}</MessageItemText>
            </MessageItem>
            <MessageItem
              ref={(item: HTMLLIElement) => {
                cardItems.current[2] = item;
              }}
            >
              <MessageItemTitle>{t('card3.title')}</MessageItemTitle>
              <MessageItemText>{t('card3.description')}</MessageItemText>
            </MessageItem>
            <MessageItem
              ref={(item: HTMLLIElement) => {
                cardItems.current[3] = item;
              }}
            >
              <MessageItemTitle>{t('card4.title')}</MessageItemTitle>
              <MessageItemText>{t('card4.description')}</MessageItemText>
            </MessageItem>
          </MessagesList>
          <MessagePhoneWrap>
            <MessagePhoneImg />
            <MiniCard
              ref={(item: HTMLDivElement) => {
                miniCardItems.current[3] = item;
              }}
            >
              <MiniCardBg
                ref={(item: HTMLDivElement) => {
                  miniCardBackgrounds.current[3] = item;
                }}
              />
              <MiniCardTitle
                ref={(item: HTMLParagraphElement) => {
                  miniCardTitles.current[3] = item;
                }}
              >
                {t('card4.title')}
              </MiniCardTitle>
            </MiniCard>
            <MiniCard
              ref={(item: HTMLDivElement) => {
                miniCardItems.current[2] = item;
              }}
            >
              <MiniCardBg
                ref={(item: HTMLDivElement) => {
                  miniCardBackgrounds.current[2] = item;
                }}
              />
              <MiniCardTitle
                ref={(item: HTMLParagraphElement) => {
                  miniCardTitles.current[2] = item;
                }}
              >
                {t('card3.title')}
              </MiniCardTitle>
            </MiniCard>
            <MiniCard
              ref={(item: HTMLDivElement) => {
                miniCardItems.current[1] = item;
              }}
            >
              <MiniCardBg
                ref={(item: HTMLDivElement) => {
                  miniCardBackgrounds.current[1] = item;
                }}
              />
              <MiniCardTitle
                ref={(item: HTMLParagraphElement) => {
                  miniCardTitles.current[1] = item;
                }}
              >
                {t('card2.title')}
              </MiniCardTitle>
            </MiniCard>
            <MiniCard
              ref={(item: HTMLDivElement) => {
                miniCardItems.current[0] = item;
              }}
            >
              <MiniCardBg
                ref={(item: HTMLDivElement) => {
                  miniCardBackgrounds.current[0] = item;
                }}
              />
              <MiniCardTitle
                ref={(item: HTMLParagraphElement) => {
                  miniCardTitles.current[0] = item;
                }}
              >
                {t('card1.title')}
              </MiniCardTitle>
            </MiniCard>
          </MessagePhoneWrap>
        </MessagesBlock>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.section`
  height: 100vh;
  margin-bottom: 100px;
`;

const StyledContainer = styled(Container)`
  padding-top: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1024px) {
    padding-top: 40px;
  }
`;

const SectionHead = styled.div`
  padding-bottom: 60px;
  align-self: center;
  text-align: center;
  will-change: transform, opacity;
  @media (max-width: 1024px) {
    padding-bottom: 40px;
  }
`;

const StyledSectionLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const MessagesBlock = styled.div`
  background-color: ${COLORS.lightGray};
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  border-radius: 65px;
  position: relative;
  overflow: hidden;
  will-change: transform;
  @media (max-width: 1024px) {
    border-radius: 40px;
  }
`;

const MessagesList = styled.ul`
  position: absolute;
  top: 10%;
  left: 6.85%;
  z-index: 10;

  @media (max-width: 1300px) {
    left: 40px;
  }
  @media (max-width: 1024px) {
    left: 32px;
    right: 32px;
  }
  @media (max-width: 768px) {
    left: 20px;
    right: 20px;
    top: 20px;
  }
  @media (min-width: 320px) and (max-width: 1024px) and (max-height: 700px) {
    left: 20px;
    right: 20px;
    top: 20px;
  }
`;

const MessageItem = styled.li`
  padding: 28px 24px;
  background-color: ${COLORS.white};
  border-radius: 30px;
  max-width: 505px;
  opacity: 0;
  &:not(:first-child) {
    position: absolute;
    left: 0;
    top: 0;
  }
  @media (max-width: 1024px) {
    max-width: none;
  }
  @media (min-width: 320px) and (max-width: 1024px) and (max-height: 700px) {
    padding: 18px 12px;
    border-radius: 20px;
  }
`;

const MessageItemTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: ${COLORS.black2};
  margin-bottom: 14px;
  @media (max-width: 1024px) {
    margin-bottom: 12px;
  }
`;

const MessageItemText = styled.p`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;

  color: ${COLORS.black2};
  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const MessagePhoneWrap = styled.div`
  position: absolute;
  right: 10.4%;
  top: 17.7%;

  @media (max-width: 1300px) {
    right: 40px;
  }
  @media (max-width: 1024px) {
    right: auto;
    top: auto;
    bottom: -400px;
    left: 50%;
    transform: translateX(-50%);
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 265px;
    bottom: -250px;
  }
`;

const MessagePhoneImg = styled(Image).attrs(() => ({
  src: phoneImg,
  alt: 'Iphone',
}))``;

const MiniCard = styled.div`
  position: absolute;
  will-change: transform, opacity;
  border-radius: 23px;
  padding: 28px 20px;
  width: 100%;
  max-width: 260px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 150px);
  opacity: 0;
  @media (max-width: 1024px) {
    transform: translate(-50%, 100px);
  }
  @media (max-width: 768px) {
    max-width: 210px;
  }
  @media (min-width: 320px) and (max-width: 1024px) and (max-height: 650px) {
    transform: translate(-50%, 50px);
  }
`;

const MiniCardBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  will-change: transform, background-color;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0);
`;

const MiniCardTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${COLORS.white};
  will-change: color;
  position: relative;
  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export default Fear;
