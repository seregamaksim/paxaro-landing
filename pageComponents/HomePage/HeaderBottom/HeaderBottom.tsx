import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ActiveLink } from '@/components/ActiveLink';

const HeaderBottom: FC = () => {
  const { t } = useTranslation('header');
  return (
    <HeaderBottomMenu>
      <HeaderBottomMenuItem>
        <ActiveLink href="/#history" activeClassName="active">
          <HeaderBottomMenuLink>{t('secondMain.history')}</HeaderBottomMenuLink>
        </ActiveLink>
      </HeaderBottomMenuItem>
      <HeaderBottomMenuItem>
        <ActiveLink href="/#advantages" activeClassName="active">
          <HeaderBottomMenuLink>
            {t('secondMain.advantages')}
          </HeaderBottomMenuLink>
        </ActiveLink>
      </HeaderBottomMenuItem>
      <HeaderBottomMenuItem>
        <ActiveLink href="/#education" activeClassName="active">
          <HeaderBottomMenuLink>
            {t('secondMain.knowledgeBase')}
          </HeaderBottomMenuLink>
        </ActiveLink>
      </HeaderBottomMenuItem>
      <HeaderBottomMenuItem>
        <ActiveLink href="/#howWork" activeClassName="active">
          <HeaderBottomMenuLink>{t('secondMain.howWork')}</HeaderBottomMenuLink>
        </ActiveLink>
      </HeaderBottomMenuItem>
      <HeaderBottomMenuItem>
        <ActiveLink href="/#subscription" activeClassName="active">
          <HeaderBottomMenuLink>
            {t('secondMain.subscription')}
          </HeaderBottomMenuLink>
        </ActiveLink>
      </HeaderBottomMenuItem>
      <HeaderBottomMenuItem>
        <ActiveLink href="/#howToStart" activeClassName="active">
          <HeaderBottomMenuLink>
            {t('secondMain.howToStart')}
          </HeaderBottomMenuLink>
        </ActiveLink>
      </HeaderBottomMenuItem>
    </HeaderBottomMenu>
  );
};

const HeaderBottomMenu = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 24px;
  }
`;

const HeaderBottomMenuItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 1024px) {
    margin-right: 15px;
  }
  @media (max-width: 900px) {
    margin-right: 0;
    margin-bottom: 18px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const HeaderBottomMenuLink = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;

  color: var(--white);
  transition: color 0.3s ease;
  &.active,
  &:hover {
    color: var(--green);
  }
`;

export default HeaderBottom;
