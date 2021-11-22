import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { ActiveLink } from '../ActiveLink';
import { Container } from '../Container';
import logo from '@/assets/images/logo.svg';
import appStore from '@/assets/images/app-store-transparent.svg';
import googlePlay from '@/assets/images/google-play-transparent.svg';

import { useTranslation } from 'react-i18next';
import { BackToTop } from './components/BackToTop';
import { colors } from '@/constants';
import { Button } from '@/ui/components/Button';

const Footer: FC = () => {
  const { t } = useTranslation(['header', 'footer']);
  return (
    <Root>
      <StyledContainer>
        <FooterTop>
          <LogoStoresWrap>
            <ActiveLink href="/">
              <LogoLink>
                <Image src={logo} alt="Paxaro" loading="eager" />
              </LogoLink>
            </ActiveLink>
            <StoresList>
              <StoresItem>
                <ActiveLink href="https://www.apple.com/ru/app-store/">
                  <StoresLink>
                    <Image src={appStore} alt="App store" loading="eager" />
                  </StoresLink>
                </ActiveLink>
              </StoresItem>
              <StoresItem>
                <ActiveLink href="https://play.google.com/store?hl=ru&gl=US">
                  <StoresLink>
                    <Image src={googlePlay} alt="Google play" loading="eager" />
                  </StoresLink>
                </ActiveLink>
              </StoresItem>
            </StoresList>
          </LogoStoresWrap>
          <MainMenuNavWrap>
            <MainMenuWrapper>
              <MainMenu>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>
                      {t('main.aboutProduct', { ns: 'header' })}
                    </MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>
                      {t('main.blog', { ns: 'header' })}
                    </MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>
                      {t('main.aboutCompany', { ns: 'header' })}
                    </MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
              </MainMenu>
              <MainMenu>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>
                      {t('secondMain.history', { ns: 'header' })}
                    </MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>
                      {t('secondMain.advantages', { ns: 'header' })}
                    </MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>
                      {t('secondMain.knowledgeBase', { ns: 'header' })}
                    </MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>
                      {t('secondMain.howWork', { ns: 'header' })}
                    </MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>
                      {t('secondMain.subscription', { ns: 'header' })}
                    </MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>
                      {t('secondMain.howToStart', { ns: 'header' })}
                    </MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
              </MainMenu>

              <MenuSocialList>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>Instagram</MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>VC</MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>Twitter</MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>YouTube</MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
                <MainMenuItem>
                  <ActiveLink href="#">
                    <MainMenuItemLink>Telegram</MainMenuItemLink>
                  </ActiveLink>
                </MainMenuItem>
              </MenuSocialList>
            </MainMenuWrapper>
            <ActiveLink href="#">
              <PersonalAreaLink isLink text={t('main.accountTitle')} />
            </ActiveLink>
          </MainMenuNavWrap>
        </FooterTop>

        <FooterBottom>
          <FooterCopyright>
            © {new Date().getFullYear()} Kadex Enterprise pte Ltd.
          </FooterCopyright>
          <FooterBottomWrapper>
            <DocumentsList>
              <DocumentItem>
                <ActiveLink href="/term-of-use">
                  <DocumentLink>{t('term', { ns: 'footer' })}</DocumentLink>
                </ActiveLink>
              </DocumentItem>
              <DocumentItem>
                <ActiveLink href="/privacy">
                  <DocumentLink>{t('privacy', { ns: 'footer' })}</DocumentLink>
                </ActiveLink>
              </DocumentItem>
              <DocumentItem>
                <ActiveLink href="/cookie">
                  <DocumentLink>{t('cookie', { ns: 'footer' })}</DocumentLink>
                </ActiveLink>
              </DocumentItem>
              <DocumentItem>
                <ActiveLink href="/trial">
                  <DocumentLink>
                    {t('testPeriod', { ns: 'footer' })}
                  </DocumentLink>
                </ActiveLink>
              </DocumentItem>
            </DocumentsList>
            <StyledBackToTop />
          </FooterBottomWrapper>
        </FooterBottom>
      </StyledContainer>
    </Root>
  );
};

const Root = styled.footer`
  background-color: ${colors.black3};
`;

const StyledContainer = styled(Container)`
  padding-top: 56px;
  padding-bottom: 41px;
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const FooterTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 35px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;

const LogoStoresWrap = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
  @media (max-width: 600px) {
    align-self: center;
  }
`;

const LogoLink = styled.a`
  display: block;
  margin-bottom: 45px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const StoresList = styled.ul`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const StoresItem = styled.li`
  margin-bottom: 18px;

  transition: transform 0.3s ease;
  &:hover {
    color: ${colors.green};
    transform: translateY(-3px);
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const StoresLink = styled.a``;

const MainMenuNavWrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

const MainMenuWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 84px;
  @media (max-width: 1024px) {
    margin-right: 30px;
  }
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const MainMenu = styled.ul`
  margin-right: 60px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1024px) {
    margin-right: 30px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MainMenuItem = styled.li`
  margin-bottom: 14px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const MainMenuItemLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: ${colors.white};
  transition: color 0.3s ease;
  &:hover {
    color: ${colors.green};
  }
`;

const MenuSocialList = styled(MainMenu)`
  @media (max-width: 768px) {
    display: flex;
    & ${MainMenuItem} {
      margin-bottom: 0;
      margin-right: 21px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const PersonalAreaLink = styled(Button)`
  font-size: 14px;
  line-height: 20px;
  padding-top: 11px;
  padding-bottom: 11px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const FooterBottom = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
  }
`;

const FooterCopyright = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: 0.01em;
  color: ${colors.white};
  margin-bottom: 26px;
  @media (max-width: 600px) {
    margin-bottom: 0;
  }
`;

const FooterBottomWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

const DocumentsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1250px) {
    max-width: 700px;
  }
  @media (max-width: 850px) {
    max-width: 500px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const DocumentItem = styled.li`
  padding-right: 12px;
  position: relative;
  margin-right: 12px;

  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 100%;
    background-color: ${colors.white};
  }
  &:last-child {
    margin-right: 0;
    padding-right: 0;
    &::before {
      content: none;
    }
  }
  @media (max-width: 1250px) {
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    margin-right: 0;
    padding-right: 0;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
    &::before {
      content: none;
    }
  }
`;

const DocumentLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  color: ${colors.white};
  transition: color 0.3s ease;
  &:hover {
    color: ${colors.green};
  }
`;

const StyledBackToTop = styled(BackToTop)`
  @media (max-width: 600px) {
    position: absolute;
    right: 0;

    bottom: 0;
  }
`;

export default Footer;
