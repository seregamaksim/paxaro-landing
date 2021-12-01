import * as React from 'react';

function LogoMini(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={31}
      height={37}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.306 36.675C6.868 36.675.002 29.81.002 21.372h6.342c0 4.942 4.02 8.963 8.963 8.963v6.34h-.001z"
        fill="#fff"
      />
      <path
        d="M15.305 30.61v-6.343c4.942 0 8.964-4.02 8.964-8.963 0-4.942-4.02-8.964-8.964-8.964-4.942 0-8.963 4.02-8.963 8.964H0C0 6.866 6.866 0 15.304 0s15.304 6.866 15.304 15.304c.001 8.44-6.863 15.305-15.303 15.305z"
        fill="#fff"
      />
    </svg>
  );
}

export default LogoMini;
