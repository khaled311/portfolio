import * as React from "react";

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={9} height={5} fill="none" {...props}>
      <path
        opacity={0.1}
        d="M8 1L4.5 4 1 1"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const ChevronDown = React.memo(ChevronDownIcon);
