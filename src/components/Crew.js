import Nav from "./Nav";
import douglas from "../images/crew/image-douglas-hurley.png";
import mark from "../images/crew/image-mark-shuttleworth.png";
import victor from "../images/crew/image-victor-glover.png";
import anousheh from "../images/crew/image-anousheh-ansari.png";

import { useState } from "react";
const CrewCommander = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="bg-crewmobile bg-no-repeaat bg-cover lg:bg-crew md:h-screen bg-left text-white overflow-hidden">
      <Nav />
      <section className=" w-11/12 lg:w-9/12 mx-auto mt-10">
        <p className=" barlowcon text-2xl font-bold tracking-widest text-center md:text-left ">
          <span className="text-slate-600 ">02&nbsp;</span>
          MEET YOUR CREW
        </p>

        {/**COMMANDER */}
        {step === 0 && (
          <section className="text-center lg:text-left mt-16 flex flex-col-reverse  lg:flex-row justify-between items-center lg:items-start">
            <div className="mt-12 lg:mt-0">
              <div className="flex space-x-5 justify-center lg:justify-normal mb-10">
                <div
                  onClick={() => {
                    setStep(0);
                  }}
                  className="bg-white w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(1);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(2);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(3);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>
              </div>
              <p className="lg:text-2xl text-xl bellefair">COMMANDER</p>
              <p className="text-3xl lg:text-5xl bellefair my-8">
                DOUGLAS HURLEY
              </p>
              <p className="mb-10 mb:hidden">
                Douglas Gerald Hurley is an American engineer, former{" "}
                <br className="hidden md:block" /> Marine Corps pilot and former
                NASA astronaut. He <br className="hidden md:block" /> launched
                into space for the third time as commander of{" "}
                <br className="hidden md:block" /> Crew Dragon Demo-2.
              </p>
            </div>
            <hr className="lg:hidden w-[19rem]" />
            <div className="lg:mr-10">
              <img
                className="h-[300px] lg:h-[480px] lg:-translate-y-20"
                src={douglas}
              />
            </div>
          </section>
        )}

        {/**MISSION SPECIALIST */}
        {step === 1 && (
          <section className="text-center lg:text-left mt-16 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start">
            <div className="mt-12 lg:mt-0">
              <div className="flex space-x-5 justify-center lg:justify-normal mb-10">
                <div
                  onClick={() => {
                    setStep(0);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(1);
                  }}
                  className="bg-white w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(2);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(3);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>
              </div>
              <p className="lg:text-2xl text-xl bellefair">
                MISSION SPECIALIST
              </p>
              <p className="text-3xl lg:text-5xl bellefair my-8">
                MARK SHUTTLEWORTH
              </p>
              <p className="mb-10 mb:hidden">
                Mark Richard Shuttleworth is the founder and CEO of{" "}
                <br className="hidden md:block" /> Canonical, the company behind
                the Linux-based Ubuntu <br className="hidden md:block" />{" "}
                operating system. Shuttleworth became the first South{" "}
                <br className="hidden md:block" /> African to travel to space as
                a space tourist.
              </p>
            </div>
            <hr className="lg:hidden w-[19rem]" />
            <div className="mr-10">
              <img
                className="h-[300px] lg:h-[480px] lg:-translate-y-20"
                src={mark}
              />
            </div>
          </section>
        )}

        {/**PILOT */}
        {step === 2 && (
          <section className="text-center lg:text-left mt-16 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start">
            <div className="mt-12 lg:mt-0">
              <div className="flex space-x-5 justify-center lg:justify-normal mb-10">
                <div
                  onClick={() => {
                    setStep(0);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(1);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(2);
                  }}
                  className="bg-white w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(3);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>
              </div>
              <p className="lg:text-2xl text-xl bellefair">PILOT</p>
              <p className="text-3xl lg:text-5xl bellefair my-8">
                VICTOR GLOVER
              </p>
              <p className="mb-10 mb:hidden">
                Pilot on the first operational flight of the SpaceX Crew Dragon{" "}
                <br className="hidden md:block" /> to the International Space
                Station. Glover is a commander in the{" "}
                <br className="hidden md:block" /> U.S. Navy where he pilots an
                F/A-18. He was a crew member <br className="hidden md:block" />{" "}
                of Expedition 64, and served as a station systems flight
                engineer.
              </p>
            </div>
            <hr className="lg:hidden w-[19rem]" />
            <div className="mr-10">
              <img
                className="h-[300px] lg:h-[480px] lg:-translate-y-20"
                src={victor}
              />
            </div>
          </section>
        )}

        {/**ENGINEER */}
        {step === 3 && (
          <section className="text-center lg:text-left mt-16 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start">
            <div className="mt-12 lg:mt-0">
              <div className="flex space-x-5  justify-center lg:justify-normal mb-10">
                <div
                  onClick={() => {
                    setStep(0);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(1);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(2);
                  }}
                  className="bg-slate-700 w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>

                <div
                  onClick={() => {
                    setStep(3);
                  }}
                  className="bg-white w-[15px] h-[15px] rounded-full cursor-pointer"
                >
                  &nbsp;
                </div>
              </div>
              <p className="lg:text-2xl text-xl bellefair">FLIGHT ENGINEER</p>
              <p className="text-3xl lg:text-5xl bellefair my-8">
                ANOUSHEH ANSARI
              </p>
              <p className="mb-10 mb:hidden">
                Anousheh Ansari Anousheh Ansari is an Iranian American engineer
                and <br className="hidden md:block" /> co-founder of Prodea
                Systems. Ansari was the fourth{" "}
                <br className="hidden md:block" /> self-funded space tourist,
                the first self-funded woman to{" "}
                <br className="hidden md:block" /> fly to the ISS, and the first
                Iranian in space.
              </p>
            </div>
            <hr className="lg:hidden w-[21rem]" />

            <div className="mr-10">
              <img
                className="h-[300px] lg:h-[480px] lg:-translate-y-20"
                src={anousheh}
              />
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default CrewCommander;
