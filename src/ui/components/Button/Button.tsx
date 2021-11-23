import { COLORS } from '@/constants';
import React, { ButtonHTMLAttributes, FC } from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isLink?: boolean;
  className?: string;
}
interface RootProps {
  $isLoading: boolean;
}

const Button: FC<ButtonProps> = React.forwardRef(
  (
    {
      text,
      className,
      isLink = false,
      isDisabled = false,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    return (
      <Root
        className={className}
        disabled={isDisabled}
        $isLoading={isLoading}
        as={isLink ? 'a' : 'button'}
        {...props}
      >
        {text}
        {isLoading && (
          <LoaderWrapper>
            <ClipLoader size={25} color={COLORS.white} />
          </LoaderWrapper>
        )}
      </Root>
    );
  }
);

const Root = styled.button<RootProps>`
  background: ${COLORS.greenGradient};
  position: relative;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: ${({ $isLoading }) => ($isLoading ? 'transparent' : COLORS.white)};
  padding: 25px 28px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 14px 30px 0 rgba(27, 157, 120, 0.42);
  }
  &:disabled {
    cursor: not-allowed;
    color: transparent;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
    padding: 14px 28px;
  }
`;

const LoaderWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

Button.displayName = 'Button';

export default Button;
