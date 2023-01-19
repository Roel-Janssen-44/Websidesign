import React from "react";
import Link from "next/link";

import Chevron from "./icons/Chevron";

type seriviceCardProps = {
  link: string;
  label: string;
  description: string;
  backgroundColor: string;
  headingColor: string;
  paragraphColor: string;
};

export default function SeriviceCard({
  link,
  label,
  description,
  backgroundColor,
  headingColor,
  paragraphColor,
}: seriviceCardProps) {
  return (
    <div
      className={`bg-transparent group border-blue border-2 rounded-lg mt-2 ml-2 w-full max-w-md`}
    >
      <Link href={link}>
        <div
          className={`block py-4 px-5 w-[99%] -translate-y-2 -translate-x-2 bg-${backgroundColor} transition-all rounded-lg border-2 border-blue
        group-hover:translate-y-0 group-hover:translate-x-0 scale-[1.03]`}
        >
          <h3
            className={`text-blue text-${headingColor} text-xl font-bold font-inter mb-2`}
          >
            {label}
          </h3>
          <p className={` text-${paragraphColor} mb-2`}>{description}</p>
          <div
            className={`text-blue text-${headingColor} font-bold flex items-center text-lg`}
          >
            <span className="mt-1 mr-4">Ontdek</span>
            <Chevron />
          </div>
        </div>
      </Link>
    </div>
  );
}
