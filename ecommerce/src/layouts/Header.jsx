import React from "react";
//Components
import Navbar from "../components/Navbar";

export default function Header(props) {
  const { setConfirm } = props;
  return (
    <div>
      <Navbar setConfirm={setConfirm} />
    </div>
  );
}
