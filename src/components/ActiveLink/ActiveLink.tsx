import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children, FC } from 'react';

const ActiveLink: FC<any> = React.forwardRef(
  ({ children, activeClassName, ...props }, ref) => {
    const { pathname } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || '';

    const className =
      pathname === props.href || pathname === props.as
        ? `${childClassName} ${activeClassName}`.trim()
        : childClassName;

    return (
      <Link {...props} innerRef={ref} passHref>
        {React.cloneElement(child, {
          className: className || null,
        })}
      </Link>
    );
  }
);

ActiveLink.displayName = 'ActiveLink';

export default ActiveLink;
