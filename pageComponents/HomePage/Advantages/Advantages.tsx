import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { useIsMounted } from '@/hooks/useIsMounted';

function getItemCenterPosition(
  targetElem: HTMLLIElement,
  toElem: HTMLLIElement
) {
  const targetElemPosition = {
    left: targetElem.getBoundingClientRect().left,
    top: targetElem.getBoundingClientRect().top,
  };
  const toElemPosition = {
    left: toElem.getBoundingClientRect().left,
    top: toElem.getBoundingClientRect().top,
  };
  return {
    x: toElemPosition.left - targetElemPosition.left,
    y: toElemPosition.top - targetElemPosition.top,
  };
}

function getItemSizes(item: HTMLElement) {
  return {
    width: item.offsetWidth,
    height: item.offsetHeight,
  };
}

const Advantages: FC = () => {
  const { t } = useTranslation('advantages');
  const isMounted = useIsMounted();
  const rootRef = useRef(null);
  const itemsRef = useRef<HTMLLIElement[]>([] as HTMLLIElement[]);
  const itemsBgRef = useRef<HTMLDivElement[]>([] as HTMLDivElement[]);
  const listSecondScreens = useRef<HTMLLIElement[]>([] as HTMLLIElement[]);
  const itemsTitleRef = useRef<HTMLParagraphElement[]>(
    [] as HTMLParagraphElement[]
  );

  const headRef = useRef(null);

  // useEffect(() => {

  // }, [itemsRef]);
  useEffect(() => {
    console.log('itemsRef', itemsRef);

    if (isMounted) {
      console.log(
        getItemCenterPosition(itemsRef.current[0], listSecondScreens.current[0])
      );

      const advantagesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: '+=5000',
          markers: true,
          pin: true,
          scrub: 1,
          pinSpacing: true,
        },
      });
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
            x: getItemCenterPosition(
              itemsRef.current[0],
              listSecondScreens.current[0]
            ).x,
            y:
              getItemCenterPosition(
                itemsRef.current[0],
                listSecondScreens.current[0]
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
          '>+0.1'
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
            x: getItemCenterPosition(
              itemsRef.current[1],
              listSecondScreens.current[1]
            ).x,
            y:
              getItemCenterPosition(
                itemsRef.current[1],
                listSecondScreens.current[1]
              ).y + 80,
            duration: 1,
          },
          '>-0.7'
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
          '>+0.3'
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
            x: getItemCenterPosition(
              itemsRef.current[2],
              listSecondScreens.current[2]
            ).x,
            y:
              getItemCenterPosition(
                itemsRef.current[2],
                listSecondScreens.current[2]
              ).y + 80,
            duration: 1,
          },
          '>-0.7'
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
          '>+0.3'
        );
    }
  }, [isMounted]);
  return (
    <Root ref={rootRef}>
      <StyledContainer>
        <SectionHead ref={headRef}>
          <StyledLabel text={t('label')} />
          <StyledTitle text={t('title')} />
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

        <DescriptionSecondList>
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
`;

const StyledContainer = styled(Container)`
  padding-top: 80px;
  padding-bottom: 80px;
  position: relative;
  height: 100%;
`;

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const StyledLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const StyledTitle = styled(SectionTitle)`
  margin-bottom: 24px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: var(--black2);
  max-width: 788px;
`;

const DescriptionList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;
const DescriptionStyleTitle = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: var(--white);
  will-change: transform;
  position: relative;
  /* z-index: 1; */
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
      background-color: var(--green);
    }
  }
`;

const DescriptionItem = styled.li`
  border-radius: 45px;
  padding: 40px 35px 143px 35px;
  position: relative;
`;

const DescriptionItemBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 45px;
  will-change: width, height;
`;

const BlackDescriptionItem = styled(DescriptionItem)`
  &,
  & ${DescriptionItemBg} {
    background-color: var(--black3);
  }
`;

const GrayDescriptionItem = styled(DescriptionItem)`
  &,
  & ${DescriptionItemBg} {
    background-color: var(--lightGray);
  }
  & ${DescriptionStyleTitle} {
    color: var(--black2);
  }
`;

const GreenDescriptionItem = styled(DescriptionItem)`
  &,
  & ${DescriptionItemBg} {
    background: var(--greenGradient);
  }
  & ${DescriptionStyleTitle} span::before {
    background-color: var(--black3);
  }
`;

const DescriptionSecondList = styled.ul`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const DescriptionSecondScreenItemTitle = styled.p`
  display: inline-block;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: var(--white);
  padding: 4px 8px;
  margin-bottom: 10px;
  background-color: var(--green);
`;

const DescriptionSecondScreenItemText = styled.p`
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: var(--white);
`;

const DescriptionSecondScreenItem = styled.li`
  will-change: transform, opacity;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 390px;
  max-width: 650px;
  padding: 100px 50px 50px;
  padding-top: 100px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 45px;
  background: var(--black3);
  z-index: 2;
`;

const GrayDescriptionSecondScreenItem = styled(DescriptionSecondScreenItem)`
  background-color: var(--lightGray);

  & ${DescriptionSecondScreenItemTitle}, & ${DescriptionSecondScreenItemText} {
    color: var(--black2);
  }
`;
const GreenDescriptionSecondScreenItem = styled(DescriptionSecondScreenItem)`
  background: var(--greenGradient);

  & ${DescriptionSecondScreenItemTitle} {
    background-color: var(--black3);
  }
`;

export default Advantages;
