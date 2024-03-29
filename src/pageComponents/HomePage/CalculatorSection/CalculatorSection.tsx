import { Container } from '@/components/Container';
import { SectionTitle } from '@/components/SectionTitle';
import { COLORS } from '@/constants';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Calculator } from './components/Calculator';

interface CalculatorSectionProps {
  isSafari: boolean;
}

const CalculatorSection: FC<CalculatorSectionProps> = ({ isSafari }) => {
  return (
    <section>
      <StyledContainer>
        <SectionHead>
          <StyledSectionTitle text="Расчет вероятной прибыли" />
          <SectionSubtitle>
            Узнайте, сколько вы могли заработать, если бы начали пользоваться
            Paxaro App раньше
          </SectionSubtitle>
        </SectionHead>
        <Calculator isSafari={isSafari} />
      </StyledContainer>
    </section>
  );
};

const StyledContainer = styled(Container)`
  padding-top: 40px;
  @media (min-width: 320px) and (max-width: 768px) and (max-height: 700px) {
    padding-top: 90px;
  }
`;

const SectionHead = styled.div`
  margin-bottom: 48px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const StyledSectionTitle = styled(SectionTitle)`
  margin-bottom: 18px;
  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: ${COLORS.black2};
  max-width: 440px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export default CalculatorSection;
