import { Container } from '@/components/Container';
import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import educationLogo from '@/assets/images/education-logo.svg';
import { Trans, useTranslation } from 'react-i18next';
import { Button } from '@/ui/components/Button';
import { educationLink } from '@/constants';

interface IInfoLinkProps {
  className?: string;
}

const InfoLink: FC<IInfoLinkProps> = ({ className }) => {
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
          <Link href={educationLink} passHref>
            <StyledButton text={t('learnMore')} isLink />
          </Link>
        </InfoWrap>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.div`
  background-color: #1c1c1c;
`;

const StyledContainer = styled(Container)`
  padding: 75px 14%;
`;

const LogoWrapper = styled.div`
  margin-bottom: 48px;
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 48px;
  line-height: 67px;
  color: var(--white);
  max-width: 670px;
  span {
    color: var(--darkGray);
  }
`;

const StyledButton = styled(Button)``;

export default InfoLink;
