import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Image from 'next/image';
import arrowUp from '@/assets/images/arrow-up.svg';
import { COLORS } from '@/constants';

interface BackToTopProps {
  className?: string;
}

const BackToTop: FC<BackToTopProps> = ({ className }) => {
  function scrollToTop() {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <Root className={className} onClick={scrollToTop}>
      <Text>Вернуться наверх</Text>
      <Image src={arrowUp} alt="To top" />
    </Root>
  );
};

const Root = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.01em;
  margin-right: 4px;
  color: ${COLORS.white};
  @media (max-width: 900px) {
    font-size: 0;
    margin: 0;
  }
`;

export default BackToTop;
