import { Container } from '@/components/Container';
import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import educationLogo from '@/assets/images/education-logo.svg';
import { Trans, useTranslation } from 'react-i18next';
import { Button } from '@/ui/components/Button';

import { COLORS } from '@/constants';
import { LINKS } from '@/constants';

interface InfoLinkProps {
  className?: string;
}

const InfoLink: FC<InfoLinkProps> = ({ className }) => {
  const { t } = useTranslation('education');

  return (
    <Root className={className}>
      <StyledContainer>
        <LogoWrapper>
          <Image src={educationLogo} alt={t('title')} />
        </LogoWrapper>
        <InfoWrap>
          <Text>
            <Trans t={t} i18nKey="learnText">
              Изучайте <span>достоверную информацию и</span> инвестируйте с умом
            </Trans>
          </Text>
          <Link href={LINKS.educationLink} passHref>
            <StyledButton text={t('learnMore')} isLink />
          </Link>
        </InfoWrap>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.div`
  background-color: ${COLORS.black5};
`;

const StyledContainer = styled(Container)`
  padding: 75px 14%;
  @media (min-width: 900px) and (max-height: 750px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @media (max-width: 1300px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 900px) {
    padding: 40px 32px;
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 48px;
  @media (max-width: 768px) {
    width: 168px;
    margin-bottom: 24px;
  }
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 48px;
  line-height: 67px;
  color: ${COLORS.white};
  max-width: 670px;

  span {
    color: ${COLORS.darkGray};
  }
  @media (max-width: 1300px) {
    font-size: 36px;
    line-height: 48px;
    max-width: 520px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 24px;
    max-width: 670px;
  }
  @media (max-width: 900px) {
    font-size: 24px;
    line-height: 34px;
    max-width: none;
  }
`;

const StyledButton = styled(Button)``;

export default InfoLink;
