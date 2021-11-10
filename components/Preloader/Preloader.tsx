import { FC, useEffect, useState } from 'react';
import Script from 'next/script';

const Preloader: FC = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setIsActive(false);
  }, [isActive]);
  return (
    <section className={`case-preloader ${isActive ? 'active' : ''}`}>
      <svg
        className="case-preloader__img"
        id="e9Beg70Orta1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 900 900"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <g id="e9Beg70Orta2" transform="matrix(1 0 0 1 16 21)">
          <circle
            id="e9Beg70Orta3"
            r="150"
            transform="matrix(1 0 0 1 234 219)"
            fill="#ffffff"
            stroke="none"
            strokeWidth="1"
          />
          <circle
            id="e9Beg70Orta4"
            r="150"
            transform="matrix(1 0 0 1 234 598)"
            fill="#48BE9C"
            stroke="none"
            strokeWidth="1"
          />
          <circle
            id="e9Beg70Orta5"
            r="150"
            transform="matrix(1 0 0 1 604 219)"
            fill="#247074"
            stroke="none"
            strokeWidth="1"
          />
          <circle
            id="e9Beg70Orta6"
            r="150"
            transform="matrix(1 0 0 1 604 598)"
            fill="#1D1D1D"
            stroke="none"
            strokeWidth="1"
          />
        </g>

        <Script
          id="preloader-script"
          src="/js/preloader.js"
          strategy="beforeInteractive"
        />
      </svg>
    </section>
  );
};

export default Preloader;
