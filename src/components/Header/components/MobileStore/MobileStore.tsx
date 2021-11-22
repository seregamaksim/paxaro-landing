import { FC, useState } from 'react';
import styled from 'styled-components';
import { isAndroid, isIOS } from 'react-device-detect';
import closeIcon from '@/assets/images/close.svg';
import logoMini from '@/assets/images/logo-mini.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Button } from '@/ui/components/Button';
import { LINKS } from '@/constants';
import { COLORS } from '@/constants';

interface MobileStoreProps {
  userAgent: { [key: string]: any };
  onCloseMobileStoreButtonClick: () => void;
  isOpen: boolean;
}

const MobileStore: FC<MobileStoreProps> = ({
  userAgent,
  onCloseMobileStoreButtonClick,
  isOpen,
}) => {
  const { t } = useTranslation('cookies');

  function getDeviceLink() {
    if (userAgent.isAndroid) {
      return LINKS.googlePlayLink;
    }
    if (userAgent.isIOS) {
      return LINKS.appStoreLink;
    }
    return '/';
  }

  return (
    <Root $open={isOpen}>
      <Wrapper>
        <LogoTextWrap>
          <CloseButton onClick={onCloseMobileStoreButtonClick}>
            <Image src={closeIcon} alt="Paxaro" />
          </CloseButton>
          <LogoWrap>
            <Image src={logoMini} alt="Paxaro" />
          </LogoWrap>
          <Text>{t('appsText')}</Text>
        </LogoTextWrap>

        <Link href={getDeviceLink()} passHref>
          <InstallLink text={t('install')} isLink />
        </Link>
      </Wrapper>
    </Root>
  );
};
const Root = styled.div<{ $open: boolean }>`
  display: ${(props) => (props.$open ? 'block' : 'none')};
  background-color: ${COLORS.black2};
  @media (min-width: 900px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoTextWrap = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const CloseButton = styled.button`
  width: 100%;
  max-width: 24px;
  margin-right: 9px;
`;

const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 60px;
  height: 60px;
  background: ${COLORS.greenGradient};
  margin-right: 10px;
  border-radius: 20px;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  color: ${COLORS.white};
  max-width: 138px;
  margin-right: 10px;
`;

const InstallLink = styled(Button)`
  font-size: 12px;
  line-height: 17px;
  padding: 8px 6px;
`;

export default MobileStore;
