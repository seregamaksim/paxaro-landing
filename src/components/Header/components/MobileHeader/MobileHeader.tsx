import { Container } from '@/components/Container';
import SocialList from '@/components/SocialList/SocialList';
import { Button } from '@/ui/components/Button';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { LanguageSwitcher } from '../LanguageSwitcher';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { ActiveLink } from '@/components/ActiveLink';
import { MobileStore } from '../MobileStore';
import LogoMini from '@/ui/icons/LogoMini';
import Headroom from 'react-headroom';
import { LINKS, COLORS } from '@/constants';
import { MobileMenuContext } from '@/pages';

interface HeaderWrapperProps {
  isActiveMenu: boolean;
  $topPosition: number;
}

const MobileHeader: FC = ({ children }) => {
  const { t } = useTranslation('header');
  const { isOpenMenu, setIsOpenMenu, userAgent } =
    useContext(MobileMenuContext);

  const [topPositionMenu, setTopPositionMenu] = useState(80);
  const [isMobileStoreOpen, setIsMobileStoreOpen] = useState(true);

  const ref = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  function handleBurgerClick() {
    setIsOpenMenu(!isOpenMenu);
  }

  function onCloseMobileStoreButtonClick() {
    setIsMobileStoreOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = isOpenMenu ? 'hidden' : '';
  }, [isOpenMenu]);

  useEffect(() => {
    setTopPositionMenu(mainContentRef.current!.offsetHeight);
  }, [isMobileStoreOpen]);

  return (
    <>
      <Headroom
        disableInlineStyles={true}
        onUnpin={() => {
          const headroom: HTMLElement | null =
            document.querySelector('.headroom');
          if (isOpenMenu) {
            headroom!.style.transform = 'none';
          } else {
            headroom!.style.transform = '';
          }
        }}
      >
        <div ref={mainContentRef}>
          <MobileStore
            isOpen={isMobileStoreOpen}
            onCloseMobileStoreButtonClick={onCloseMobileStoreButtonClick}
            userAgent={userAgent}
          />
          <Root ref={ref}>
            <HeaderBurgerNavContainer>
              <Link href="/" passHref>
                <a>
                  <LogoMini />
                </a>
              </Link>
              <BurgerBtn
                className={isOpenMenu ? 'active' : ''}
                onClick={handleBurgerClick}
              >
                <span></span>
              </BurgerBtn>
            </HeaderBurgerNavContainer>
          </Root>
        </div>
      </Headroom>
      <HeaderWrapper $topPosition={topPositionMenu} isActiveMenu={isOpenMenu}>
        <div>
          <HeaderTopContainer>
            <HeaderTopNav>
              <HeaderTopItem>
                <ActiveLink href="/" activeClassName="active">
                  <HeaderTopLink>{t('main.aboutProduct')}</HeaderTopLink>
                </ActiveLink>
              </HeaderTopItem>
              <HeaderTopItem>
                <ActiveLink href="/blog" activeClassName="active">
                  <HeaderTopLink style={{ pointerEvents: 'none' }}>
                    {t('main.blog')}
                  </HeaderTopLink>
                </ActiveLink>
              </HeaderTopItem>
              <HeaderTopItem>
                <ActiveLink href="/about" activeClassName="active">
                  <HeaderTopLink style={{ pointerEvents: 'none' }}>
                    {t('main.aboutCompany')}
                  </HeaderTopLink>
                </ActiveLink>
              </HeaderTopItem>
            </HeaderTopNav>
          </HeaderTopContainer>

          {children && (
            <Container>
              {children}

              <HeaderButtonsWrap>
                <HeaderButtonTitle>{t('main.accountTitle')}</HeaderButtonTitle>
                <HeaderButtons>
                  <Link href={LINKS.registrationLink} passHref>
                    <HeaderButtonRegistration
                      isLink
                      text={t('main.registration')}
                    ></HeaderButtonRegistration>
                  </Link>
                  <Link href={LINKS.loginLink} passHref>
                    <HeaderLinkLogin>
                      <span>{t('main.login')}</span>
                    </HeaderLinkLogin>
                  </Link>
                </HeaderButtons>
              </HeaderButtonsWrap>
            </Container>
          )}
          <StyledSocialList />
          <LanguageSwitcher />
        </div>
      </HeaderWrapper>
    </>
  );
};

const Root = styled.header`
  background: ${COLORS.black1};
  box-shadow: 0px 30px 36px -15px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const HeaderWrapper = styled.div.attrs<HeaderWrapperProps>(
  ({ isActiveMenu }) => ({
    className: isActiveMenu ? 'mobile-menu active' : 'mobile-menu',
  })
)`
  display: ${({ isActiveMenu }: HeaderWrapperProps) =>
    isActiveMenu ? 'block' : 'none'};
  position: fixed;
  width: 100%;
  top: ${({ $topPosition }: HeaderWrapperProps) => $topPosition + 'px'};
  right: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  background: ${COLORS.black1};
  z-index: 10;
`;

const HeaderBurgerNavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 22px;
  padding-bottom: 22px;
`;

const HeaderTopContainer = styled(Container)`
  padding-top: 22px;
  display: flex;
  flex-direction: column;
`;

const HeaderTopNav = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(153, 153, 153, 0.3);
`;

const HeaderTopItem = styled.li`
  margin-right: 0;
  margin-bottom: 18px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const HeaderTopLink = styled.a`
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.01em;
  color: ${COLORS.white};
  transition: color 0.3s ease;
  &.active {
    color: ${COLORS.green};
  }
`;

const HeaderButtonsWrap = styled.div`
  margin-bottom: 24px;
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
  color: ${COLORS.white};
  margin-bottom: 18px;
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
  background: ${COLORS.greenGradient};
  display: inline-flex;
  padding: 2px;
  min-height: 43px;
  min-width: 76px;
  color: ${COLORS.white};
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
    background-color: ${COLORS.black3};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 8px;
  }
`;

const BurgerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  z-index: 1;

  span,
  & span::before,
  & span::after {
    position: absolute;
    width: 18px;
    height: 2px;
    background-color: ${COLORS.white};
    transition: all 0.3s ease;
  }
  & span::before {
    content: '';
    left: 0;
    top: -8px;
  }
  & span::after {
    content: '';
    left: 0;
    top: 8px;
  }

  &.active {
    span {
      transform: rotate(45deg);
      &::before {
        top: 0;
        transform: rotate(0);
      }
      &::after {
        top: 0;
        transform: rotate(90deg);
      }
    }
  }
`;

const StyledSocialList = styled(SocialList)`
  margin-bottom: 24px;
  padding-left: 20px;
  margin-top: auto;
`;

export default MobileHeader;
