import React from "react";
import Image from "next/image";
import Link from "next/link";

type ServiceCardWithImage = {
  title: string;
  img: string;
  imgAlt: string;
  link: string;
  paragraph: string;
  direction: string;
};

export default function ServiceCardWithImage({
  title,
  img,
  imgAlt,
  link,
  paragraph,
  direction,
}: ServiceCardWithImage) {
  return (
    <div className="relative my-20 lg:my-36 mx-auto max-w-sm md:max-w-3xl">
      <div
        className={`w-full h-[500px] mx-auto md:w-7/12 ${
          direction === "left"
            ? "md:ml-[calc(100%/24)] md:float-left lg:ml-[calc(100%/24)]"
            : "md:mr-[calc(100%/24)] md:float-right lg:mr-[calc(100%/24)]"
        } `}
      >
        <Image
          src={img}
          alt={imgAlt}
          width={500}
          height={500}
          className="object-cover rounded-xl relative w-full h-full"
        />
      </div>
      <div
        className={`relative -mt-36 sm:-mt-28 bg-blue rounded-2xl text-white w-[calc(100%-50px)] mx-auto p-10 md:w-[calc(100%/12*5.5)] md:mt-0 md:absolute md:top-1/2 lg:w-5/12 
        ${
          direction === "left"
            ? "md:float-left md:left-1/2 lg:left-[calc(100%/2+(100%/24))] md:-translate-y-1/2"
            : "md:float-right md:right-1/2 lg:right-[calc(100%/2+(100%/24))] md:-translate-y-1/2"
        } `}
      >
        <h3 className="text-white text-2xl font-bold font-inter mb-8">
          {title}
        </h3>
        <p className="mb-12">{paragraph}</p>
        <div className="w-[120px]">
          <Link
            className="group flex border-white border-2 relative text-blue p-0 rounded mt-1.5 ml-1.5"
            href={link}
          >
            <span
              className="block px-6 py-2 -translate-y-1.5 -translate-x-1.5 transition-all font-bold bg-white rounded border-2 border-white scale-[1.06]
              group-hover:translate-y-0 group-hover:translate-x-0"
            >
              Ontdek
            </span>
          </Link>
        </div>
      </div>
      <div className="clear-both"></div>
    </div>
  );
}
