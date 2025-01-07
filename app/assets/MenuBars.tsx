import React from "react";
import clsx from "clsx";

function MenuBarsIcon({
  menuOpen,
  ...rest
}: React.SVGProps<SVGSVGElement> & {
  menuOpen: boolean;
}) {
  return (
    <svg width={32} height={13} fill="none" {...rest} className="group">
      {/* Top Line */}
      <line
        x1="0"
        y1="0.5"
        x2="32"
        y2="0.5"
        stroke="white"
        className={clsx("transition-transform origin-center", {
          "translate-y-[6px] rotate-45": menuOpen,
          "group-hover:translate-y-[1px]": !menuOpen,
        })}
      />
      {/* Bottom Line */}
      <line
        x1="0"
        y1="12.5"
        x2="32"
        y2="12.5"
        stroke="white"
        className={clsx("transition-transform origin-center", {
          "-translate-y-[6px] -rotate-45": menuOpen,
          "group-hover:-translate-y-[1px]": !menuOpen,
        })}
      />
    </svg>
  );
}

const MenuBars = React.memo(MenuBarsIcon);
export default MenuBars;
