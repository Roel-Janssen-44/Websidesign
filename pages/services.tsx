import React from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../components/Layout";
import ServiceCardWithImage from "../components/ServiceCardWithImage";
import Chevron from "../components/icons/Chevron";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services - websidesign</title>
        <meta charSet="utf-8"></meta>
        <meta name="author" content="Websidesign"></meta>
        <meta
          name="keywords"
          content="Services, Webdevelopment, Website, Webshop, Website laten maken, Website laten maken sittard, Website Sittard, Webshop Sittard, Webdevelopment, Webdesign Sittard"
        ></meta>
        <meta
          name="description"
          content="Samen maken we jouw website of webshop innovatief en duurzaam voor de snel veranderende maatschappij om ons heen."
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className="h-72 lg:h-96 pt-20 lg:pt-28 relative">
          <div className="top-0 left-0 bg-[url('/blob-footer.svg')] bg-cover bg-no-repeat h-72 lg:h-96 absolute -z-10 w-full rotate-180"></div>
          <div className="container text-white">
            <h1 className="font-inter font-black text-center mb-6 leading-[55px] text-4xl sm:text-5xl sm:leading-[60px] lg:mb-10 2xl:text-6xl 2xl:leading-[75px]">
              Mijn services
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
              <div className="inline font-inter tracking-wider">Services</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <ServiceCardWithImage
            title="Website ontwikkelen"
            paragraph="Samen maken we jouw website innovatief en duurzaam voor de snel 
            veranderende maatschappij om ons heen."
            img="/website-ontwikkelen.jpg"
            imgAlt="Scherm met koptelfoon ernaast"
            link="/services/website-ontwikkelen"
            direction="left"
          />
          <ServiceCardWithImage
            title="Webshop ontwikkelen"
            paragraph="Samen maken we jouw webshop innovatief en duurzaam voor de snel 
            veranderende maatschappij om ons heen."
            img="/webshop-ontwikkelen.jpg"
            imgAlt="Kop koffie met een laptop ernaast"
            link="/webshop-ontwikkelen"
            direction="right"
          />
          <ServiceCardWithImage
            title="Website onderhouden"
            paragraph="Zorgeloos je website laten onderhouden."
            img="/onderhoud.jpg"
            imgAlt="Laptop, muis en toetsenbord met een witte achtergrond"
            link="/onderhoud"
            direction="left"
          />
        </div>
      </Layout>
    </>
  );
}
