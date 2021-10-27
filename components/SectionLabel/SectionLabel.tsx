import { FC } from 'react';
import styled from 'styled-components';

interface ISectionLabelProps {
  className?: string;
  text: string;
  isDark?: boolean;
}

const SectionLabel: FC<ISectionLabelProps> = ({
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

  color: ${(props) => (props.isDark ? 'var(--white)' : 'var(--black2)')};
  background-color: ${(props) =>
    props.isDark ? 'var(--black4)' : 'var(--lightGray)'};
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 17px;
  }
`;

export default SectionLabel;
