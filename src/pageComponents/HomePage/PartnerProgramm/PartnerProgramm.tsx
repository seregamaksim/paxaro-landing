import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import currency from 'currency.js';
import { COLORS } from '@/constants';
import Slider, { Handle, SliderTooltip } from 'rc-slider';
import { useIsMounted } from '@/hooks/useIsMounted';

interface PartnerProgrammProps {
  isSafari: boolean;
}

const sumsByPlan: { [key: string]: any } = {
  prime: {
    0: 479.6,
    33: 719.4,
    66: 959.2,
    100: 1199,
  },
  advanced: {
    0: 479.6,
    33: 719.4,
    66: 959.2,
    100: 1199,
  },
};

const totalSumsByPlan: { [key: string]: any } = {
  prime: {
    0: 1630.6,
    33: 4064.6,
    66: 8249.1,
    100: 14687.8,
  },
  advanced: {
    0: 3740.88,
    33: 17661.27,
    66: 60429.6,
    100: 164562.75,
  },
};

const marks: { [key: string]: any } = {
  0: 2,
  33: 3,
  66: 4,
  100: 5,
};

const PartnerProgramm: FC<PartnerProgrammProps> = ({ isSafari }) => {
  const isMounted = useIsMounted();
  const rootRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const bonusTextRef = useRef<HTMLParagraphElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const [isCheckedPrime, setIsCheckedPrime] = useState(true);
  const [isCheckedAdvanced, setIsCheckedAdvanced] = useState(!isCheckedPrime);
  const [sliderValue, setSliderValue] = useState(0);
  const [bonusValue, setBonusValue] = useState(479.6);
  const [totalBonusValue, setTotalBonusValue] = useState(1630.6);

  const handleSliderRangeChange = (props: any) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={marks[value]}
        visible={true}
        placement="top"
        key={index}
        overlayInnerStyle={{
          display: 'block',
          fontWeight: 600,
          color: COLORS.green,
        }}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  const changeSlider = (e: number) => {
    setSliderValue(e);
    if (isCheckedPrime) {
      setBonusValue(sumsByPlan.prime[e]);
      setTotalBonusValue(totalSumsByPlan.prime[e]);
    } else {
      setBonusValue(sumsByPlan.advanced[e]);
      setTotalBonusValue(totalSumsByPlan.advanced[e]);
    }
  };

  return (
    <section ref={rootRef}>
      <StyledContainer>
        <SectionHead ref={headRef}>
          <StyledSectionLabel text="Партнерская программа" />
          <StyledSectionTitle text="Приглашайте друзей и получайте бонусы" />
          <Subtitle>
            Всего есть 5 реферальных уровней — вы получаете процент с каждого
            приведенного друга, а также с их друзей. Размер вознаграждения
            зависит от вашего плана подписки и количества приглашенных
            пользователей.
          </Subtitle>
        </SectionHead>

        <Calculator ref={calculatorRef}>
          <CalculatorWrapper>
            <CalculatorSectionPlans>
              <CalculatorSectionTitle>Ваш план подписки</CalculatorSectionTitle>
              <SubscriptionList>
                <CheckboxWrapper>
                  <SubsriptionCheckbox
                    name="subscription-plan"
                    checked={isCheckedPrime}
                    id="checkbox-prime"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setIsCheckedPrime(true);
                        setIsCheckedAdvanced(false);
                        setBonusValue(sumsByPlan.prime[sliderValue]);
                        setTotalBonusValue(totalSumsByPlan.prime[sliderValue]);
                      } else {
                        setIsCheckedPrime(false);
                        setIsCheckedAdvanced(true);
                        setBonusValue(sumsByPlan.advanced[sliderValue]);
                        setTotalBonusValue(
                          totalSumsByPlan.advanced[sliderValue]
                        );
                      }
                    }}
                  />

                  <SubsriptionItem htmlFor="checkbox-prime">
                    <CalculatorText>Prime</CalculatorText>
                  </SubsriptionItem>
                </CheckboxWrapper>
                <CheckboxWrapper>
                  <SubsriptionCheckbox
                    name="subscription-plan"
                    checked={isCheckedAdvanced}
                    id="checkbox-advanced"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setIsCheckedAdvanced(true);
                        setIsCheckedPrime(false);
                        setBonusValue(sumsByPlan.advanced[sliderValue]);
                        setTotalBonusValue(
                          totalSumsByPlan.advanced[sliderValue]
                        );
                      } else {
                        setIsCheckedAdvanced(false);
                        setIsCheckedPrime(true);
                        setBonusValue(sumsByPlan.prime[sliderValue]);
                        setTotalBonusValue(totalSumsByPlan.prime[sliderValue]);
                      }
                    }}
                  />

                  <SubsriptionItem htmlFor="checkbox-advanced">
                    <CalculatorText>Advanced</CalculatorText>
                  </SubsriptionItem>
                </CheckboxWrapper>
              </SubscriptionList>
            </CalculatorSectionPlans>

            <CalculatorSectionSlider>
              <CalculatorSectionTitleMargin>
                Количество друзей
              </CalculatorSectionTitleMargin>
              <SliderWrapper>
                <SliderBorders>2</SliderBorders>
                <StyledSlider
                  $isSafari={isSafari}
                  marks={marks}
                  defaultValue={0}
                  step={null}
                  onChange={changeSlider}
                  handle={(e) =>
                    isMounted ? handleSliderRangeChange(e) : <div></div>
                  }
                />
                <SliderBorders>5</SliderBorders>
              </SliderWrapper>
            </CalculatorSectionSlider>
            <CalculatorSectionFlex>
              <CalculatorSection>
                <CalculatorSectionTitle>Ваш бонус</CalculatorSectionTitle>
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
                <CalculatorSectionTitle>Общий бонус</CalculatorSectionTitle>
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
    </section>
  );
};

