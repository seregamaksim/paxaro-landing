import { Container } from '@/components/Container';
import { COLORS } from '@/constants';
import { getSplitString } from '@/helpers/getSplitString';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface SectionContent {
  title?: string;
  texts: string[];
}

interface ContentProps {
  translateName: string;
}

const Content: FC<ContentProps> = ({ translateName }) => {
  const { t } = useTranslation(translateName);
  const content: SectionContent[] = t('content', { returnObjects: true });

  return (
    <StyledContainer>
      <Wrapper>
        <Title>{t('title')}</Title>
        <div>
          {content.map((section, index) => {
            return (
              <ContentSection key={index}>
                {section.title && <SectionTitle>{section.title}</SectionTitle>}

                {section.texts.map((text, index) => (
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: getSplitString(text, ';'),
                    }}
                    key={index}
                  />
                ))}
              </ContentSection>
            );
          })}
          <Text>{t('dateLastUpdate')}</Text>
        </div>
      </Wrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  max-width: 952px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
  line-height: 67px;
  color: ${COLORS.black2};
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

  color: ${COLORS.black1};
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContentSection = styled.div`
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled(Text)`
  font-weight: bold;
  text-transform: uppercase;
`;

export default Content;
