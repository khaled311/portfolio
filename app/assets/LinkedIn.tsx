import * as React from "react";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={21} fill="none" {...props}>
      <path
        d="M17.04 17.317h-2.962v-4.64c0-1.107-.023-2.53-1.544-2.53-1.544 0-1.782 1.205-1.782 2.448v4.722H7.79V7.773h2.847v1.302h.039c.397-.749 1.364-1.54 2.806-1.54 3.002 0 3.556 1.977 3.556 4.546l.004 5.236zM4.449 6.467a1.72 1.72 0 110-3.438 1.72 1.72 0 010 3.438zm1.486 10.85H2.963V7.773h2.97v9.544zM18.522.272H1.478C.663.272 0 .915 0 1.714V18.83c0 .796.659 1.443 1.478 1.443h17.04c.815 0 1.482-.643 1.482-1.443V1.714c0-.799-.667-1.442-1.478-1.442z"
        fill="#8A898D"
        className="transition-all"
      />
    </svg>
  );
}

export const LinkedIn = React.memo(LinkedInIcon);
