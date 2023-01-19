import React from "react";
import Image from "next/image";

type cardProps = {
  color: string;
  img: string;
  label: string;
  description: string;
};

export default function Card({ color, img, label, description }: cardProps) {
  return (
    <div
      className={`bg-transparent w-64 mx-auto rounded-lg shadow-xl p-4 pb-20 mb-20 sm:pb-2 sm:mb-0 sm:rounded-2xl lg:h-64 xl:w-72 xl:mx-0 xl:px-6 xl:py-6 xl:h-[270px]
                  ${img === "maat" || img === "cms" ? "lg:mt-12" : ""}`}
    >
      <h4 className={`text-[${color}] text-xl font-bold font-inter mb-2`}>
        {label}
      </h4>
      <p className={`text-gray mb-2`}>{description}</p>
      <div
        aria-hidden
        className="w-36 absolute sm:relative p-4 bg-white shadow-lg left-1/2 -translate-x-1/2 mt-2 rounded-lg sm:shadow-none"
      >
        <Image
          src={`./${img}.svg`}
          width={500}
          height={500}
          alt={`Illustratie van ${label}`}
        />
      </div>
    </div>
  );
}
