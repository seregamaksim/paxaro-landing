import { Container } from '@/components/Container';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Content: FC = () => {
  const { t } = useTranslation('trial');

  const content: string[] = t('content.texts', { returnObjects: true });

  return (
    <StyledContainer>
      <Wrapper>
        <Title>{t('title')}</Title>
        <div>
          {content.map((text, index) => (
            <Text key={index}>{text}</Text>
          ))}
          <Text>{t('dateLastUpdate')}</Text>
        </div>
      </Wrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Wrapper = styled.div`
  max-width: 952px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 67px;
  color: var(--black2);
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
    letter-spacing: 0.01em;
  }
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;

  color: var(--black1);
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;
export default Content;
