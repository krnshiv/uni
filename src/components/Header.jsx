import React from "react";
import Logo from "../assets/Logo";

function Header(props) {
  return (
    <header className="absolute z-[15] mx-auto w-full">
      <div className="bg-transparent">
        <div className="flex items-center justify-between w-full max-w-[1330px] mx-auto px-[45px]">
          <div className="cursor-pointer">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
