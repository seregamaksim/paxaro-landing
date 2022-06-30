import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { LeadForm } from './LeadForm';
import { COLORS } from '@/constants';

const LeadFormSection: FC = () => {
  return (
    <section>
      <LeadFormContainer>
        <LeadFormHead>
          <LeadFormHeadLabel text="Обратная связь" />
          <LeadFormTitle text="Начните инвестировать с Paxaro App" />
          <LeadFormSubtitle>
            Заполните короткую форму и мы с вами свяжемся.
          </LeadFormSubtitle>
        </LeadFormHead>

        <LeadFormWrap>
          <LeadForm />
        </LeadFormWrap>
      </LeadFormContainer>
    </section>
  );
};

const LeadFormContainer = styled(Container)`
  padding-top: 118px;
  padding-bottom: 130px;
  @media (max-width: 1024px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (max-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const LeadFormHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const LeadFormHeadLabel = styled(SectionLabel)`
  margin-bottom: 12px;
  @media (max-width: 768px) {
    margin-bottom: 18px;
  }
`;

const LeadFormTitle = styled(SectionTitle)`
  margin-bottom: 18px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const LeadFormSubtitle = styled.p`
  font-size: 18px;
  line-height: 25px;

  letter-spacing: 0.01em;

  color: ${COLORS.black2};
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const LeadFormWrap = styled.div`
  max-width: 1030px;
  margin: 0 auto;
`;

export default LeadFormSection;
