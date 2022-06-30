import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { useIntersection } from '@/hooks/useIntersection';
import { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Plan } from './Plan';
import { LINKS } from '@/constants';

const PlansSection: FC = () => {
  const { t } = useTranslation('plans');
  const rootId = 'subscription';
  const rootRef = useRef<HTMLElement>(null);

  useIntersection(rootRef, rootId);

  const data = {
    advanced: [
      { text: 'Ребалансировка' },
      { text: 'Базовая стратегия ведения портфеля' },
      { text: '5 реферальных уровней' },
      {
        text: "В подарок базовый курс стоимостью $150 от <span data-block-id='education'>Paxaro Education</span>",
      },
      { text: 'i30 - index' },
      { text: 'i50 - index' },
      { text: 'i100 - index' },
      { text: 'Кастомизированный index iCustom' },
      { text: 'Привилегия участия в новых продуктах платформы' },
      { text: 'Возможность настройки базовых индексов' },
    ],
    prime: [
      { text: 'Ребалансировка' },
      { text: 'Базовая стратегия ведения портфеля' },
      { text: 'i30 - index' },
      { text: '3 реферальных уровня' },
      {
        text: "Специальный раздел обучения <span data-block-id='education'>Paxaro Education</span>",
      },
    ],
  };

  return (
    <section ref={rootRef} id={rootId}>
      <StyledContainer>
        <SectionHead>
          <StyledLabel text="Предложения" />
          <SectionTitle text="Пакеты подписки" />
        </SectionHead>
        <StyledPlan
          title="Advanced"
          price="1200"
          hrefLink={LINKS.advancedPlanLink}
          data={data.advanced}
          countRows={5}
        />
        <StyledPlan
          title="Prime"
          price="740"
          hrefLink={LINKS.primePlanLink}
          data={data.prime}
          countRows={3}
        />
      </StyledContainer>
    </section>
  );
};

const StyledContainer = styled(Container)`
  padding-top: 40px;
  padding-bottom: 100px;
  @media (max-width: 1024px) {
    padding-bottom: 60px;
  }
`;

const SectionHead = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const StyledPlan = styled(Plan)`
  margin-bottom: 80px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export default PlansSection;
