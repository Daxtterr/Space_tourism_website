import "../styles/General.css";
import moon from "../images/destination/image-moon.png";
import mars from "../images/destination/image-mars.png";
import europa from "../images/destination/image-europa.png";
import titan from "../images/destination/image-titan.png";
import Nav from "./Nav";
import { useState } from "react";
const Destination = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-destinationmobile bg-cover min-h-screen bg-no-repeat text-white lg:h-screen lg:bg-destination">
      <Nav />
      <section className=" w-9/12 md:w-11/12 lg:w-9/12 mx-auto mt-10">
        <p className="text-center barlowcon text-2xl font-bold tracking-widest md:text-left">
          <span className="text-slate-600 ">01&nbsp;</span>
          PICK YOUR DESTINATION
        </p>
        {/**DESTINATION MOON */}
        {step === 0 && (
          <div className="flex flex-col justify-between items-center mt-12 lg:flex-row">
            <div className="">
              <img className="w-[200px] md:w-[380px]" src={moon} />
            </div>
            <div>
              <div>
                <nav className="lg:mr-[8rem] barlowcon tracking-widest space-x-8 text-xl text-slate-400 mt-12 lg:mt-0 text-center lg:text-left">
                  <span
                    onClick={() => {
                      setStep(0);
                    }}
                    className="border-b-4 border-white text-white pb-2 cursor-pointer"
                  >
                    MOON
                  </span>

                  <span
                    onClick={() => {
                      setStep(1);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    MARS
                  </span>

                  <span
                    onClick={() => {
                      setStep(2);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    EUROPA
                  </span>

                  <span
                    onClick={() => {
                      setStep(3);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    TITAN
                  </span>
                </nav>
              </div>

              <section className="mt-4">
                <p className="bellefair text-center text-[60px]  tracking-widest font-semibold lg:text-left lg:text-[80px]">
                  MOON
                </p>
                <p className="barlow text-center lg:text-left">
                  See our planet as you’ve never seen it before. A perfect{" "}
                  <br className="hidden lg:block" /> relaxing trip away to help
                  regain perspective and come <br className="hidden lg:block" />{" "}
                  back refreshed. While you’re there, take in some history{" "}
                  <br className="hidden lg:block" /> by visiting the Luna 2 and
                  Apollo 11 landing sites.
                </p>
                <hr className="my-8" />
                <div className="flex flex-col items-center text-center space-y-10 lg:space-y-0 lg:space-x-32 lg:flex-row lg:text-left mb-10 lg:mb-0">
                  <div className="flex flex-col">
                    <p className="barlowcon">AVG.&nbsp;DISTANCE</p>
                    <span className="bellefair text-2xl">384,400 KM </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="barlowcon">EST.&nbsp;TRAVEL&nbsp;TIME</p>
                    <span className="bellefair text-2xl">3 DAYS</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/**DESTINATION MARS */}
        {step === 1 && (
          <div className=" items-center flex flex-col justify-between mt-12 lg:flex-row">
            <div className="">
              <img className="w-[200px] md:w-[380px]" src={mars} />
            </div>
            <div>
              <div>
                <nav className=" text-center lg:text-left lg:mr-[8rem] barlowcon tracking-widest space-x-8 text-xl text-slate-400 mt-12 lg:mt-0">
                  <span
                    onClick={() => {
                      setStep(0);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    MOON
                  </span>

                  <span
                    onClick={() => {
                      setStep(1);
                    }}
                    className="border-b-4 border-white text-white pb-2 cursor-pointer"
                  >
                    MARS
                  </span>

                  <span
                    onClick={() => {
                      setStep(2);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    EUROPA
                  </span>

                  <span
                    onClick={() => {
                      setStep(3);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    TITAN
                  </span>
                </nav>
              </div>

              <section className="mt-4">
                <p className="bellefair text-[60px] lg:text-[80px] tracking-widest font-semibold text-center lg:text-left">
                  MARS
                </p>
                <p className="barlow text-center lg:text-left">
                  Don’t forget to pack your hiking boots. You’ll need them to{" "}
                  <br className="hidden lg:block" /> tackle Olympus Mons, the
                  tallest planetary mountain in{" "}
                  <br className="hidden lg:block" /> our solar system. It’s two
                  and a half times the size of{" "}
                  <br className="hidden lg:block" /> Everest!
                </p>
                <hr className="my-8" />
                <div className="flex flex-col items-center text-center space-y-10 lg:space-y-0 lg:space-x-32 lg:flex-row lg:text-left mb-10 lg:mb-0">
                  <div className="flex flex-col">
                    <p className="barlowcon">AVG.&nbsp;DISTANCE</p>
                    <span className="bellefair text-2xl">225 MIL. KM</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="barlowcon">EST.&nbsp;TRAVEL&nbsp;TIME</p>
                    <span className="bellefair text-2xl"> 9 MONTHS</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/**DESTINATION EUROPA */}
        {step === 2 && (
          <div className="flex flex-col lg:flex-row items-center justify-between mt-12">
            <div className="">
              <img className="w-[200px] md:w-[380px]" src={europa} />
            </div>
            <div>
              <div>
                <nav className="text-center lg:text-left lg:mr-[8rem] barlowcon tracking-widest space-x-8 text-xl text-slate-400 mt-12 lg:mt-0">
                  <span
                    onClick={() => {
                      setStep(0);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    MOON
                  </span>

                  <span
                    onClick={() => {
                      setStep(1);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    MARS
                  </span>

                  <span
                    onClick={() => {
                      setStep(2);
                    }}
                    className="border-b-4 border-white text-white pb-2 cursor-pointer"
                  >
                    EUROPA
                  </span>

                  <span
                    onClick={() => {
                      setStep(3);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    TITAN
                  </span>
                </nav>
              </div>{" "}
              <section className="mt-4">
                <p className="text-center lg:text-left bellefair text-[60px] lg:text-[80px] tracking-widest font-semibold">
                  EUROPA
                </p>
                <p className="text-center lg:text-left barlow">
                  The smallest of the four Galilean moons orbiting Jupiter,
                  <br className="hidden lg:block" /> Europa is a winter lover’s
                  dream. With an icy surface, it’s{" "}
                  <br className="hidden lg:block" /> perfect for a bit of ice
                  skating, curling, hockey, or simple{" "}
                  <br className="hidden lg:block" /> relaxation in your snug
                  wintery cabin.
                </p>
                <hr className="my-8" />
                <div className="flex flex-col items-center text-center space-y-10 lg:space-y-0 lg:space-x-32 lg:flex-row lg:text-left mb-10 lg:mb-0">
                  <div className="flex flex-col">
                    <p className="barlowcon">AVG.&nbsp;DISTANCE</p>
                    <span className="bellefair text-2xl"> 628 MIL. KM </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="barlowcon">EST.&nbsp;TRAVEL&nbsp;TIME</p>
                    <span className="bellefair text-2xl">3 YEARS</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/**DESTINATION TITAN */}
        {step === 3 && (
          <div className="flex flex-col lg:flex-row items-center justify-between mt-12">
            <div className="">
              <img className="w-[200px] md:w-[380px]" src={titan} />
            </div>
            <div>
              <div>
                <nav className="text-center lg:text-left lg:mr-[8rem] barlowcon tracking-widest space-x-8 text-xl text-slate-400 mt-12 lg:mt-0">
                  <span
                    onClick={() => {
                      setStep(0);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    MOON
                  </span>

                  <span
                    onClick={() => {
                      setStep(1);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    MARS
                  </span>

                  <span
                    onClick={() => {
                      setStep(2);
                    }}
                    className="hover:border-b-4 border-slate-600 pb-2 cursor-pointer"
                  >
                    EUROPA
                  </span>

                  <span
                    onClick={() => {
                      setStep(3);
                    }}
                    className="border-b-4 border-white text-white pb-2 cursor-pointer"
                  >
                    TITAN
                  </span>
                </nav>
              </div>{" "}
              <section className="mt-4">
                <p className="bellefair text-center lg:text-left text-[60px] lg:text-[80px]  tracking-widest font-semibold">
                  TITAN
                </p>
                <p className="barlow text-center lg:text-left">
                  The only moon known to have a dense atmosphere other{" "}
                  <br className="hidden lg:block" /> than Earth, Titan is a home
                  away from home (just a few <br className="hidden lg:block" />{" "}
                  hundred degrees colder!). As a bonus, you get striking{" "}
                  <br className="hidden lg:block" /> views of the Rings of
                  Saturn.
                </p>
                <hr className="my-8" />
                <div className="flex flex-col items-center text-center space-y-10 lg:space-y-0 lg:space-x-32 lg:flex-row lg:text-left mb-10 lg:mb-0">
                  <div className="flex flex-col">
                    <p className="barlowcon">AVG.&nbsp;DISTANCE</p>
                    <span className="bellefair text-2xl">1.6 BIL. KM </span>
                  </div>
                  <div className="flex flex-col">
                    <p className="barlowcon">EST.&nbsp;TRAVEL&nbsp;TIME</p>
                    <span className="bellefair text-2xl">7 YEARS</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Destination;
