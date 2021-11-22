import { colors } from '@/constants';
import { FC, useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import styled from 'styled-components';

const Preloader: FC = () => {
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
    setTimeout(() => {
      setIsLoading(false);
      document.documentElement.style.overflow = '';
    }, 1000);
  }, []);

  return (
    <Root className={isLoading ? 'active' : ''}>
      <BeatLoader color="#48BE9C" size={60} />
    </Root>
  );
};

const Root = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.black1};
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s;
  &.active {
    opacity: 1;
  }
`;

export default Preloader;
