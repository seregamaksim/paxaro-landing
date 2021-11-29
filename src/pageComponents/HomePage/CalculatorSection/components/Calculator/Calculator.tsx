import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { Form, Formik, FormikProps } from 'formik';
import Slider, { Handle, SliderTooltip } from 'rc-slider';
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
import axios, { AxiosResponse, AxiosError } from 'axios';
import { COLORS, API } from '@/constants';
import ClipLoader from 'react-spinners/ClipLoader';
import { isSafari } from 'react-device-detect';

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
  const [isError, setIsError] = useState(false);
  const [dataChart, setDataChart] = useState<ChartValue[]>([]);
  const [cashValue, setCashValue] = useState(5000);
  const [isLoadingData, setIsloadingData] = useState(false);
  const [initiaFormlValue, setInitiaFormlValue] = useState<FormValues>({
    title: 'i30',
    period: '360',
    cash: '5000',
  });

  function requestAndSetChartData(values: FormValues) {
    setIsloadingData(true);
    axios({
      method: 'post',
      url: `${API.baseUrl}/backtest/chart`,
      data: values,
    })
      .then(({ data }: AxiosResponse<ChartValue[]>) => {
        setIsError(false);
        setDataChart(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsloadingData(false);
      });
  }

  const dateDaysOptions = [
    { value: '180', label: t('calculator.halfYear') },
    { value: '360', label: t('calculator.year') },
    { value: '720', label: t('calculator.twoYear') },
    { value: '-1', label: t('calculator.allTime') },
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

  useEffect(() => {
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
            const currentPlanMarksObject = marks[values.title];
            const currentPlanMarksArray = Object.keys(currentPlanMarksObject);

            const bottomBorderSliderValue =
              currentPlanMarksObject[currentPlanMarksArray[0]];

            const upperBorderSliderValue =
              currentPlanMarksObject[
                currentPlanMarksArray[currentPlanMarksArray.length - 1]
              ];

            const lastValueForCurrentDay =
              dataChart.length > 0
                ? dataChart[dataChart.length - 1].profit
                : '';

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
                        {currency(bottomBorderSliderValue, {
                          precision: 0,
                        }).format()}
                      </SliderBorders>
                      <StyledSlider
                        $isSafari={isSafari}
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
                        {currency(upperBorderSliderValue, {
                          separator: '.',
                          precision: 0,
                        }).format()}
                      </SliderBorders>
                    </SliderWrapper>
                  </FullHeadSection>

                  <HeadSection>
                    <MobileSubmitBtn
                      type="submit"
                      text={t('calculator.calculate')}
                      isDisabled={isLoadingData}
                      isLoading={isLoadingData}
                    />
                  </HeadSection>
                </Head>
                <ChartWrap>
                  {isError ? (
                    <ErrorMessageWrap>
                      <ErrorMessage>
                        {t('calculator.errorMessage')}
                      </ErrorMessage>
                    </ErrorMessageWrap>
                  ) : (
                    <>
                      <StyledChart
                        data={dataChart}
                        $isLoading={isLoadingData}
                      />
                      {isLoadingData && (
                        <ChartLoaderWrapper>
                          <ClipLoader size={65} color={COLORS.white} />
                        </ChartLoaderWrapper>
                      )}
                    </>
                  )}
                </ChartWrap>
                <Footer>
                  <ProfitBlock>
                    <ProfitBlockText>
                      {t('calculator.profit')}
                      <span>
                        {currency(lastValueForCurrentDay, {
                          separator: ',',
                          precision: 0,
                        }).format()}
                      </span>
                    </ProfitBlockText>
                  </ProfitBlock>

                  <DesktopSubmitBtn
                    type="submit"
                    text={t('calculator.calculate')}
                    isDisabled={isLoadingData}
                    isLoading={isLoadingData}
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
  background: ${COLORS.black2};
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

  color: ${COLORS.white};
`;

const StyledSlider = styled(Slider)<{ $isSafari: boolean }>`
  margin-left: 12px;
  margin-right: 12px;
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
  color: ${COLORS.white};
`;

const ChartWrap = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  margin-bottom: 40px;
  overflow-y: hidden;
  overflow-x: auto;
  @media (max-width: 768px) {
    height: 330px;
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
      background-color: ${COLORS.green};
      border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${COLORS.white};
    }
    padding-bottom: 30px;
  }
`;

const ErrorMessageWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 350px;
`;

const ErrorMessage = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  letter-spacing: 0.01em;

  color: ${COLORS.white};
`;

const StyledChart = styled(Chart)<{ $isLoading: boolean }>`
  opacity: ${({ $isLoading }) => ($isLoading ? 0.5 : 1)};
`;

const ChartLoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

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
  border: 1px solid ${COLORS.darkGray};
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

  color: ${COLORS.white};
  span {
    color: ${COLORS.green};
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
    width: 100%;
  }
`;

export default Calculator;
