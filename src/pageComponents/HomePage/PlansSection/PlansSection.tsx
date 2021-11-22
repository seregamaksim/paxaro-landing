import { Container } from '@/components/Container';
import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';

import { useIntersection } from '@/hooks/useIntersection';
import { FC, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Plan } from './Plan';
import { LINKS } from '@/constants';
import { COLORS } from '@/constants';

const PlansSection: FC = () => {
  const { t } = useTranslation('plans');
  const rootId = 'subscription';
  const rootRef = useRef<HTMLElement>(null);

  useIntersection(rootRef, rootId);

  const data = {
    advanced: [
      { text: t('advanced.item1') },
      { text: t('advanced.item2') },
      { text: t('advanced.item3') },
      { text: t('advanced.item4') },
      { text: t('advanced.item5') },
      { text: t('advanced.item6') },
      { text: t('advanced.item7') },
      { text: t('advanced.item8') },
      { text: t('advanced.item9') },
      { text: t('advanced.item10') },
    ],
    prime: [
      { text: t('prime.item1') },
      { text: t('prime.item2') },
      { text: t('prime.item3') },
      { text: t('prime.item4') },
      { text: t('prime.item5') },
    ],
  };

  return (
    <section ref={rootRef} id={rootId}>
      <StyledContainer>
        <SectionHead>
          <StyledLabel text={t('label')} />
          <SectionTitle text={t('title')} />
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
