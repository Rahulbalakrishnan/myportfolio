import { useState, useEffect } from "react";
import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";
const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const handleItemClick = (section) => {
    setActiveSection(section);
  };
  const handleSetActive = (section) => {
    setActiveSection(section);
  };

  const datas = [
    { to: "home", icon: <BiHomeAlt /> },
    { to: "about", icon: <BiUser /> },
    { to: "services", icon: <BsClipboardData /> },
    { to: "work", icon: <BsBriefcase /> },
    { to: "contact", icon: <BsChatSquareText /> },
  ];
  return (
    <nav className="fixed bottom-2 lg:bottom-4 w-full overflow-hidden z-50">
      <div className="contianer mx-auto ">
        <div
          className="w-full bg-black/20 h-[50px] backdrop-blur-2xl
        rounded-full max-w-[350px] mx-auto px-4 flex justify-between items-center text-2xl text-white/50"
        >
          {datas.map((data, index) => (
            <Link
              key={index}
              to={data.to}
              activeClass="bg-transparent"
              smooth={true}
              spy={true}
              className={`cursor-pointer w-[18px] h-[18px] flex flex-col items-center justify-center focus:outline-none ${
                activeSection === data.to ? "text-purple-500" : "text-white"
              }`}
              onClick={() => handleItemClick(data.to)}
              onSetActive={() => handleSetActive(data.to)}
            >
              {data.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
