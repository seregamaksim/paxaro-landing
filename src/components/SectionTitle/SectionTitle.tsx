import { COLORS } from '@/constants';
import { FC } from 'react';
import styled from 'styled-components';

interface SectionTitleProps {
  className?: string;
  text: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ className, text }) => {
  return <Title className={className}>{text}</Title>;
};

const Title = styled.h2`
  font-size: 36px;
  line-height: 50px;
  font-weight: bold;
  color: ${COLORS.black1};
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
  }
`;

export default SectionTitle;
