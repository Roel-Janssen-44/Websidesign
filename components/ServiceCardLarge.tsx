import React from "react";
import Image from "next/image";
import Link from "next/link";

type ServiceCardWithImage = {
  title: string;
  img: string;
  imgAlt: string;
  paragraph: string;
};

export default function ServiceCardWithImage({
  title,
  img,
  imgAlt,
  paragraph,
}: ServiceCardWithImage) {
  return (
    <div className="relative my-20 md:my-28 mx-auto md:max-w-3xl">
      <div
        className="w-screen h-[350px] md:h-auto mx-auto md:w-7/12 md:ml-[calc(100%/24)] 
                   md:float-left lg:ml-0"
      >
        <Image
          src={img}
          alt={imgAlt}
          width={500}
          height={500}
          className="object-cover md:rounded-xl md:h-[600px] relative w-full h-full"
        />
      </div>
      <div
        className="container shadow-2xl w-[calc(100%-50px)] relative -mt-28 bg-white rounded-xl mx-auto p-6 
                   md:w-[calc(100%/12*5.5)] md:mt-0 md:absolute md:top-1/2 md:float-left md:left-1/2 md:-translate-y-1/2
                   lg:p-10 lg:w-7/12 lg:left-80"
      >
        <h3 className="text-blue text-2xl font-bold font-inter mb-4">
          {title}
        </h3>
        <p className="text-gray">{paragraph}</p>
      </div>
      <div className="clear-both"></div>
    </div>
  );
}
