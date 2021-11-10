import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Image from 'next/image';
import phoneImg from '@/assets/images/fear-phone.png';

function getItemSizes(item: HTMLElement) {
  return { width: item.offsetWidth, height: item.offsetHeight };
}

const Fear: FC = () => {
  const { t } = useTranslation('fear');
  const rootRef = useRef<HTMLElement>(null);
  const cardItems = useRef<HTMLLIElement[]>([]);
  const miniCardItems = useRef<HTMLDivElement[]>([]);

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
              <MiniCardBg />
              <MiniCardTitle>{t('card1.title')}</MiniCardTitle>
            </MiniCard>
            <MiniCard
              ref={(item: HTMLDivElement) => {
                miniCardItems.current[2] = item;
              }}
            >
              <MiniCardBg />
              <MiniCardTitle>{t('card3.title')}</MiniCardTitle>
            </MiniCard>
            <MiniCard
              ref={(item: HTMLDivElement) => {
                miniCardItems.current[1] = item;
              }}
            >
              <MiniCardBg />
              <MiniCardTitle>{t('card2.title')}</MiniCardTitle>
            </MiniCard>
            <MiniCard
              ref={(item: HTMLDivElement) => {
                miniCardItems.current[0] = item;
              }}
            >
              <MiniCardBg />
              <MiniCardTitle>{t('card1.title')}</MiniCardTitle>
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
  background-color: transparent;
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
