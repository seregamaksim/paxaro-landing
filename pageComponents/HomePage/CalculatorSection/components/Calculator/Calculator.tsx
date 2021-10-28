import { SelectUI } from '@/ui/components/SelectUI';
import { FC } from 'react';
import styled from 'styled-components';

interface ICalculatorProps {
  className?: string;
}

const Calculator: FC<ICalculatorProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Wrapper>
        <SelectUI />
      </Wrapper>
    </Root>
  );
};

const Root = styled.div`
  background: var(--black2);
  border-radius: 50px;
`;
const Wrapper = styled.div`
  padding: 40px 60px;
`;

export default Calculator;
