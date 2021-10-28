import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Calculator } from './components/Calculator';

const CalculatorSection: FC = () => {
  const { t } = useTranslation('calculator');
  return (
    <section>
      <StyledContainer>
        <SectionHead>
          <StyledSectionTitle text={t('title')} />

          <SectionSubtitle>{t('subTitle')}</SectionSubtitle>
        </SectionHead>
        <Calculator />
      </StyledContainer>
    </section>
  );
};

const StyledContainer = styled(Container)`
  padding-top: 40px;
`;

const SectionHead = styled.div`
  margin-bottom: 48px;
`;

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 18px;
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: var(--black2);
  max-width: 440px;
`;

export default CalculatorSection;
