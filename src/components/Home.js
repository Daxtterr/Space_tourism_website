import "../styles/General.css";
import Nav from "./Nav";
import explore from "../images/home/explorehome.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-cover bg-homemobile bg-no-repeat lg:bg-home h-screen ">
      <Nav />
      <section className="text-center lg:text-left w-11/12 mx-auto flex flex-col lg:flex-row justify-between items-center md:w-9/12 lg:ml-[9.5rem] mt-[4rem] md:mt-[9rem]">
        <div>
          <span className="tracking-wide barlow md:text-[22px] text-white">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <p className="tracking-tight text-[79px] bellefair text-white lg:text-[110px]">
            SPACE
          </p>
          <span className="text-white barlow text-[14px] lg:text-[15px] ">
            Let’s face it; if you want to go to space, you might as well{" "}
            <br className="hidden md:block" /> genuinely go to outer space and
            not hover kind of on the <br className="hidden md:block" /> edge of
            it. Well sit back, and relax because we’ll give you a{" "}
            <br className="hidden md:block" />
            truly out of this world experience.
          </span>
        </div>
        <Link to="/moon">
          <div className="mt-[4rem] md:mt-[6rem]">
            <img className="h-48 hover:opacity-80" src={explore} />
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Home;
