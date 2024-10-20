import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import Chevron from "../components/icons/Chevron";

export default function Projecten() {
  return (
    <>
      <Head>
        <title>Projecten - websidesign</title>
        <meta charSet="utf-8"></meta>
        <meta name="author" content="Websidesign"></meta>
        <meta name="keywords" content="Projecten, Projecten Websidesign"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className="h-72 lg:h-96 pt-20 lg:pt-28 relative">
          <div className="top-0 left-0 bg-[url('/blob-footer.svg')] bg-cover bg-no-repeat h-72 lg:h-96 absolute -z-10 w-full rotate-180"></div>
          <div className="container text-white">
            <h1 className="font-inter font-black text-center mb-6 leading-[55px] text-4xl sm:text-5xl sm:leading-[60px] lg:mb-10 2xl:text-6xl 2xl:leading-[75px]">
              Projecten
            </h1>
            <div className=" relative text-center flex justify-center items-center gap-4">
              <div className="inline">
                <Link
                  className="hover:opacity-70 font-inter font-bold tracking-wider duration-100"
                  href="/"
                >
                  Home
                </Link>
              </div>
              <div className="-mt-0.5">
                <Chevron />
              </div>
              <div className="inline font-inter tracking-wider">Projecten</div>
            </div>
          </div>
        </div>
        <div className="relative my-28 container">
          <div className="flex flex-wrap md:flex-row gap-4 justify-around">
            <div>
              <a
                href="https://studiosufi.com/"
                target="_blank"
                rel="noreferrer"
                title="Site studiosufi.com"
              >
                <Image
                  src="/sufi.webp"
                  width={1080}
                  height={1080}
                  alt="Schermen van de site van studiosufi.com"
                />
              </a>
            </div>
            <div>
              <a
                href="https://gedenk-sieraad.nl/"
                target="_blank"
                rel="noreferrer"
                title="Site gedenk-sieraad.nl"
              >
                <Image
                  src="/gedenk-sieraad.webp"
                  width={1080}
                  height={1080}
                  alt="Schermen van de site van gedenk-sieraad.nl"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.jewelsdesign.nl/pages/home/"
                target="_blank"
                rel="noreferrer"
                title="Site Jewelsdesign"
              >
                <Image
                  src="/jewelsdesign.webp"
                  width={1080}
                  height={1080}
                  alt="Schermen van de site van JewelsDesign"
                />
              </a>
            </div>
            <div>
              <a
                href="https://youryinyang.nl/"
                target="_blank"
                rel="noreferrer"
                title="Site youryinyang.nl"
              >
                <Image
                  src="/youryinyang.webp"
                  width={1080}
                  height={1080}
                  alt="Schermen van de site van youryinyang.nl"
                />
              </a>
            </div>
            <div>
              <a
                href="https://mlschreurs.nl/"
                target="_blank"
                rel="noreferrer"
                title="Site mlschreurs.nl"
              >
                <Image
                  src="/mlschreurs.webp"
                  width={1080}
                  height={1080}
                  alt="Schermen van de site van mlschreurs.nl"
                />
              </a>
            </div>
          </div>{" "}
        </div>
      </Layout>
    </>
  );
}
