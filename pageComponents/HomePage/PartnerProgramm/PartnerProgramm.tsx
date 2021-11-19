import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import currency from 'currency.js';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PartnerProgramm: FC = () => {
  const { t } = useTranslation('partnerProgramm');
  const rootRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const bonusTextRef = useRef<HTMLParagraphElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderBarRef = useRef<HTMLDivElement>(null);
  const sliderHandleWrapRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const firstLevelAmount = 239.8;
  const secondLevelAmount = 119.9;
  const thirdLevelAmount = 83.93;
  const fourthtLevelAmount = 59.95;
  const fivethLevelAmount = 35.97;

  const [sliderValue, setSliderValue] = useState(2);
  const [bonusValue, setBonusValue] = useState(getSums(sliderValue).sum1);
  const [totalBonusValue, setTotalBonusValue] = useState(
    getAllSum(sliderValue)
  );

  function getSums(factor: number): { [key: string]: number } {
    return {
      sum1: factor * firstLevelAmount,
      sum2: Math.pow(factor, 2) * secondLevelAmount,
      sum3: Math.pow(factor, 3) * thirdLevelAmount,
      sum4: Math.pow(factor, 4) * fourthtLevelAmount,
      sum5: Math.pow(factor, 5) * fivethLevelAmount,
    };
  }

  function getAllSum(factor: number) {
    const allSums = getSums(factor);
    return (
      allSums.sum1 + allSums.sum2 + allSums.sum3 + allSums.sum4 + allSums.sum5
    );
  }

  useEffect(() => {
    setTimeout(() => {
      const bonusTarget = {
        value: bonusValue,
      };
      const totalBonusTarget = {
        value: totalBonusValue,
      };
      const sliderValueTarget = {
        value: sliderValue,
      };
      const partnerProgrammTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => (innerWidth > 768 ? '+=2000' : '+=1500'),
          pin: true,
          scrub: 0,
          snap: {
            snapTo: 'labels',
            duration: { min: 0.2, max: 1 },
            delay: 0.2,
            ease: 'power3.out',
          },
          onUpdate: () => {
            setBonusValue(bonusTarget.value);
            setTotalBonusValue(totalBonusTarget.value);
            setSliderValue(sliderValueTarget.value);
          },
        },
      });

      if (innerWidth > 768) {
        partnerProgrammTimeline
          .addLabel('start')

          .to(
            bonusTarget,
            {
              duration: 1,
              value: getSums(3).sum1,
              roundProps: 'value',
            },
            'start+=0.2'
          )
          .to(
            totalBonusTarget,
            {
              duration: 1,
              value: getAllSum(3),
              roundProps: 'value',
            },
            'start+=0.2'
          )
          .to(
            sliderHandleWrapRef.current,
            {
              x: sliderRef!.current!.offsetWidth / 3,
              duration: 1,
            },
            'start+=0.2'
          )
          .to(
            sliderValueTarget,
            {
              duration: 1,
              value: 3,
              roundProps: 'value',
            },
            'start+=0.2'
          )
          .to(
            sliderBarRef.current,
            {
              scaleX: 0.33,
              duration: 1,
            },
            'start+=0.2'
          )
          .addLabel('moveToThirdLevel')
          .to(
            bonusTarget,
            {
              duration: 1,
              value: getSums(4).sum1,
              roundProps: 'value',
            },
            'moveToThirdLevel+=0.2'
          )
          .to(
            totalBonusTarget,
            {
              duration: 1,
              value: getAllSum(4),
              roundProps: 'value',
            },
            'moveToThirdLevel+=0.2'
          )
          .to(
            sliderHandleWrapRef.current,
            {
              x: sliderRef!.current!.offsetWidth / 1.5,
              duration: 1,
            },
            'moveToThirdLevel+=0.2'
          )
          .to(
            sliderValueTarget,
            {
              duration: 1,
              value: 4,
              roundProps: 'value',
            },
            'moveToThirdLevel+=0.2'
          )
          .to(
            sliderBarRef.current,
            {
              scaleX: 0.66,
              duration: 1,
            },
            'moveToThirdLevel+=0.2'
          )
          .addLabel('moveToFourthLevel')

          .to(
            bonusTarget,
            {
              duration: 1,
              value: getSums(5).sum1,
              roundProps: 'value',
            },
            'moveToFourthLevel+=0.2'
          )
          .to(
            totalBonusTarget,
            {
              duration: 1,
              value: getAllSum(5),
              roundProps: 'value',
            },
            'moveToFourthLevel+=0.2'
          )
          .to(
            sliderHandleWrapRef.current,
            {
              x: sliderRef!.current!.offsetWidth,
              duration: 1,
            },
            'moveToFourthLevel+=0.2'
          )
          .to(
            sliderValueTarget,
            {
              duration: 1,
              value: 5,
              roundProps: 'value',
            },
            'moveToFourthLevel+=0.2'
          )
          .to(
            sliderBarRef.current,
            {
              scaleX: 1,
              duration: 1,
            },
            'moveToFourthLevel+=0.2'
          )
          .addLabel('moveToFivethLevel');
      } else {
        partnerProgrammTimeline
          .addLabel('start')
          .to(
            headRef.current,
            {
              yPercent: -100,
              opacity: 0,
              duration: 0.5,
            },
            'start+=0.3'
          )
          .to(
            calculatorRef.current,
            {
              y: -headRef!.current!.offsetHeight,
              duration: 0.5,
            },
            'start+=0.3'
          )
          .addLabel('finishShowCalculator')
          .to(
            bonusTarget,
            {
              duration: 1,
              value: getSums(3).sum1,
              roundProps: 'value',
            },
            'finishShowCalculator+=0.2'
          )
          .to(
            totalBonusTarget,
            {
              duration: 1,
              value: getAllSum(3),
              roundProps: 'value',
            },
            'finishShowCalculator+=0.2'
          )
          .to(
            sliderHandleWrapRef.current,
            {
              x: sliderRef!.current!.offsetWidth / 3,
              duration: 1,
            },
            'finishShowCalculator+=0.2'
          )
          .to(
            sliderValueTarget,
            {
              duration: 1,
              value: 3,
              roundProps: 'value',
            },
            'finishShowCalculator+=0.2'
          )
          .to(
            sliderBarRef.current,
            {
              scaleX: 0.33,
              duration: 1,
            },
            'finishShowCalculator+=0.2'
          )
          .addLabel('moveToThirdLevel')
          .to(
            bonusTarget,
            {
              duration: 1,
              value: getSums(4).sum1,
              roundProps: 'value',
            },
            'moveToThirdLevel+=0.2'
          )
          .to(
            totalBonusTarget,
            {
              duration: 1,
              value: getAllSum(4),
              roundProps: 'value',
            },
            'moveToThirdLevel+=0.2'
          )
          .to(
            sliderHandleWrapRef.current,
            {
              x: sliderRef!.current!.offsetWidth / 1.5,
              duration: 1,
            },
            'moveToThirdLevel+=0.2'
          )
          .to(
            sliderValueTarget,
            {
              duration: 1,
              value: 4,
              roundProps: 'value',
            },
            'moveToThirdLevel+=0.2'
          )
          .to(
            sliderBarRef.current,
            {
              scaleX: 0.66,
              duration: 1,
            },
            'moveToThirdLevel+=0.2'
          )
          .addLabel('moveToFourthLevel')

          .to(
            bonusTarget,
            {
              duration: 1,
              value: getSums(5).sum1,
              roundProps: 'value',
            },
            'moveToFourthLevel+=0.2'
          )
          .to(
            totalBonusTarget,
            {
              duration: 1,
              value: getAllSum(5),
              roundProps: 'value',
            },
            'moveToFourthLevel+=0.2'
          )
          .to(
            sliderHandleWrapRef.current,
            {
              x: sliderRef!.current!.offsetWidth,
              duration: 1,
            },
            'moveToFourthLevel+=0.2'
          )
          .to(
            sliderValueTarget,
            {
              duration: 1,
              value: 5,
              roundProps: 'value',
            },
            'moveToFourthLevel+=0.2'
          )
          .to(
            sliderBarRef.current,
            {
              scaleX: 1,
              duration: 1,
            },
            'moveToFourthLevel+=0.2'
          )
          .addLabel('moveToFivethLevel');
      }
    }, 0);
  }, []);
  return (
    <Root ref={rootRef}>
      <StyledContainer>
        <SectionHead ref={headRef}>
          <StyledSectionLabel text={t('label')} />
          <StyledSectionTitle text={t('title')} />
          <Subtitle>{t('subtitle')}</Subtitle>
        </SectionHead>

        <Calculator ref={calculatorRef}>
          <CalculatorWrapper>
            <CalculatorSectionPlans>
              <CalculatorSectionTitle>
                {t('calculator.subsriptionPlan')}
              </CalculatorSectionTitle>
              <SubscriptionList>
                <SubsriptionItem>
                  <SubsriptionCheckbox>
                    <SubsriptionCheckboxInnerOpacity />
                    <SubsriptionCheckboxInnerGreen />
                  </SubsriptionCheckbox>
                  <CalculatorText>Prime</CalculatorText>
                </SubsriptionItem>
                <SubsriptionItem>
                  <SubsriptionCheckbox>
                    <SubsriptionCheckboxInnerOpacity />
                    <SubsriptionCheckboxInnerGreen />
                  </SubsriptionCheckbox>
                  <CalculatorText>Advanced</CalculatorText>
                </SubsriptionItem>
              </SubscriptionList>
            </CalculatorSectionPlans>
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
                  <ProfitItem>
                    <CalculatorText>4</CalculatorText>
                  </ProfitItem>
                  <ProfitItem>
                    <CalculatorText>5</CalculatorText>
                  </ProfitItem>
                </ProfitList>
              </ProfitSection>
              <ProfitSection>
                <ProfitTitle>{t('calculator.percent')}</ProfitTitle>
                <ProfitList>
                  <ProfitItemWithoutBorder>
                    <CalculatorText>20%</CalculatorText>
                  </ProfitItemWithoutBorder>
                  <ProfitItemWithoutBorder>
                    <CalculatorText>10%</CalculatorText>
                  </ProfitItemWithoutBorder>
                  <ProfitItemWithoutBorder>
                    <CalculatorText>7%</CalculatorText>
                  </ProfitItemWithoutBorder>
                  <ProfitItemWithoutBorder>
                    <CalculatorText>5%</CalculatorText>
                  </ProfitItemWithoutBorder>
                  <ProfitItemWithoutBorder>
                    <CalculatorText>3%</CalculatorText>
                  </ProfitItemWithoutBorder>
                </ProfitList>
              </ProfitSection>
            </CalculatorSection>
            <CalculatorSectionSlider>
              <CalculatorSectionTitleMargin>
                {t('calculator.countFriend')}
              </CalculatorSectionTitleMargin>
              <SliderWrapper>
                <SliderBorders>2</SliderBorders>
                <StyledSliderWrapper>
                  <SliderHandleWrap ref={sliderHandleWrapRef}>
                    <SliderCount>{sliderValue}</SliderCount>
                    <SliderHandle />
                  </SliderHandleWrap>
                  <StyledSlider ref={sliderRef}>
                    <SliderBar ref={sliderBarRef} />
                  </StyledSlider>
                </StyledSliderWrapper>
                <SliderBorders>5</SliderBorders>
              </SliderWrapper>
            </CalculatorSectionSlider>
            <CalculatorSectionFlex>
              <CalculatorSection>
                <CalculatorSectionTitle>
                  {t('calculator.bonus')}
                </CalculatorSectionTitle>
                <BonusWrap>
                  <BonusBlur />
                  <BonusTextGreen ref={bonusTextRef}>
                    {currency(bonusValue, {
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
                    {currency(totalBonusValue, {
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

const Root = styled.section`
  height: 100vh;
  @media (max-width: 1024px) {
    height: auto;
  }
`;

const StyledContainer = styled(Container)`
  padding-bottom: 20px;
  padding-top: 40px;
`;

const SectionHead = styled.div`
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) and (max-height: 700px) {
    margin-bottom: 40px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
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
  @media (min-width: 1024px) and (max-height: 700px) {
    max-width: 1024px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Calculator = styled.div`
  background: var(--black2);
  border-radius: 50px;
  will-change: transform;
  @media (max-width: 1024px) {
    border-radius: 40px;
  }
`;

const CalculatorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 45px;
  padding: 60px 105px;
  @media (min-width: 1024px) and (max-height: 700px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (max-width: 1200px) {
    padding: 60px;
  }
  @media (max-width: 1024px) {
    padding: 40px;
    gap: 30px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`;

const CalculatorSection = styled.div`
  position: relative;
`;

const CalculatorSectionTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;

  color: var(--white);
  margin-bottom: 33px;
  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 19px;
  }
`;

const CalculatorSectionFlex = styled(CalculatorSection)`
  display: flex;
  ${CalculatorSection} {
    margin-right: 100px;
    &:last-child {
      margin-right: 0;
    }
    @media (max-width: 1024px) {
      margin-right: 50px;
    }
    @media (max-width: 500px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 0;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
      ${CalculatorSectionTitle} {
        margin-bottom: 0;
      }
    }
  }
  @media (max-width: 500px) {
    display: block;
  }
`;

const CalculatorSectionSlider = styled(CalculatorSection)`
  @media (max-width: 768px) {
    order: -1;
  }
`;

const CalculatorSectionPlans = styled(CalculatorSection)`
  @media (max-width: 768px) {
    order: -2;
  }
`;

const CalculatorText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;

  color: var(--white);
  @media (max-width: 900px) {
    font-weight: 400;
  }
`;

const CalculatorSectionTitleMargin = styled(CalculatorSectionTitle)`
  margin-bottom: 52px;
  @media (max-width: 900px) {
    margin-bottom: 40px;
  }
`;

const SubscriptionList = styled.ul`
  display: flex;
  align-items: center;
`;

const SubsriptionCheckboxInner = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  will-change: opacity;
  @media (max-width: 900px) {
    width: 19px;
    height: 19px;
  }
`;

const SubsriptionCheckboxInnerOpacity = styled(SubsriptionCheckboxInner)`
  background-color: rgba(255, 255, 255, 0.2);
`;

const SubsriptionCheckboxInnerGreen = styled(SubsriptionCheckboxInner)`
  background-image: var(--greenGradient);
  z-index: 2;
`;

const SubsriptionCheckbox = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid var(--green);
  position: relative;
  margin-right: 14px;
  border-radius: 50%;

  @media (max-width: 900px) {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }
`;

const SubsriptionItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 100px;
  &:first-child {
    ${SubsriptionCheckboxInnerGreen} {
      opacity: 0;
    }
  }
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1024px) {
    margin-right: 50px;
  }
  @media (max-width: 374px) {
    margin-right: 30px;
  }
`;

const ProfitTitle = styled(CalculatorText)`
  min-width: 75px;
  margin-right: 24px;
  @media (max-width: 768px) {
    margin-right: 18px;
  }
`;

const ProfitSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 374px) {
    display: block;
    ${ProfitTitle} {
      margin-right: 0;
      margin-bottom: 13px;
    }
  }
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
  will-change: opacity;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1024px) {
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    margin-right: 14px;
    ${CalculatorText} {
      font-size: 14px;
      line-height: 19px;
    }
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
  will-change: contents;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.01em;
  }
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
  will-change: contents;
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
  transform: scaleX(0);
  will-change: transform;
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 356px;
  @media (max-width: 1024px) {
    max-width: 300px;
  }
  @media (max-width: 900px) {
    max-width: 250px;
  }
  @media (max-width: 768px) {
    max-width: none;
  }
`;

const SliderBorders = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--white);
`;

export default PartnerProgramm;
