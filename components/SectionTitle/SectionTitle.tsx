import { FC } from 'react';
import styled from 'styled-components';

interface ISectionTitleProps {
  className?: string;
  text: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({ className, text }) => {
  return <Title className={className}>{text}</Title>;
};

const Title = styled.h2`
  font-size: 36px;
  line-height: 50px;
  font-weight: bold;
  color: var(--black2);
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 34px;
  }
`;

export default SectionTitle;
