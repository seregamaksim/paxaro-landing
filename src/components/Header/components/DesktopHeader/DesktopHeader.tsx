import { FC } from 'react';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import { Container } from '@/components/Container';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/images/logo.svg';
import { ActiveLink } from '@/components/ActiveLink';
import { Button } from '@/ui/components/Button';
import { LanguageSwitcher } from '../LanguageSwitcher';
import Headroom from 'react-headroom';
import { colors, loginLink, registrationLink } from '@/constants';

const DesktopHeader: FC = ({ children }) => {
  const { t } = useTranslation('header');

  return (
    <Headroom style={{ zIndex: 10 }}>
      <Root>
        <HeaderTopContainer>
          <Link href="/" passHref>
            <HeaderLogoLink>
              <Image src={logo} alt={t('logoAlt')} loading="eager" />
            </HeaderLogoLink>
          </Link>
          <HeaderTopNav>
            <HeaderTopItem>
              <ActiveLink href="/" activeClassName="active">
                <HeaderTopLink>{t('main.aboutProduct')}</HeaderTopLink>
              </ActiveLink>
            </HeaderTopItem>
            <HeaderTopItem>
              <ActiveLink href="/blog" activeClassName="active">
                <HeaderTopLink>{t('main.blog')}</HeaderTopLink>
              </ActiveLink>
            </HeaderTopItem>
            <HeaderTopItem>
              <ActiveLink href="/about" activeClassName="active">
                <HeaderTopLink>{t('main.aboutCompany')}</HeaderTopLink>
              </ActiveLink>
            </HeaderTopItem>
          </HeaderTopNav>

          <HeaderButtonsWrap>
            <HeaderButtonTitle>{t('main.accountTitle')}</HeaderButtonTitle>
            <HeaderButtons>
              <Link href={registrationLink} passHref>
                <HeaderButtonRegistration
                  isLink
                  text={t('main.registration')}
                ></HeaderButtonRegistration>
              </Link>
              <Link href={loginLink} passHref>
                <HeaderLinkLogin>
                  <span>{t('main.login')}</span>
                </HeaderLinkLogin>
              </Link>
              <LanguageSwitcher />
            </HeaderButtons>
          </HeaderButtonsWrap>
        </HeaderTopContainer>

        {children && (
          <HeaderBottom>
            <HeaderBottomContainer>{children}</HeaderBottomContainer>
          </HeaderBottom>
        )}
      </Root>
    </Headroom>
  );
};

const Root = styled.header`
  background: ${colors.black1};
  box-shadow: 0px 30px 36px -15px rgba(0, 0, 0, 0.15);
`;

const HeaderTopContainer = styled(Container)`
  padding-top: 22px;
  padding-bottom: 22px;
  display: flex;
  align-items: center;
`;

const HeaderLogoLink = styled.a`
  margin-right: 42px;
  @media (max-width: 1024px) {
    margin-right: 25px;
  }
`;

const HeaderTopNav = styled.ul`
  display: flex;
  align-items: center;
`;

const HeaderTopItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1024px) {
    margin-right: 15px;
  }
`;

const HeaderTopLink = styled.a`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: ${colors.white};
  transition: color 0.3s ease;
  &.active,
  &:hover {
    color: ${colors.green};
  }
`;

const HeaderButtonsWrap = styled.div`
  margin-left: auto;
`;

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderButtonTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: ${colors.white};
  margin-bottom: 18px;
  display: none;
`;

const HeaderButtonRegistration = styled(Button)`
  margin-right: 14px;
  font-size: 14px;
  line-height: 19px;
  padding-top: 11px;
  padding-bottom: 11px;
`;

const HeaderLinkLogin = styled.a`
  border-radius: 8px;
  background: ${colors.greenGradient};
  display: inline-flex;
  padding: 2px;
  min-height: 43px;
  min-width: 76px;
  color: ${colors.white};
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  margin-right: 14px;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0px 14px 30px 0px rgba(27, 157, 120, 0.42);
  }

  span {
    background-color: ${colors.black3};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 8px;
  }
`;

const HeaderBottom = styled.div`
  background-color: ${colors.black2};
`;

const HeaderBottomContainer = styled(Container)`
  padding-top: 11px;
  padding-bottom: 11px;
`;

export default DesktopHeader;
