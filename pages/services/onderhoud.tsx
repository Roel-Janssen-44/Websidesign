import React from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/Layout";
import ServiceCardLarge from "../../components/ServiceCardLarge";
import Chevron from "../../components/icons/Chevron";

export default function Projecten() {
  return (
    <>
      <Head>
        <title>Onderhoud & hosting - websidesign</title>
        <meta charSet="utf-8"></meta>
        <meta name="author" content="Websidesign"></meta>
        <meta
          name="keywords"
          content="Onderhoud, Onderhoud Websidesign, Onderhouden website, hosting, hosting websidesign, Hosten website"
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className="h-72 lg:h-96 pt-10 md:pt-20 lg:pt-28 relative">
          <div className="top-0 left-0 bg-[url('/blob-footer.svg')] bg-cover bg-no-repeat h-72 lg:h-96 absolute -z-10 w-full rotate-180"></div>
          <div className="container text-white">
            <h1 className="font-inter font-black text-center mb-6 leading-[55px] text-4xl sm:text-5xl sm:leading-[60px] lg:mb-10 2xl:text-6xl 2xl:leading-[75px]">
              Onderhoud & hosting
            </h1>
            <div className=" relative text-center flex flex-wrap justify-center items-center gap-4">
              <div className="">
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
              <div className="">
                <Link
                  className="hover:opacity-70 font-inter font-bold tracking-wider duration-100"
                  href="/services"
                >
                  Services
                </Link>
              </div>
              <div className="-mt-0.5">
                <Chevron />
              </div>
              <div className="text-left font-inter tracking-wider">
                Onderhoud & hosting
              </div>
            </div>
          </div>
        </div>
        <div className="container my-20 lg:my-36">
          <p className="max-w-2xl mx-auto w-full text-gray">
            Een goed onderhouden website of webshop is van groot belang voor het
            behoud van bezoekers en inkomsten. Door regelmatig onderhoud te
            verrichten, voorkom je problemen die de gebruikerservaring negatief
            zouden kunnen beïnvloeden. Bovendien is het belangrijk om de content
            op jouw website of webshop actueel te houden, door bijvoorbeeld
            nieuwe producten toe te voegen of teksten te wijzigen. Dit houdt de
            website of webshop interessant voor bezoekers en zorgt ervoor dat ze
            terugkomen. Kortom, het onderhouden van uw website of webshop is
            cruciaal voor het behoud van een goede reputatie en om te blijven
            groeien.
          </p>
        </div>
      </Layout>
    </>
  );
}
