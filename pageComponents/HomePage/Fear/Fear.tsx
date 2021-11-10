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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function getItemSizes(item: HTMLElement) {
  return { width: item.offsetWidth, height: item.offsetHeight };
}

// function getPositionElemRelativeOtherElem(targetElem:HTMLElement, otherElem: HTMLElement) {

// }

function getScaleParams(targetElem: HTMLElement, toElem: HTMLElement) {
  return {
    scaleX: getItemSizes(toElem).width / getItemSizes(targetElem).width,
    scaleY: getItemSizes(toElem).height / getItemSizes(targetElem).height,
  };
}

const Fear: FC = () => {
  const { t } = useTranslation('fear');
  const rootRef = useRef<HTMLElement>(null);
  const cardItems = useRef<HTMLLIElement[]>([]);
  const miniCardItems = useRef<HTMLDivElement[]>([]);
  const miniCardTitles = useRef<HTMLParagraphElement[]>([]);
  const miniCardBackgrounds = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    console.log(
      getCenterTopPosition(cardItems!.current[0], miniCardItems!.current[0])
    );
    const fearTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: () => '+=5000',
        markers: true,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 2 },
          delay: 0.2,
          ease: 'sine.out',
        },
      },
    });

    fearTimeline
      .addLabel('start')
      .to(
        miniCardItems.current[0],
        {
          opacity: 1,
          duration: 0.5,
        },
        'start+=0.2'
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
      .to(
        miniCardBackgrounds.current[0],
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
              miniCardItems!.current[0]
            ).x +
            getItemSizes(miniCardItems!.current[0]).width / 2,
          y:
            getCenterTopPosition(
              cardItems!.current[0],
              miniCardItems!.current[0]
            ).y +
            getItemSizes(miniCardItems!.current[0]).height / 2,
          duration: 0.8,
        },
        'showFirstMiniCardWithBackground'
      );
  }, []);

  return (
    <Root ref={rootRef}>
      <StyledContainer>
        <SectionHead>
          <StyledSectionLabel text={t('label')} />
          <SectionTitle text={t('title')} />
        </SectionHead>
        <MessagesBlock>
          <MessagesList>
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
                {t('card1.title')}
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
`;

const StyledContainer = styled(Container)`
  padding-top: 70px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SectionHead = styled.div`
  margin-bottom: 60px;
  align-self: center;
  text-align: center;
`;

const StyledSectionLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const MessagesBlock = styled.div`
  background-color: var(--lightGray);
  flex-grow: 1;
  width: 100%;
  border-top-right-radius: 65px;
  border-top-left-radius: 65px;
  position: relative;
  overflow: hidden;
`;

const MessagesList = styled.ul`
  position: absolute;
  top: 10%;
  left: 6.85%;
`;

const MessageItem = styled.li`
  padding: 28px 24px;
  background-color: var(--white);
  border-radius: 30px;
  max-width: 505px;

  opacity: 0;
`;

const MessageItemTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--black2);
  margin-bottom: 14px;
`;

const MessageItemText = styled.p`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;

  color: var(--black2);
`;

const MessagePhoneWrap = styled.div`
  position: absolute;
  right: 10.4%;
  top: 17.7%;
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
  top: 30%;
  left: 50%;
  transform: translateX(-50%);

  opacity: 0;
`;

const MiniCardBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  will-change: transform, background-color;
  border-radius: 23px;
  background-color: rgba(255, 255, 255, 0);
`;

const MiniCardTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.01em;
  color: var(--white);
  will-change: color;
  position: relative;
`;

export default Fear;
