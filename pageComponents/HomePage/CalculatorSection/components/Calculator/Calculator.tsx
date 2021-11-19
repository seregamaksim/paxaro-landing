import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Form, Formik, FormikProps, useField } from 'formik';
import Slider, { Handle, HandleProps, SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import currency from 'currency.js';
import { useTranslation } from 'react-i18next';
import { Button } from '@/ui/components/Button';
import { Chart } from '../Chart';
import { useIsMounted } from '@/hooks/useIsMounted';
import {
  investmentsAmountOptions,
  marks,
  portfolioTypeOptions,
} from './staticData';

import axios, { AxiosResponse } from 'axios';
import { baseUrl } from '@/constants';

const SelectUiNoSSR = dynamic(
  () => import('@/ui/components/SelectUI/SelectUI'),
  {
    ssr: false,
  }
);

interface CalculatorProps {
  className?: string;
}

interface FormValues {
  title: string;
  period: string | number;
  cash: string | number;
}

export interface ChartValue {
  date: string;
  profit: number;
}

const Calculator: FC<CalculatorProps> = ({ className }) => {
  const isMounted = useIsMounted();
  const { t } = useTranslation('calculator');
  const [dataChart, setDataChart] = useState<ChartValue[]>([]);
  const [cashValue, setCashValue] = useState(5000);
  const [initiaFormlValue, setInitiaFormlValue] = useState<FormValues>({
    title: 'i30',
    period: '360',
    cash: '5000',
  });

  function requestAndSetChartData(values: FormValues) {
    axios({
      method: 'post',
      url: `${baseUrl}/backtest/chart`,
      data: values,
    }).then(({ data }: AxiosResponse<ChartValue[]>) => {
      setDataChart(data);
    });
  }

  const dateDaysOptions = [
    { value: '30', label: t('calculator.month') },
    { value: '180', label: t('calculator.halfYear') },
    { value: '360', label: t('calculator.year') },
  ];

  function handleSubmit(values: FormValues) {
    const currentValues = {
      ...values,
      period: Number(values.period),
    };

    currentValues.cash = innerWidth > 768 ? cashValue : Number(values.cash);

    requestAndSetChartData(currentValues);
  }

  const handleSliderRangeChange = (props: any, type: string) => {
    const { value, dragging, index, ...restProps } = props;
    const formatedValue = currency(marks[type][value], {
      separator: '.',
      precision: 0,
    }).format();

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={formatedValue}
        visible={true}
        placement="bottom"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };

  function onChange(e: number, type: string) {
    setCashValue(Number(marks[type][e]));
  }

  function getInitialValues() {
    if (innerWidth > 768) {
      return {
        title: 'i30',
        period: '360',
        cash: '5000',
      };
    } else {
      return {
        title: 'i30',
        period: '360',
        cash: '5000',
      };
    }
  }

  useEffect(() => {
    setInitiaFormlValue(getInitialValues());
    requestAndSetChartData({
      title: 'i30',
      period: 360,
      cash: 5000,
    });
  }, []);

  return (
    <Root className={className}>
      <Wrapper>
        <Formik initialValues={initiaFormlValue} onSubmit={handleSubmit}>
          {({ values }: FormikProps<FormValues>) => {
            return (
              <Form>
                <Head>
                  <HeadSection>
                    <HeadLabel>{t('calculator.index')}</HeadLabel>
                    <SelectUiNoSSR
                      name="title"
                      options={portfolioTypeOptions}
                      id="title"
                    />
                  </HeadSection>
                  <HeadSection>
                    <HeadLabel>{t('calculator.period')}</HeadLabel>
                    <SelectUiNoSSR
                      name="period"
                      options={dateDaysOptions}
                      id="period"
                    />
                  </HeadSection>

                  <CashSelectSection>
                    <HeadLabel>{t('calculator.investmentsAmount')}</HeadLabel>
                    <SelectUiNoSSR
                      name="cash"
                      options={investmentsAmountOptions[values.title]}
                      id="cash"
                    />
                  </CashSelectSection>

                  <FullHeadSection>
                    <HeadLabel>{t('calculator.investmentsAmount')}</HeadLabel>
                    <SliderWrapper>
                      <SliderBorders>
                        {currency(
                          marks[values.title][
                            Object.keys(marks[values.title])[0]
                          ],
                          {
                            precision: 0,
                          }
                        ).format()}
                      </SliderBorders>
                      <StyledSlider
                        marks={marks[values.title]}
                        defaultValue={14}
                        step={null}
                        onChange={(e) => {
                          onChange(e, values.title);
                        }}
                        handle={(e) =>
                          isMounted ? (
                            handleSliderRangeChange(e, values.title)
                          ) : (
                            <div></div>
                          )
                        }
                      />
                      <SliderBorders>
                        {currency(
                          marks[values.title][
                            Object.keys(marks[values.title])[
                              Object.keys(marks[values.title]).length - 1
                            ]
                          ],
                          {
                            separator: '.',
                            precision: 0,
                          }
                        ).format()}
                      </SliderBorders>
                    </SliderWrapper>
                  </FullHeadSection>

                  <HeadSection>
                    <MobileSubmitBtn
                      type="submit"
                      text={t('calculator.calculate')}
                    />
                  </HeadSection>
                </Head>
                <ChartWrap>
                  <StyledChart data={dataChart} />
                </ChartWrap>
                <Footer>
                  <ProfitBlock>
                    <ProfitBlockText>
                      {t('calculator.profit')}
                      <span>$1,199</span>
                    </ProfitBlockText>
                  </ProfitBlock>
                  <DesktopSubmitBtn
                    type="submit"
                    text={t('calculator.calculate')}
                  />
                </Footer>
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
    </Root>
  );
};

const Root = styled.div`
  background: var(--black2);
  border-radius: 50px;
  @media (max-width: 768px) {
    border-radius: 24px;
  }
`;

const Wrapper = styled.div`
  padding: 40px 60px;

  @media (max-width: 1024px) {
    padding: 30px;
  }
  @media (max-width: 768px) {
    padding: 30px 12px 12px 12px;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    align-items: flex-end;
  }
`;

const HeadSection = styled.div`
  min-width: 150px;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1024px) {
    width: 50%;
    min-width: auto;

    margin-right: 0;
    &:first-child {
      margin-right: 15px;
      width: calc(50% - 15px);
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 0;
    &:first-child {
      width: 100%;
    }
  }
`;

const FullHeadSection = styled(HeadSection)`
  width: 100%;
  max-width: 440px;
  display: none;
  @media (max-width: 1024px) {
    max-width: none;
    margin-top: 20px;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

const CashSelectSection = styled(HeadSection)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const HeadLabel = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;

  margin-bottom: 12px;

  color: var(--white);
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

const ChartWrap = styled.div`
  margin-bottom: 40px;
  overflow-y: hidden;
  overflow-x: auto;
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      -webkit-appearance: none;
      -webkit-overflow-scrolling: auto;
    }

    ::-webkit-scrollbar:vertical {
      width: 3px;
    }

    ::-webkit-scrollbar:horizontal {
      height: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--green);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #ffffff;
    }
    padding-bottom: 20px;
  }
`;

const StyledChart = styled(Chart)``;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ProfitBlock = styled.div`
  padding: 10px 20px;
  border: 1px solid var(--darkGray);
  border-radius: 10px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProfitBlockText = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;

  color: var(--white);
  span {
    color: var(--green);
    margin-left: 24px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
    span {
      font-size: 24px;
      line-height: 34px;
      margin-left: 14px;
    }
  }
`;

const StyledButton = styled(Button)`
  font-size: 18px;
  line-height: 25px;
  padding-top: 11px;
  padding-bottom: 11px;
`;

const DesktopSubmitBtn = styled(StyledButton)`
  display: block;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileSubmitBtn = styled(StyledButton)`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
export default Calculator;
