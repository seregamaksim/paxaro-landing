import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import mockup from '@/assets/images/mockup-notebook.png';
import Image from 'next/image';
import { InfoLink } from './components';

const Education: FC = () => {
  const { t } = useTranslation('education');

  return (
    <Root>
      <SectionHead>
        <StyledLabel text={t('label')} isDark />
        <StyledTitle text={t('title')} />
      </SectionHead>

      <SectionContent>
        <DescriptionWrapper>
          <DescriptionSection1>
            <DescriptionLabel text={t('descriptionLabel')} />
            <DescriptionText>{t('descriptionText1')}</DescriptionText>
          </DescriptionSection1>
          <DescriptionSection2>
            <DescriptionText>{t('descriptionText2')}</DescriptionText>
          </DescriptionSection2>
        </DescriptionWrapper>
        <NotebookWrapper>
          <DesktopVideo>
            <source src="/videos/education-desktop.mp4" />
            <source src="/videos/education-desktop.webm" />
          </DesktopVideo>
          <InfoLinkWrapper>
            <StyledInfoLink />
          </InfoLinkWrapper>
          <NotebookImageWrapper>
            <Image src={mockup} alt="Mackbook Pro" />
          </NotebookImageWrapper>
        </NotebookWrapper>
      </SectionContent>
    </Root>
  );
};

const Root = styled.section`
  background-color: var(--black1);
  height: 100vh;
  overflow: hidden;
`;

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  padding-top: 120px;
`;

const StyledLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const StyledTitle = styled(SectionTitle)`
  color: var(--white);
`;

const SectionContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  /* padding-left: 100px; */
`;

const NotebookWrapper = styled.div`
  position: relative;
  transform: translateX(100px) scale(0.4375);
  transform-origin: top left;
  overflow: hidden;
  /* width: 630px; */
`;

const NotebookImageWrapper = styled.div`
  position: relative;
`;

const DesktopVideo = styled.video.attrs(() => ({
  muted: true,
  controls: false,
}))`
  transform: scale(0.758);
  transform-origin: top;
  position: absolute;
  top: 75px;
  /* top: 40px; */
`;

const DescriptionWrapper = styled.div`
  position: absolute;
  max-width: 400px;
  top: 50px;
  right: 200px;
  /* transform: translateY(-50%); */
`;

const DescriptionSection = styled.div`
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const DescriptionSection1 = styled(DescriptionSection)``;

const DescriptionSection2 = styled(DescriptionSection)``;

const DescriptionLabel = styled(SectionLabel)`
  background-color: #168665;
  margin-bottom: 24px;
  color: var(--white);
`;

const DescriptionText = styled.p`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--white);
`;

const InfoLinkWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.758) translateY(100%);
  display: flex;
  align-items: center;
`;

const StyledInfoLink = styled(InfoLink)`
  width: 100%;
`;

export default Education;
