import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import Form from "../components/Form";
import Chevron from "../components/icons/Chevron";

export default function Projecten() {
  return (
    <>
      <Head>
        <title>Contact - websidesign</title>
        <meta charSet="utf-8"></meta>
        <meta name="author" content="Websidesign"></meta>
        <meta name="keywords" content="Contact, Contact websidesign"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className="h-72 lg:h-96 pt-20 lg:pt-28 relative">
          <div className="top-0 left-0 bg-[url('/blob-footer.svg')] bg-cover bg-no-repeat h-72 lg:h-96 absolute -z-10 w-full rotate-180"></div>
          <div className="container text-white">
            <h1 className="font-inter font-black text-center mb-6 leading-[55px] text-4xl sm:text-5xl sm:leading-[60px] lg:mb-10 2xl:text-6xl 2xl:leading-[75px]">
              Contact
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
              <div className="inline font-inter tracking-wider">Contact</div>
            </div>
          </div>
        </div>
        <div className="relative my-28 container">
          <div className="item container mx-auto max-w-7xl">
            <div className="mb-20 md:mb-0 w-full md:px-12 md:w-7/12 md:float-left">
              <Form />
            </div>
            <div className="w-full sm:w-8/12 mx-auto md:px-12 md:w-5/12 md:float-left">
              <div className="mb-10 max-w-md mx-auto sm:float-left sm:w-1/2 md:mt-10 md:w-full lg:mt-0">
                <h4 className="text-blue font-bold font-inter text-lg w-10/12 mx-auto sm:mx-0 md:mx-auto mb-3">
                  Contactgegevens
                </h4>
                <ul className="text-gray w-10/12 mx-auto sm:mx-0 md:mx-auto">
                  <li className="mb-2 text-darkblue">+31 6 3 63 588 63</li>
                  <li className="mb-2 text-darkblue">service@websidesign.nl</li>
                  <li className="mb-2 text-darkblue">www.websidesign.nl</li>
                </ul>
              </div>
              <div className="max-w-md mx-auto sm:float-left sm:w-1/2 md:w-full">
                <h4 className="text-blue font-bold font-inter text-lg w-10/12 mx-auto sm:mx-0 md:mx-auto mb-3">
                  Locatie
                </h4>
                <ul className="text-gray w-10/12 mx-auto sm:mx-0 md:mx-auto">
                  <li className="mb-2 text-darkblue">Straatsburglaan 10</li>
                  <li className="mb-2 text-darkblue">6137 JC Sittard-Geleen</li>
                </ul>
              </div>
              <div className="clear-both"></div>
            </div>
            <div className="clear-both"></div>
          </div>
        </div>
      </Layout>
    </>
  );
}
