import logo from "../images/logo.png";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/General.css";
import hamburger from "../images/icons8-menu-50 (1).png";
import close from "../images/icons8-close-30.png";

const Nav = () => {
  const refMenu = useRef(null);

  const handleMobileMenu = () => {
    refMenu.current.classList.remove("hidden");
  };

  const closeMobileMenu = () => {
    refMenu.current.classList.add("hidden");
  };

  return (
    <div className="w-11/12 lg:w-auto mx-auto">
      <nav
        id="sidebar"
        className=" lg:ml-[3rem] pt-6 flex justify-between items-center"
      >
        <div>
          <img className="h-8" src={logo} />
        </div>
        <hr className="w-5/12 translate-x-[3rem] z-10 hidden lg:block" />
        <div
          ref={refMenu}
          className="hidden absolute right-0 top-0 lg:static flex flex-col space-y-4 pl-8 md:space-y-0 h-screen pt-[1.25rem] md:h-[4.5rem] text-[16px] tracking-widest text-lg text-white barlowcon md:space-x-10 bg-white lg:pl-24 md:pr-10 lg:pr-32 bg-opacity-20 backdrop-blur-lg drop-shadow-lg md:flex-row md:flex md:transition-none  "
        >
          <div className="md:hidden mb-8 mr-4 mt-2">
            <img
              src={close}
              className="float-right h-6"
              onClick={closeMobileMenu}
            />
          </div>
          <NavLink to="/">
            <div className="h-full mr-20  md:mr-0">
              <span className="font-bold ">00</span>&nbsp;HOME
            </div>
          </NavLink>

          <NavLink to="/moon">
            <div className="h-full mr-20  md:mr-0">
              <span className="font-bold">01</span>
              &nbsp;DESTINATION
            </div>
          </NavLink>

          <NavLink to="/commander">
            <div className="h-full mr-20  md:mr-0">
              <span className="font-bold">02</span>&nbsp;CREW
            </div>
          </NavLink>
          <NavLink to="/launch">
            <div className="h-full mr-20  md:mr-0">
              <span className="font-bold">03</span>&nbsp;TECHNOLOGY
            </div>
          </NavLink>
        </div>
        <div className="md:hidden">
          <img className="h-8" src={hamburger} onClick={handleMobileMenu} />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
