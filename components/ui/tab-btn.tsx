import React from "react";

interface TabBtnProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabBtn: React.FC<TabBtnProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "mr-3 font-semibold text-purple-400 border-b border-purple-700"
    : " text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabBtn;
