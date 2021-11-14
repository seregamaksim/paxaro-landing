import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import currency from 'currency.js';
import { useIsMounted } from '@/hooks/useIsMounted';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const marks: { [key: string]: any } = {
  0: 0,
  20: 1,
  40: 2,
  60: 3,
  80: 4,
  100: 5,
};

const PartnerProgramm: FC = () => {
  const { t } = useTranslation('partnerProgramm');
  const rootRef = useRef<HTMLElement>(null);
  const bonusTextRef = useRef<HTMLParagraphElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderBarRef = useRef<HTMLDivElement>(null);
  const sliderHandleWrapRef = useRef<HTMLDivElement>(null);
  const firstCheckboxGradientRef = useRef<HTMLDivElement>(null);
  const secondCheckboxGradientRef = useRef<HTMLDivElement>(null);
  const profitItemLevels = useRef<HTMLLIElement[]>([]);
  const profitItemPeople = useRef<HTMLLIElement[]>([]);

  const [bonus, setBonus] = useState({
    value: 0,
  });
  const [totalBonus, setTotalBonus] = useState({
    value: 0,
  });
  const [sliderValue, setSliderValue] = useState({
    value: 0,
  });

  useEffect(() => {
    const bonusTarget = {
      value: bonus.value,
    };
    const totalBonusTarget = {
      value: totalBonus.value,
    };
    const sliderValueTarget = {
      value: sliderValue.value,
    };

    const partnerProgrammTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: () => (innerWidth > 768 ? '+=4000' : '+=2000'),
        pin: true,
        scrub: 1,
        markers: true,
        snap: {
          snapTo: 'labels',
          duration: { min: 0.2, max: 2 },
          delay: 0.2,
          ease: 'power3.out',
        },
      },
    });
    partnerProgrammTimeline
      .addLabel('start')
      .to(
        bonusTarget,
        {
          duration: 1,
          value: '+=1236',
          roundProps: 'value',
          onUpdate() {
            setBonus({ value: bonusTarget.value });
          },
        },
        'start'
      )
      .to(
        totalBonusTarget,
        {
          duration: 1,
          value: '+=16456',
          roundProps: 'value',
          onUpdate() {
            setTotalBonus({ value: totalBonusTarget.value });
          },
        },
        'start'
      )
      .to(
        sliderHandleWrapRef.current,
        {
          x: sliderRef!.current!.offsetWidth,
          duration: 1,
        },
        'start'
      )
      .to(
        sliderValueTarget,
        {
          duration: 1,
          value: '+=5',
          roundProps: 'value',
          onUpdate() {
            setSliderValue({ value: sliderValueTarget.value });
          },
        },
        'start'
      )
      .from(
        sliderBarRef.current,
        {
          scaleX: 0,
          duration: 1,
        },
        'start'
      )
      .addLabel('firstMoveToFinish')
      .to(
        bonusTarget,
        {
          duration: 0.1,
          value: '-=1236',
          roundProps: 'value',
          onUpdate() {
            setBonus({ value: bonusTarget.value });
          },
        },
        'start'
      )
      .to(
        totalBonusTarget,
        {
          duration: 0.1,
          value: '-=16456',
          roundProps: 'value',
          onUpdate() {
            setTotalBonus({ value: totalBonusTarget.value });
          },
        },
        'start'
      )
      .to(
        sliderHandleWrapRef.current,
        {
          x: 0,
          duration: 0.1,
        },
        'firstMoveToFinish'
      )
      .to(
        sliderValueTarget,
        {
          duration: 0.1,
          value: '-=5',
          roundProps: 'value',
          onUpdate() {
            setSliderValue({ value: sliderValueTarget.value });
          },
        },
        'firstMoveToFinish'
      )
      .to(
        sliderBarRef.current,
        {
          scaleX: 0,
          duration: 0.1,
        },
        'firstMoveToFinish'
      )
      .from(
        [...profitItemLevels.current, ...profitItemPeople.current],
        {
          opacity: 0,
          duration: 0.1,
        },
        'firstMoveToFinish'
      )
      .to(
        firstCheckboxGradientRef.current,
        {
          opacity: 0,
          duration: 0.1,
        },
        'firstMoveToFinish'
      )
      .from(
        secondCheckboxGradientRef.current,
        {
          opacity: 0,
          duration: 0.1,
        },
        'firstMoveToFinish'
      )
      .addLabel('firstResetSlider')
      .to(
        bonusTarget,
        {
          duration: 1,
          value: `+=${1236 * 1.2}`,
          roundProps: 'value',
          onUpdate() {
            setBonus({ value: bonusTarget.value });
          },
        },
        'firstResetSlider'
      )
      .to(
        totalBonusTarget,
        {
          duration: 1,
          value: `+=${16456 * 1.2}`,
          roundProps: 'value',
          onUpdate() {
            setTotalBonus({ value: totalBonusTarget.value });
          },
        },
        'firstResetSlider'
      )
      .to(
        sliderHandleWrapRef.current,
        {
          x: sliderRef!.current!.offsetWidth,
          duration: 1,
        },
        'firstResetSlider'
      )
      .to(
        sliderValueTarget,
        {
          duration: 1,
          value: '+=5',
          roundProps: 'value',
          onUpdate() {
            setSliderValue({ value: sliderValueTarget.value });
          },
        },
        'firstResetSlider'
      )
      .to(
        sliderBarRef.current,
        {
          scaleX: 1,
          duration: 1,
        },
        'firstResetSlider'
      );
  }, []);
  return (
    <Root ref={rootRef}>
      <StyledContainer>
        <SectionHead>
          <StyledSectionLabel text={t('label')} />
          <StyledSectionTitle text={t('title')} />
          <Subtitle>{t('subtitle')}</Subtitle>
        </SectionHead>

        <Calculator>
          <CalculatorWrapper>
            <CalculatorSection>
              <CalculatorSectionTitle>
                {t('calculator.subsriptionPlan')}
              </CalculatorSectionTitle>
              <SubscriptionList>
                <SubsriptionItem>
                  <SubsriptionCheckbox>
                    <SubsriptionCheckboxInnerOpacity />
                    <SubsriptionCheckboxInnerGreen
                      ref={firstCheckboxGradientRef}
                    />
                  </SubsriptionCheckbox>
                  <CalculatorText>Prime</CalculatorText>
                </SubsriptionItem>
                <SubsriptionItem>
                  <SubsriptionCheckbox>
                    <SubsriptionCheckboxInnerOpacity />
                    <SubsriptionCheckboxInnerGreen
                      ref={secondCheckboxGradientRef}
                    />
                  </SubsriptionCheckbox>
                  <CalculatorText>Advanced</CalculatorText>
                </SubsriptionItem>
              </SubscriptionList>
            </CalculatorSection>
            <CalculatorSection>
              <CalculatorSectionTitle>
                {t('calculator.profit')}
              </CalculatorSectionTitle>
              <ProfitSection>
                <ProfitTitle>{t('calculator.levels')}</ProfitTitle>
                <ProfitList>
                  <ProfitItem>
                    <CalculatorText>1</CalculatorText>
                  </ProfitItem>
                  <ProfitItem>
                    <CalculatorText>2</CalculatorText>
                  </ProfitItem>
                  <ProfitItem>
                    <CalculatorText>3</CalculatorText>
                  </ProfitItem>
                  <ProfitItem
                    ref={(item: HTMLLIElement) => {
                      profitItemLevels.current[0] = item;
                    }}
                  >
                    <CalculatorText>4</CalculatorText>
                  </ProfitItem>
                  <ProfitItem
                    ref={(item: HTMLLIElement) => {
                      profitItemLevels.current[1] = item;
                    }}
                  >
                    <CalculatorText>5</CalculatorText>
                  </ProfitItem>
                </ProfitList>
              </ProfitSection>
              <ProfitSection>
                <ProfitTitle>{t('calculator.people')}</ProfitTitle>
                <ProfitList>
                  <ProfitItemWithoutBorder>
                    <CalculatorText>4</CalculatorText>
                  </ProfitItemWithoutBorder>
                  <ProfitItemWithoutBorder>
                    <CalculatorText>16</CalculatorText>
                  </ProfitItemWithoutBorder>
                  <ProfitItemWithoutBorder>
                    <CalculatorText>64</CalculatorText>
                  </ProfitItemWithoutBorder>
                  <ProfitItemWithoutBorder
                    ref={(item: HTMLLIElement) => {
                      profitItemPeople.current[0] = item;
                    }}
                  >
                    <CalculatorText>256</CalculatorText>
                  </ProfitItemWithoutBorder>
                  <ProfitItemWithoutBorder
                    ref={(item: HTMLLIElement) => {
                      profitItemPeople.current[1] = item;
                    }}
                  >
                    <CalculatorText>1024</CalculatorText>
                  </ProfitItemWithoutBorder>
                </ProfitList>
              </ProfitSection>
            </CalculatorSection>
            <CalculatorSection>
              <CalculatorSectionTitleMargin>
                {t('calculator.countFriend')}
              </CalculatorSectionTitleMargin>
              <SliderWrapper>
                <SliderBorders>0</SliderBorders>
                <StyledSliderWrapper>
                  <SliderHandleWrap ref={sliderHandleWrapRef}>
                    <SliderCount>{sliderValue.value}</SliderCount>
                    <SliderHandle />
                  </SliderHandleWrap>
                  <StyledSlider ref={sliderRef}>
                    <SliderBar ref={sliderBarRef} />
                  </StyledSlider>
                </StyledSliderWrapper>
                <SliderBorders>5</SliderBorders>
              </SliderWrapper>
            </CalculatorSection>
            <CalculatorSectionFlex>
              <CalculatorSection>
                <CalculatorSectionTitle>
                  {t('calculator.bonus')}
                </CalculatorSectionTitle>
                <BonusWrap>
                  <BonusBlur />
                  <BonusTextGreen ref={bonusTextRef}>
                    {currency(bonus.value, {
                      separator: ',',
                      precision: 0,
                    }).format()}
                  </BonusTextGreen>
                </BonusWrap>
              </CalculatorSection>
              <CalculatorSection>
                <CalculatorSectionTitle>
                  {t('calculator.totalBonus')}
                </CalculatorSectionTitle>
                <BonusWrap>
                  <BonusText>
                    {currency(totalBonus.value, {
                      separator: ',',
                      precision: 0,
                    }).format()}
                  </BonusText>
                </BonusWrap>
              </CalculatorSection>
            </CalculatorSectionFlex>
          </CalculatorWrapper>
        </Calculator>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.section``;

const StyledContainer = styled(Container)`
  padding-bottom: 20px;
`;

const SectionHead = styled.div`
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSectionLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 18px;
  text-align: center;
`;

const Subtitle = styled.p`
  max-width: 890px;
  text-align: center;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--black2);
`;

const Calculator = styled.div`
  background: var(--black2);
  border-radius: 50px;
`;

const CalculatorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  padding: 60px 105px;
`;

const CalculatorSection = styled.div``;

const CalculatorSectionFlex = styled(CalculatorSection)`
  display: flex;
  ${CalculatorSection} {
    margin-right: 100px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const CalculatorSectionTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;

  color: var(--white);
  margin-bottom: 33px;
`;

const CalculatorText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;

  color: var(--white);
`;

const CalculatorSectionTitleMargin = styled(CalculatorSectionTitle)`
  margin-bottom: 52px;
`;

const SubscriptionList = styled.ul`
  display: flex;
  align-items: center;
`;

const SubsriptionItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 100px;
  &:last-child {
    margin-right: 0;
  }
`;

const SubsriptionCheckbox = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid var(--green);
  position: relative;
  margin-right: 14px;
  border-radius: 50%;
`;

const SubsriptionCheckboxInner = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

const SubsriptionCheckboxInnerOpacity = styled(SubsriptionCheckboxInner)`
  background-color: rgba(255, 255, 255, 0.2);
`;
const SubsriptionCheckboxInnerGreen = styled(SubsriptionCheckboxInner)`
  background-image: var(--greenGradient);
  z-index: 2;
`;

const ProfitSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProfitTitle = styled(CalculatorText)`
  min-width: 65px;
  margin-right: 24px;
`;

const ProfitList = styled.ul`
  display: flex;
  align-items: center;
`;

const ProfitItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 1px solid var(--green);
  border-radius: 7px;
  margin-right: 28px;
  &:last-child {
    margin-right: 0;
  }
`;

const ProfitItemWithoutBorder = styled(ProfitItem)`
  border: 0;
`;

const BonusWrap = styled.div`
  position: relative;
`;

const BonusBlur = styled.div`
  position: absolute;
  width: 75px;
  height: 34px;
  background: var(--green);
  filter: blur(88px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const BonusText = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 50px;
  color: var(--white);
  position: relative;
`;

const BonusTextGreen = styled(BonusText)`
  color: var(--green);
`;

const StyledSliderWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

const SliderHandleWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 1;
`;

const SliderCount = styled.p`
  position: absolute;
  bottom: calc(100% + 4px);
  left: 50%;
  transform: translateX(-50%);
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--green);
`;

const SliderHandle = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid var(--black2);
  background-image: var(--greenGradient);
  border-radius: 50%;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: var(--greenGradient);
    filter: blur(18px);
  }
`;

const StyledSlider = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  width: auto;
  height: 4px;
  background-color: var(--darkGray);
  border-radius: 3px;
  position: relative;
`;

const SliderBar = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--green);
  transform-origin: left;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 356px;
`;

const SliderBorders = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--white);
`;

export default PartnerProgramm;
