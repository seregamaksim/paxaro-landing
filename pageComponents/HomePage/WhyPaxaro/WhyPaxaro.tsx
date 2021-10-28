import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef } from 'react';
import { composeInitialProps, Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const WhyPaxaro: FC = () => {
  const { t } = useTranslation('whyPaxaro');
  const mainRef = useRef(null);
  const whyPaxaroTitleRef = useRef(null);
  const desciptionBlockRef = useRef(null);
  const counterFirstNumberRef = useRef(null);
  const counterSecondNumberRef = useRef(null);
  const counterLineBarRef = useRef(null);
  const descriptionTextWrapFirstRef = useRef(null);
  const descriptionTextWrapSecondRef = useRef(null);
  const secondDescriptionBlockRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const WhyPaxaroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: 'top top',
        end: () => `+=${mainRef.current?.offsetHeight * 3}`,
        pin: true,
        scrub: 1,
        markers: true,
        snap: 'labels',
      },
    });

    WhyPaxaroTimeline.addLabel('start')
      .to(
        whyPaxaroTitleRef.current,
        {
          x: -100,
          opacity: 0,
          duration: 0.3,
        },
        0
      )
      .from(
        desciptionBlockRef.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        '>-0.1'
      )
      .addLabel('showDescriptionBlock')
      .to(
        [counterFirstNumberRef.current, descriptionTextWrapFirstRef.current],
        {
          opacity: 0,
          duration: 0.1,
        },
        'showDescriptionBlock'
      )
      .to(
        counterLineBarRef.current,
        {
          x: 35,
          duration: 0.1,
        },
        'showDescriptionBlock'
      )
      .from(
        [counterSecondNumberRef.current, descriptionTextWrapSecondRef.current],
        {
          opacity: 0,
          duration: 0.1,
        },
        'showDescriptionBlock'
      )
      .addLabel('showSecondDescription')
      .to(
        desciptionBlockRef.current,
        {
          opacity: 0,
          duration: 0.3,
        },
        'showSecondDescription+=0.5'
      )
      .from(
        secondDescriptionBlockRef.current,
        {
          opacity: 0,
          duration: 0.3,
          y: 30,
        },
        '>'
      )
      .addLabel('showSecondDescriptionBlockRef');
  });

  return (
    <Root ref={mainRef}>
      <StyledContainer>
        <SectionHead>
          <StyledSectionLabel text={t('label')} />
          <StyledSectionTitle text={t('title')} />
        </SectionHead>

        <Content>
          <ContentTitle ref={whyPaxaroTitleRef}>
            <Trans t={t} i18nKey="whyPaxaro">
              <span>Почему именно</span>
              <br /> Paxaro App?
            </Trans>
          </ContentTitle>
          <DescriptionsWrapper ref={desciptionBlockRef}>
            <DescriptionsCounter>
              <DescriptionCounterNumbersWrap>
                <DescriptionCounterText ref={counterFirstNumberRef}>
                  1
                </DescriptionCounterText>
                <DescriptionCounterTextAbsolute ref={counterSecondNumberRef}>
                  2
                </DescriptionCounterTextAbsolute>
              </DescriptionCounterNumbersWrap>
              <DescriptionCounterLineWrap>
                <span ref={counterLineBarRef}></span>
              </DescriptionCounterLineWrap>
            </DescriptionsCounter>
            <DescriptionCounterTextsWrapper>
              <DescriptionCounterTextWrap ref={descriptionTextWrapFirstRef}>
                <DescriptionText>{t('description1.text1')}</DescriptionText>
                <DescriptionText>{t('description1.text2')}</DescriptionText>
              </DescriptionCounterTextWrap>
              <DescriptionCounterTextWrapAbsolute
                ref={descriptionTextWrapSecondRef}
              >
                <DescriptionText>{t('description2.text1')}</DescriptionText>
              </DescriptionCounterTextWrapAbsolute>
            </DescriptionCounterTextsWrapper>
          </DescriptionsWrapper>
          <SecondDescriptionBlockRef ref={secondDescriptionBlockRef}>
            <DescriptionText>{t('description3.text1')}</DescriptionText>
          </SecondDescriptionBlockRef>
        </Content>
      </StyledContainer>
    </Root>
  );
};
const Root = styled.section`
  height: 100vh;
`;
const StyledContainer = styled(Container)`
  padding-top: 86px;
  position: relative;
  height: 100%auto;
`;

const SectionHead = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledSectionLabel = styled(SectionLabel)`
  margin-bottom: 15px;
`;

const StyledSectionTitle = styled(SectionTitle)`
  max-width: 454px;
`;

const Content = styled.div`
  position: relative;
`;

const ContentTitle = styled.p`
  max-width: 530px;
  font-weight: bold;
  font-size: 72px;
  line-height: 87px;
  color: var(--black2);
  position: absolute;
  z-index: 1;
  left: 6.94%;
  bottom: 15%;
  will-change: transform, opacity;
  span {
    color: #bdbdbd;
  }
`;

const DescriptionsWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 500px;
  padding: 120px 50px 80px 50px;
  background: var(--white);
  box-shadow: 0px 6px 36px rgba(104, 104, 104, 0.08);
  border-radius: 40px;
  will-change: opacity;
  /* opacity: 0; */
`;

const DescriptionsCounter = styled.div`
  margin-bottom: 40px;
`;

const DescriptionCounterNumbersWrap = styled.div`
  position: relative;
  margin-left: 12px;
  margin-bottom: 8px;
`;

const DescriptionCounterText = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  letter-spacing: 0.01em;
  will-change: opacity;
  color: var(--black2);
`;

const DescriptionCounterTextAbsolute = styled(DescriptionCounterText)`
  position: absolute;
  top: 0;
  left: 0;
`;

const DescriptionCounterLineWrap = styled.div`
  width: 70px;
  height: 2px;
  background-color: #c0c0c0;

  position: relative;
  span {
    display: inline-block;
    position: absolute;
    height: 100%;
    width: 50%;
    left: 0;
    top: 0;
    background-color: var(--green);
    will-change: transform;
  }
`;

const DescriptionCounterTextsWrapper = styled.div`
  position: relative;
`;

const DescriptionCounterTextWrap = styled.div`
  will-change: opacity;
`;

const DescriptionCounterTextWrapAbsolute = styled(DescriptionCounterTextWrap)`
  position: absolute;
  top: 0;
  left: 0;
`;

const DescriptionText = styled.p`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;

  color: var(--black2);
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SecondDescriptionBlockRef = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 720px;
  padding: 58px 35px;
  background: var(--white);
  box-shadow: 0px 6px 36px rgba(104, 104, 104, 0.08);
  border-radius: 40px;
  will-change: transform, opacity;
  & ${DescriptionText} {
    font-weight: 600;
    text-align: center;
  }
`;
export default WhyPaxaro;
