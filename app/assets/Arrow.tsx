import * as React from "react";

function ArrowIcopn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={19} height={19} fill="none" {...props}>
      <path
        d="M4.585 14.34l9.074-8.681M7 4h8M15 12V4"
        stroke="#000"
        strokeWidth={3}
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Arrow = React.memo(ArrowIcopn);
