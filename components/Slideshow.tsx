import React, { useRef, useState } from "react";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Chevron from "./icons/Chevron";
import Star from "./icons/Star";

export default function SlideShow() {
  const [sliderRef, setSliderRef] = useState<null>(null);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    // height: true,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 0,
        settings: {
          arrows: true,
        },
      },
    ],
  };
  return (
    <div className="relative sm:container text-white w-full">
      {/* @ts-ignore */}
      <Slider ref={setSliderRef} {...sliderSettings}>
        <div className="border-2 border-blue shadow bg-white p-6 pb-12 mb-6 rounded-lg relative">
          <p className="text-blue text-xl font-bold font-inter mb-4 text-center">
            Anja - JewelsDesign
          </p>
          <p className="text-gray">
            Ik ben zo blij met de website die ik heb laten maken door
            Websidesign. Het was een prettige ervaring om samen te werken met
            Roel, en het resultaat was beter dan ik had verwacht. De website is
            gebruiksvriendelijk, professioneel en precies wat ik wilde. Ik kan
            Websidesign aan iedereen aanbevelen die op zoek is naar een
            betrouwbare websitebouwer.
          </p>
          <div className="text-yellow-500 text-3xl px-3 py-3 absolute left-[16.0%] bottom-0 translate-y-1/2 flex flex-row justify-around border-2 border-blue w-8/12 rounded-md bg-white">
            <span>
              <Star />
            </span>
            <span>
              <Star />
            </span>
            <span>
              <Star />
            </span>
            <span>
              <Star />
            </span>
            <span>
              <Star />
            </span>
          </div>
        </div>
        <div className="border-2 border-blue shadow bg-white p-6 pb-12 mb-6 rounded-lg relative">
          <p className="text-blue text-xl font-bold font-inter mb-4 text-center">
            gedenk-sieraad.nl
          </p>
          <p className="text-gray">
            Wij zijn ontzettend tevreden met de webshop. Vanaf het begin was het
            duidelijk dat er veel aandacht werd besteed aan onze wensen en
            eisen. De website is snel en mooi vormgegeven.
          </p>
          <div className="text-yellow-500 text-3xl px-3 py-3 absolute left-[16.0%] bottom-0 translate-y-1/2 flex flex-row justify-around border-2 border-blue w-8/12 rounded-md bg-white">
            <span>
              <Star />
            </span>
            <span>
              <Star />
            </span>
            <span>
              <Star />
            </span>
            <span>
              <Star />
            </span>
            <span>
              <Star />
            </span>
          </div>
        </div>
      </Slider>
      <div className="w-10/12 mx-auto flex flex-row justify-around mt-8">
        <button
          aria-label="Vorige slide"
          className="group flex border-blue bg-white border-2 relative text-blue p-0 pr-[2px] rounded mt-1.5 ml-1.5 md:absolute md:-left-12 md:top-[40%]"
          // @ts-expect-error
          onClick={sliderRef?.slickPrev}
        >
          <div
            className="px-4 py-3 pb-4 -translate-y-2 -translate-x-2 transition-all bg-white rounded border-2 border-blue scale-[1.2] flex
            group-hover:translate-y-0 group-hover:translate-x-0"
          >
            <span className="translate-y-3/4 rotate-180">
              <Chevron />
            </span>
          </div>
        </button>
        <button
          aria-label="Volgende slide"
          // @ts-expect-error
          onClick={sliderRef?.slickNext}
          className="group flex border-blue bg-white border-2 relative text-blue p-0 pr-[2px] rounded mt-1.5 ml-1.5 md:absolute md:-right-12 md:top-[40%]"
        >
          <div
            className="px-4 py-3 pb-4 -translate-y-2 -translate-x-2 transition-all bg-white rounded border-2 border-blue scale-[1.2] flex
                       group-hover:translate-y-0 group-hover:translate-x-0"
          >
            <Chevron />
          </div>
        </button>
      </div>
    </div>
  );
}