const StyledContainer = styled(Container)`
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
  color: ${COLORS.black2};
  @media (min-width: 1024px) and (max-height: 700px) {
    max-width: 1024px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Calculator = styled.div`
  background: ${COLORS.black2};
  border-radius: 50px;
  will-change: transform;
  @media (max-width: 1024px) {
    border-radius: 40px;
  }
  @media (max-width: 768px) {
    .rc-slider-tooltip-inner {
      display: block;
    }
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
    gap: 0;
  }
  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`;

const CalculatorSection = styled.div`
  position: relative;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CalculatorSectionTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;

  color: ${COLORS.white};
  margin-bottom: 33px;
  @media (max-width: 900px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 19px;
  }
`;

const CalculatorSectionFlex = styled(CalculatorSection)`
  display: flex;
  grid-column: 1/-1;
  ${CalculatorSection} {
    display: flex;
    align-items: center;
    margin-right: 110px;
    margin-bottom: 0;
    ${CalculatorSectionTitle} {
      margin-bottom: 0;
      margin-right: 30px;
    }
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

  color: ${COLORS.white};
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

const SubscriptionList = styled.div`
  display: flex;
  align-items: center;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
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

const SubsriptionItem = styled.label`
  position: relative;
  padding-left: 44px;

  ::before,
  ::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
  ::before {
    width: 30px;
    height: 30px;
    border: 1px solid ${COLORS.green};
    left: 0;
  }
  ::after {
    width: 24px;
    height: 24px;
    background-color: rgba(255, 255, 255, 0.2);
    left: 3px;
  }

  @media (max-width: 900px) {
    padding-left: 36px;
    ::before {
      width: 24px;
      height: 24px;
    }
    ::after {
      width: 18px;
      height: 18px;
    }
  }
`;

const SubsriptionCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  &:checked + ${SubsriptionItem} {
    ::after {
      background-image: ${COLORS.greenGradient};
    }
  }
`;

const BonusWrap = styled.div`
  position: relative;
`;

const BonusBlur = styled.div`
  position: absolute;
  width: 75px;
  height: 34px;
  background: ${COLORS.green};
  filter: blur(88px);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const BonusText = styled.p`
  font-weight: bold;
  font-size: 36px;
  line-height: 50px;
  color: ${COLORS.white};
  position: relative;
  will-change: contents;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.01em;
  }
`;

const BonusTextGreen = styled(BonusText)`
  color: ${COLORS.green};
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
  color: ${COLORS.white};
`;

const StyledSlider = styled(Slider)<{ $isSafari: boolean }>`
  margin-left: 20px;
  margin-right: 20px;
  .rc-slider-rail {
    background-color: ${COLORS.darkGray};
  }

  .rc-slider-track {
    background-color: ${COLORS.green};
  }
  .rc-slider-handle {
    width: 24px;
    height: 24px;
    margin-top: -12px;
    border-width: 3px;
    border-color: ${COLORS.black2};
    background-image: ${COLORS.greenGradient};
    border-radius: 50%;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: ${COLORS.greenGradient};
      filter: ${({ $isSafari }) => ($isSafari ? 'none' : 'blur(18px)')};
      border-radius: 50%;
    }
  }

  .rc-slider-dot,
  .rc-slider-mark {
    display: none;
  }
`;

export default PartnerProgramm;
