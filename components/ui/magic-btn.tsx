import Link from "next/link";
import React from "react";

interface MagicBtnProps {
  icon: React.ReactNode;
  position: "left" | "right";
  otherClasses?: string;
  href: string;
}

const MagicBtn: React.FC<MagicBtnProps> = ({
  icon,
  position,
  otherClasses,
  href,
}) => {
  return (
    <a
      href={href}
      className={`inline-flex h-12 animate-shimmer w-full mt-4 sm:w-fit items-center justify-center rounded-full border
            border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] 
            px-8 font-extrabold text-slate-400 transition-colors focus:outline-double focus:ring-2 focus:ring-slate-500 
            focus:ring-offset-2 focus:ring-offset-slate-50 md:w-60 md:mt-10 gap-4 ${otherClasses}`}
      download={true}
    >
      {position == "left" && icon}
      Download CV
      {position == "right" && icon}
    </a>
  );
};

export default MagicBtn;
