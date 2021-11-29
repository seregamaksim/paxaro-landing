import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { COLORS } from '@/constants';

const anchors = [
  'history',
  'advantages',
  'education',
  'howWork',
  'subscription',
  'howToStart',
];

const HeaderBottom: FC = () => {
  const { t } = useTranslation('header');

  const handleBtnClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <HeaderBottomMenu>
      {anchors.map((anchor, index) => {
        return (
          <HeaderBottomMenuItem key={index}>
            <HeaderBottomMenuLink
              data-section-id={anchor}
              onClick={() => handleBtnClick(anchor)}
            >
              {t(`secondMain.${anchor}`)}
            </HeaderBottomMenuLink>
          </HeaderBottomMenuItem>
        );
      })}
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

const HeaderBottomMenuLink = styled.button.attrs(() => ({
  className: 'header-bottom-link',
}))`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  cursor: pointer;
  color: ${COLORS.white};
  transition: color 0.3s ease;
  &.active,
  &:hover,
  &:focus {
    color: ${COLORS.green};
  }
`;

export default HeaderBottom;
