import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC, useEffect, useRef } from 'react';
import { composeInitialProps, Trans, useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

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
      },
    });

    WhyPaxaroTimeline.addLabel('start').to(
      whyPaxaroTitleRef.current,
      {
        xPercent: -100,
        opacity: 0,
        duration: 1,
      },
      'start'
    );
  }, []);

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

const Content = styled.div``;

const ContentTitle = styled.p`
  max-width: 530px;
  font-weight: bold;
  font-size: 72px;
  line-height: 87px;
  color: var(--black2);
  position: absolute;
  left: 6.94%;
  bottom: 15%;
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
  opacity: 0;
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

  color: var(--black2);
`;

const DescriptionCounterTextAbsolute = styled(DescriptionCounterText)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
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
  }
`;

const DescriptionCounterTextsWrapper = styled.div`
  position: relative;
`;

const DescriptionCounterTextWrap = styled.div``;

const DescriptionCounterTextWrapAbsolute = styled(DescriptionCounterTextWrap)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
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

export default WhyPaxaro;
