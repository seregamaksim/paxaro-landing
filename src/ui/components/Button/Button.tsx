import { COLORS } from '@/constants';
import React, { ButtonHTMLAttributes, FC, LinkHTMLAttributes } from 'react';
import styled from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isDisabled?: boolean;
  isLink?: boolean;
  className?: string;
}
const Button: FC<ButtonProps> = React.forwardRef(
  ({ text, className, isLink = false, isDisabled = false, ...props }, ref) => {
    return (
      <Root
        className={className}
        disabled={isDisabled}
        as={isLink ? 'a' : 'button'}
        {...props}
      >
        {text}
      </Root>
    );
  }
);

const Root = styled.button`
  background: ${COLORS.greenGradient};
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: ${COLORS.white};
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
Button.displayName = 'Button';

export default Button;
