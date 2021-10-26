import React, { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLink?: boolean;
  className?: string;
}
const Button: FC<IButtonProps> = React.forwardRef(
  ({ text, className, isLink = false, ...props }, ref) => {
    return (
      <Root className={className} as={isLink ? 'a' : 'button'} {...props}>
        {text}
      </Root>
    );
  }
);

const Root = styled.button`
  background: var(--greenGradient);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: var(--white);
  padding: 25px 28px;
  &:hover {
    box-shadow: 0px 14px 30px 0px rgba(27, 157, 120, 0.42);
  }
`;

export default Button;
