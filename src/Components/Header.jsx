import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black ">
      <header className="bg-[#6B3CC9] text-white py-[26px] desktop:px-20 laptop:px-[60px] tablet:px-10 mobile:px-5 flex justify-between items-center">
        <div>
          <img src="/WhiteLogo.png"></img>
        </div>
        <button className="tablet:hidden" onClick={toggleMenu}>
          <img src="/Group2.png"></img>
        </button>
        <nav className="hidden tablet:flex">
          <ul className="flex">
            <li className="mx-4">
              <a href="#" className="font-medium text-sm">
                SERVICES
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className="font-medium text-sm">
                ABOUT US
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className="font-medium text-sm">
                CONTACT US{" "}
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className="font-medium text-sm">
                CAREERS
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <nav
        className={`tablet:hidden ${
          isOpen ? "block" : "hidden"
        } absolute w-full z-10 top-0`}
      >
        <ul className="bg-white text-black py-2 px-4 mobile:flex mobile:justify-between mobile:items-start ">
          <div>
            <li>
              <a href="#" className="font-medium text-sm">
                HOME
              </a>
            </li>

            <li className="mt-[37px]">
              <a href="#" className="font-medium text-sm">
                SERVICES
              </a>
            </li>
            <li className="my-[37px]">
              <a href="#" className="font-medium text-sm">
                ABOUT US
              </a>
            </li>
            <li className="mb-[37px]">
              <a href="#" className="font-medium text-sm">
                CONTACT US
              </a>
            </li>
            <li>
              <a href="#" className="font-medium text-sm">
                CAREERS
              </a>
            </li>
          </div>
          <button className="text-4xl" onClick={() => setIsOpen(!isOpen)}>
            x
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
