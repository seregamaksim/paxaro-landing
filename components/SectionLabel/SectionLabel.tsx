import { colors } from '@/constants';
import { FC } from 'react';
import styled from 'styled-components';

interface SectionLabelProps {
  className?: string;
  text: string;
  isDark?: boolean;
}

const SectionLabel: FC<SectionLabelProps> = ({
  className,
  text,
  isDark = false,
}) => {
  return (
    <Label className={className} isDark={isDark}>
      {text}
    </Label>
  );
};

const Label = styled.p<{ isDark: boolean }>`
  display: inline-block;
  padding: 3px 13px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  letter-spacing: 0.01em;

  color: ${(props) => (props.isDark ? colors.white : colors.black1)};
  background-color: ${(props) =>
    props.isDark ? colors.black4 : colors.lightGray};
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 17px;
  }
`;

export default SectionLabel;
