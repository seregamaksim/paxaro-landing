import { FC } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return <Root className={className}>{children}</Root>;
};

const Root = styled.div`
  max-width: 1440px;
  padding-left: 6.94%;
  padding-right: 6.94%;
  margin: 0 auto;
  @media (min-width: 1440px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media (max-width: 1300px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 1024px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default Container;
