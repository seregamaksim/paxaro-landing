import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ActiveLink } from '@/components/ActiveLink';
import { COLORS } from '@/constants';

const HeaderBottom: FC = () => {
  const { t } = useTranslation('footer');
  return (
    <HeaderBottomMenu>
      <HeaderBottomMenuItem>
        <ActiveLink href="/term-of-use" activeClassName="active">
          <HeaderBottomMenuLink>{t('term')}</HeaderBottomMenuLink>
        </ActiveLink>
      </HeaderBottomMenuItem>
      <HeaderBottomMenuItem>
        <ActiveLink href="/privacy" activeClassName="active">
          <HeaderBottomMenuLink>{t('privacy')}</HeaderBottomMenuLink>
        </ActiveLink>
      </HeaderBottomMenuItem>
      <HeaderBottomMenuItem>
        <ActiveLink href="/cookie" activeClassName="active">
          <HeaderBottomMenuLink>{t('cookie')}</HeaderBottomMenuLink>
        </ActiveLink>
      </HeaderBottomMenuItem>
      <HeaderBottomMenuItem>
        <ActiveLink href="/trial" activeClassName="active">
          <HeaderBottomMenuLink>{t('testPeriod')}</HeaderBottomMenuLink>
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

  color: ${COLORS.white};
  transition: color 0.3s ease;
  &.active,
  &:hover {
    color: ${COLORS.green};
  }
`;

export default HeaderBottom;
