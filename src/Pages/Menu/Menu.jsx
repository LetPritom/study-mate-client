import React from "react";
// import { FaUser } from "react-icons/fa6";

const Menu = ({children , icon , title}) => {
  return (
    <div>
      <li>
        <button
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right hover:bg-[#f55a00]/20 rounded-xl text-gray-800"
          data-tip={title}
        >
          {/* user icon*/}
          <div className="icon text-md">{icon}</div>
          
          <span className={`is-drawer-close:hidden text-md font-semibold`}>{children}</span>
        </button>
      </li>
    </div>
  );
};

export default Menu;
