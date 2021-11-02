import { SectionLabel } from '@/components/SectionLabel';
import { SectionTitle } from '@/components/SectionTitle';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Education: FC = () => {
  const { t } = useTranslation('education');
  return (
    <Root>
      <SectionHead>
        <StyledLabel text={t('label')} isDark />
        <StyledTitle text={t('title')} />
      </SectionHead>
    </Root>
  );
};

const Root = styled.section`
  background-color: var(--black1);
`;

const SectionHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const StyledLabel = styled(SectionLabel)`
  margin-bottom: 12px;
`;

const StyledTitle = styled(SectionTitle)`
  color: var(--white);
`;

export default Education;
