import { FC } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

interface ISelectUIProps {
  className?: string;
}

const SelectUI: FC<ISelectUIProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Select />
    </Root>
  );
};

const Root = styled.div``;

export default SelectUI;
