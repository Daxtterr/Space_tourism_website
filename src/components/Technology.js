import Nav from "./Nav";
import vehicle from "../images/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../images/technology/image-spaceport-portrait.jpg";
import capsule from "../images/technology/image-space-capsule-portrait.jpg";
import mobilecapsule from "../images/technology/image-space-capsule-landscape.jpg";
import mobilelaunch from "../images/technology/image-launch-vehicle-landscape.jpg";
import mobilespaceport from "../images/technology/image-spaceport-landscape.jpg";

import { useState } from "react";
const Technology = () => {
  const [step, setStep] = useState(0);
  return (
    <div
      className="
    bg-techmobile bg-no-repeat bg-cover text-white lg:bg-tech min-h-screen lg:h-screen  lg:overflow-hidden"
    >
      <Nav />
      <section className=" w-10/12 md:w-11/12 lg:w-9/12 mx-auto mt-10">
        <p className="barlowcon text-2xl font-bold tracking-widest text-center md:text-left">
          <span className="text-slate-600">03&nbsp;</span>
          SPACE LAUNCH 101
        </p>
        {/**LAUNCH VEHICLE */}
        {step === 0 && (
          <section className="flex flex-col-reverse lg:flex-row mt-10 lg:mt-32 justify-between items-center lg:items-start">
            <div className="space-x-4 justify-center  flex text-black mt-14 bellefair text-3xl lg:space-y-10 lg:flex-col lg:space-x-0 lg:justify-start mb-6 lg:mb-0 lg:mt-0">
              <p
                onClick={() => {
                  setStep(0);
                }}
                className="flex justify-center items-center rounded-full bg-white text-black w-[55px] h-[55px] cursor-pointer "
              >
                1
              </p>

              <p
                onClick={() => {
                  setStep(1);
                }}
                className="flex justify-center items-center rounded-full border text-white w-[55px] h-[55px] cursor-pointer"
              >
                2
              </p>
              <p
                onClick={() => {
                  setStep(2);
                }}
                className="flex justify-center items-center rounded-full border text-white w-[55px] h-[55px] cursor-pointer"
              >
                3
              </p>
            </div>
            <div className="space-y-4 text-center lg:text-left mt-10 lg:mt-0">
              <p className="barlowcon tracking-widest">THE TERMINOLOGY...</p>
              <p className="bellefair text-3xl lg:text-5xl">LAUNCH VEHICLE</p>
              <p className="barlow ">
                A launch vehicle or carrier rocket is a rocket-propelled{" "}
                <br className="hidden lg:block" /> vehicle used to carry a
                payload from Earth's surface to{" "}
                <br className="hidden lg:block" /> space, usually to Earth orbit
                or beyond. Our WEB-X <br className="hidden lg:block" /> carrier
                rocket is the most powerful in operation. Standing{" "}
                <br className="hidden lg:block" /> 150 metres tall, it's quite
                an awe-inspiring sight on the <br className="hidden lg:block" />{" "}
                launch pad!
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                className=" h-[25rem] w-[32rem]  -translate-y-28 translate-x-[12rem]"
                src={vehicle}
              />
            </div>
            <div className="lg:hidden w-screen ">
              <img src={mobilelaunch} className="w-full" />
            </div>
          </section>
        )}
        {step === 1 && (
          <section className="flex flex-col-reverse lg:flex-row mt-10 lg:mt-32 justify-between items-center lg:items-start">
            <div className="space-x-4 justify-center  flex text-black mt-14 bellefair text-3xl lg:space-y-10 lg:flex-col lg:space-x-0 lg:justify-start mb-6 lg:mb-0 lg:mt-0">
              <p
                onClick={() => {
                  setStep(0);
                }}
                className="flex justify-center items-center rounded-full border text-white w-[55px] h-[55px] cursor-pointer "
              >
                1
              </p>

              <p
                onClick={() => {
                  setStep(1);
                }}
                className="flex justify-center items-center rounded-full bg-white text-black w-[55px] h-[55px] cursor-pointer"
              >
                2
              </p>
              <p
                onClick={() => {
                  setStep(2);
                }}
                className="flex justify-center items-center rounded-full border text-white w-[55px] h-[55px] cursor-pointer"
              >
                3
              </p>
            </div>
            <div className="space-y-4 text-center lg:text-left mt-10 lg:mt-0">
              <p className="barlowcon tracking-widest">THE TERMINOLOGY...</p>
              <p className="bellefair text-3xl lg:text-5xl">SPACE PORT</p>
              <p className="barlow ">
                A spaceport or cosmodrome is a site for launching (or{" "}
                <br className="hidden lg:block" /> receiving) spacecraft, by
                analogy to the seaport for ships{" "}
                <br className="hidden lg:block" /> or airport for aircraft.
                Based in the famous Cape <br /> Canaveral, our spaceport is
                ideally situated to take <br className="hidden lg:block" />{" "}
                advantage of the Earth’s rotation for launch.
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                className="h-[25rem] w-[32rem] -translate-y-28 translate-x-[12rem]"
                src={spaceport}
              />
            </div>
            <div className="lg:hidden w-screen ">
              <img src={mobilespaceport} className="w-full" />
            </div>
          </section>
        )}
        {step === 2 && (
          <section className="flex flex-col-reverse lg:flex-row mt-10 lg:mt-32 justify-between items-center lg:items-start">
            <div className="space-x-4 justify-center flex text-black mt-14 bellefair text-3xl lg:space-y-10 lg:flex-col lg:space-x-0 lg:justify-start mb-6 lg:mb-0 lg:mt-0">
              <p
                onClick={() => {
                  setStep(0);
                }}
                className="flex justify-center items-center rounded-full border text-white w-[55px] h-[55px] cursor-pointer "
              >
                1
              </p>

              <p
                onClick={() => {
                  setStep(1);
                }}
                className="flex justify-center items-center rounded-full border text-white w-[55px] h-[55px] cursor-pointer"
              >
                2
              </p>
              <p
                onClick={() => {
                  setStep(2);
                }}
                className="flex justify-center items-center rounded-full bg-white text-black w-[55px] h-[55px] cursor-pointer"
              >
                3
              </p>
            </div>{" "}
            <div className="space-y-4 text-center lg:text-left mt-10 lg:mt-0">
              <p className="barlowcon tracking-widest">THE TERMINOLOGY...</p>
              <p className="bellefair text-3xl lg:text-5xl">SPACE CAPSULE</p>
              <p className="barlow ">
                A space capsule is an often-crewed spacecraft that uses{" "}
                <br className="hidden lg:block" /> a blunt-body reentry capsule
                to reenter the Earth's <br className="hidden lg:block" />{" "}
                atmosphere without wings. Our capsule is where you'll{" "}
                <br className="hidden lg:block" /> spend your time during the
                flight. It includes a space <br className="hidden lg:block" />{" "}
                gym, cinema, and plenty of other activities to keep you{" "}
                <br className="hidden lg:block" /> entertained.
              </p>
            </div>
            <div className="hidden lg:block">
              <img
                className="h-[25rem] w-[32rem]  -translate-y-28 translate-x-[12rem]"
                src={capsule}
              />
            </div>
            <div className="lg:hidden w-screen ">
              <img src={mobilecapsule} className="w-full" />
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default Technology;
