import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import React, { Children, FC } from 'react';

// interface IActiveLinkProps {
//   activeClassName: string
// }
const ActiveLink: FC<any> = React.forwardRef(
  ({ children, activeClassName, ...props }, ref) => {
    const { asPath } = useRouter();
    const child = Children.only(children);
    const childClassName = child.props.className || '';

    // pages/index.js will be matched via props.href
    // pages/about.js will be matched via props.href
    // pages/[slug].js will be matched via props.as
    const className =
      asPath === props.href || asPath === props.as
        ? `${childClassName} ${activeClassName}`.trim()
        : childClassName;

    return (
      <Link {...props} innerRef={ref}>
        {React.cloneElement(child, {
          className: className || null,
        })}
      </Link>
    );
  }
);

export default ActiveLink;
