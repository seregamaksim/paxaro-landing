import { Container } from '@/components/Container';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface ISectionContent {
  title?: string;
  texts: string[];
}

function splitString(stringToSplit: string, separator: string) {
  var arrayOfStrings = stringToSplit.split(separator);
  if (arrayOfStrings.length > 1) {
    return arrayOfStrings.map((text) => `${text}<br/>`).join(' ');
  } else {
    return arrayOfStrings.map((text) => text).join(' ');
  }
}

const Content: FC = () => {
  const { t } = useTranslation('privacyPolicy');
  const content: ISectionContent[] = t('content', { returnObjects: true });
  const testText =
    'i. обладает всеми необходимыми правами, позволяющими ему осуществлять регистрацию и использовать настоящий Сайт и соответствующие услуги; ii. указывает достоверную информацию о себе в объемах, необходимых для пользования Сайтом.';
  return (
    <StyledContainer>
      <Wrapper>
        <Title>{t('title')}</Title>
        <div>
          <Text
            dangerouslySetInnerHTML={{ __html: splitString(testText, ';') }}
          ></Text>
          {content.map((section, index) => {
            return (
              <ContentSection key={index}>
                {section.title && <SectionTitle>{section.title}</SectionTitle>}

                {section.texts.map((text, index) => (
                  <Text
                    dangerouslySetInnerHTML={{ __html: splitString(text, ';') }}
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
