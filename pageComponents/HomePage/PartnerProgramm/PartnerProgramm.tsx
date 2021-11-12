import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import currency from 'currency.js';
import Slider, { Handle, SliderTooltip } from 'rc-slider';
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
  const isMounted = useIsMounted();
  const rootRef = useRef<HTMLElement>(null);
  const bonusTextRef = useRef<HTMLParagraphElement>(null);
  const [bonus, setBonus] = useState({
    value: 0,
  });

  const handle = (props: any) => {
    const { value, dragging, index, ...restProps } = props;
    const formatedValue = marks[value];

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={formatedValue}
        visible={true}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  useEffect(() => {
    const target = {
      value: bonus.value,
    };
    const partnerProgrammTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: rootRef.current,
        start: 'top top',
        end: () => (innerWidth > 768 ? '+=3000' : '+=2000'),
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
    partnerProgrammTimeline.addLabel('start').to(target, {
      duration: 3,
      value: '+=1236',
      roundProps: 'value',
      onUpdate() {
        setBonus({ value: target.value });
      },
    });
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
                  <ProfitItem>
                    <CalculatorText>4</CalculatorText>
                  </ProfitItem>
                  <ProfitItem>
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
                  <ProfitItemWithoutBorder>
                    <CalculatorText>256</CalculatorText>
                  </ProfitItemWithoutBorder>
                  <ProfitItemWithoutBorder>
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
                <StyledSlider
                  marks={marks[0]}
                  step={null}
                  onChange={(e) => {
                    return;
                  }}
                  handle={(e) => (isMounted ? handle(e) : <div></div>)}
                />
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
                    {currency(374562, {
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

const StyledSlider = styled(Slider)`
  margin-left: 12px;
  margin-right: 12px;
  .rc-slider-rail {
    background-color: var(--darkGray);
  }

  .rc-slider-track {
    background-color: var(--green);
  }
  .rc-slider-handle {
    width: 24px;
    height: 24px;
    margin-top: -12px;
    border-width: 3px;
    border-color: var(--black2);
    background-image: var(--greenGradient);
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: var(--greenGradient);
      filter: blur(18px);
    }
  }
  .rc-slider-dot,
  .rc-slider-mark {
    display: none;
  }
`;

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SliderBorders = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--white);
`;

export default PartnerProgramm;
