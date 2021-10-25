import * as React from 'react';

function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      // width={148}
      // height={46}
      viewBox="0 0 148 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M54.382 14.53c0-.396.631-1.027 1.026-1.027h12.22c.948 0 2.924 1.922 2.924 2.87v5.584c0 .947-1.976 2.845-2.923 2.845H57.54v4.793a.689.689 0 01-.66.66h-1.816c-.342 0-.685-.317-.685-.66V14.53h.002zm13.01 7.479v-5.716h-9.85v5.716h9.85zM73.372 24.826c0-.948 1.737-2.555 2.633-2.555h7.558v-2.634h-8.797a.689.689 0 01-.66-.66v-1.395c0-.342.317-.66.66-.66h9.086c.895 0 2.791 1.818 2.791 2.713v7.902c0 .896-1.896 2.712-2.791 2.712h-7.69c-.896 0-2.792-1.816-2.792-2.712v-2.71h.002zm10.193 2.713v-2.977h-7.138v2.977h7.138zM89.833 30.253c-.341 0-.526-.29-.526-.58a.89.89 0 01.131-.395l3.872-5.242c.13-.21.341-.395.605-.5-.264-.08-.474-.29-.605-.475L89.412 17.9a.623.623 0 01-.184-.42c0-.265.184-.555.526-.555h2.527l3.846 5.268h.87l3.871-5.268h2.502c.342 0 .526.29.526.554a.743.743 0 01-.158.421l-3.898 5.162c-.159.185-.369.395-.631.475.264.105.474.29.631.5l3.846 5.242c.052.079.159.264.159.395 0 .29-.211.58-.527.58h-2.527l-3.793-5.347h-.87l-3.791 5.347h-2.504zM106.217 24.826c0-.948 1.738-2.555 2.633-2.555h7.559v-2.634h-8.797a.688.688 0 01-.659-.66v-1.395c0-.342.315-.66.659-.66h9.085c.896 0 2.792 1.818 2.792 2.713v7.902c0 .896-1.896 2.712-2.792 2.712h-7.69c-.895 0-2.791-1.816-2.791-2.712v-2.71h.001zm10.192 2.713v-2.977h-7.138v2.977h7.138zM126.181 29.594a.689.689 0 01-.659.659h-1.765c-.316 0-.659-.316-.659-.66V19.64c0-.87 1.896-2.713 2.791-2.713h5.927a.69.69 0 01.659.66v1.395a.689.689 0 01-.659.66h-5.637v9.953h.002zM134.794 19.639c0-.896 1.896-2.713 2.792-2.713h7.848c.921 0 2.792 1.817 2.792 2.713v8.033c0 .895-1.896 2.58-2.792 2.58h-7.848c-.896 0-2.792-1.71-2.792-2.606v-8.008zm10.352 7.9v-7.902h-7.269v7.902h7.269zM19.197 46C8.613 46 .002 37.389.002 26.805h7.954c0 6.199 5.042 11.243 11.242 11.243V46h-.001z"
        fill="#fff"
      />
      <path
        d="M19.196 38.391v-7.954c6.199 0 11.243-5.042 11.243-11.242 0-6.199-5.043-11.243-11.243-11.243-6.198 0-11.242 5.043-11.242 11.243H0C0 8.61 8.611 0 19.195 0c10.583 0 19.194 8.611 19.194 19.195.002 10.585-8.608 19.196-19.193 19.196z"
        fill="#fff"
      />
    </svg>
  );
}

export default Logo;
