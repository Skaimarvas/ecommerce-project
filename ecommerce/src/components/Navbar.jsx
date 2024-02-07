import React from "react";
//Components
import NavbarDark from "./NavbarDark";

export default function Navbar(props) {
  const { setConfirm } = props;
  return (
    <div className="flex flex-col gap-[12px] pb-[8px]">
      <NavbarDark />
    </div>
  );
}
