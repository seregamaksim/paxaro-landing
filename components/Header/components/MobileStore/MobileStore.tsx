import { FC, useState } from 'react';
import styled from 'styled-components';
import { isAndroid, isIOS } from 'react-device-detect';
import closeIcon from '@/assets/images/close.svg';
import logoMini from '@/assets/images/logo-mini.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Button } from '@/ui/components/Button';
import { appStoreLink, googlePlayLink } from '@/constants';

const MobileStore: FC = () => {
  const { t } = useTranslation('cookies');
  const [isOpen, setIsOpen] = useState(true);

  function handleCloseButtonClick() {
    setIsOpen(false);
  }

  function getDeviceLink() {
    if (isAndroid) {
      return googlePlayLink;
    }
    if (isIOS) {
      return appStoreLink;
    }
    return '';
  }

  return (
    <Root $open={isOpen}>
      <Wrapper>
        <LogoTextWrap>
          <CloseButton onClick={handleCloseButtonClick}>
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
  background-color: var(--black2);
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
  background: var(--greenGradient);
  margin-right: 10px;
  border-radius: 20px;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;
  color: var(--white);
  max-width: 138px;
  margin-right: 10px;
`;

const InstallLink = styled(Button)`
  font-size: 12px;
  line-height: 17px;
  padding: 8px 6px;
`;

export default MobileStore;
