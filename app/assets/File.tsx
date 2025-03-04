import * as React from "react";

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={14} height={18} fill="none" {...props}>
      <path
        d="M13.692 5.433L9.317 1.058a.625.625 0 00-.442-.183h-7.5a1.25 1.25 0 00-1.25 1.25v13.75a1.25 1.25 0 001.25 1.25h11.25a1.25 1.25 0 001.25-1.25v-10a.624.624 0 00-.183-.442zM9.5 3.009l2.241 2.241H9.5V3.009zm3.125 12.866H1.375V2.125H8.25v3.75a.625.625 0 00.625.625h3.75v9.375zm-3.308-4.817a.625.625 0 010 .884l-1.875 1.875a.626.626 0 01-.884 0l-1.875-1.875a.625.625 0 01.884-.884l.808.808V8.375a.625.625 0 011.25 0v3.491l.808-.808a.626.626 0 01.884 0z"
        fill="#fff"
        className="group-hover:fill-black transition-all"
      />
    </svg>
  );
}

export const File = React.memo(FileIcon);
