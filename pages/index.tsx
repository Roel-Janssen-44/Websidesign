import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Layout from "../components/Layout";
import ServiceCard from "../components/ServiceCard";
import Card from "../components/Card";
import Chevron from "../components/icons/Chevron";
import Slideshow from "../components/Slideshow";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - websidesign</title>
        <meta charSet="utf-8"></meta>
        <meta name="author" content="Websidesign"></meta>
        <meta
          name="keywords"
          content="Webdesign, online, online partner, digitale partner, Webdevelopment, Website, Webshop, Website laten maken, Website laten maken sittard, Website Sittard, Webshop Sittard, Webdevelopment, Webdesign Sittard"
        ></meta>
        <meta
          name="description"
          content="Samen maken we jouw website of webshop innovatief en duurzaam voor de snel veranderende maatschappij om ons heen."
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className="pt-14 pb-28 container sm:pb-8">
          <div className="sm:px-12 mb-20 lg:mb-12 lg:items-center lg:min-h-[70vh] lg:flex lg:flex-row lg:px-12 lg:justify-between  lg:pb-0 2xl:px-28">
            <div className="lg:w-7/12 xl:w-1/2 xl:pt-10">
              <h1 className="font-inter font-black mb-6 leading-[55px] text-4xl sm:text-5xl sm:leading-[60px] lg:mb-10 2xl:text-6xl 2xl:leading-[75px] text-blue max-w-md lg:max-w-xl 2xl:max-w-2xl">
                Webdesign <br />
                om jouw online <br />
                doelen te behalen
              </h1>
              <p className="font-montserrat max-w-sm text-gray mb-8 md:mb-4 lg:mb-16 font-normal text-lg sm:text-xl">
                Samen maken we jouw website of webshop innovatief en duurzaam
                voor de snel veranderende maatschappij om ons heen.
              </p>
              <div className="hidden lg:block w-full h-auto text-xl pb-0 -ml-20 sm:-ml-12 lg:-ml-8 justify-center max-w-sm">
                <a
                  role="presentation"
                  href="#expertises"
                  className="animate-[bounce_2s_ease-in-out_infinite]"
                >
                  <div className="rotate-90 ml-36 w-12 h-12 pb-1.5 text-blue flex scale-[2] lg:justify-center lg:items-center lg:flex-wrap">
                    <Chevron />
                    <Chevron />
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:w-5/12 xl:w-1/2" role="presentation">
              <Image
                loading="eager"
                src="./hero.svg"
                width={550}
                height={550}
                alt="Illustratie van een scherm met een man ernaast"
              />
            </div>
          </div>
          {/* Services */}
          <div className="relative mb-20 lg:mb-36 xl:pl-32 2xl:pl-64">
            <div
              id="expertises"
              className="absolute left-0 -top-32 invisible"
              aria-hidden
            ></div>
            <h2 className="text-blue text-3xl font-inter sm:text-4xl font-bold mb-8">
              Services
            </h2>
            <div className="flex flex-col gap-8 lg:flex-row lg:w-full xl:w-[87.5%] 2xl:w-[77.5%]">
              <ServiceCard
                link="services/website-ontwikkelen"
                label="Website ontwikkelen"
                description="Op zoek naar een nieuwe website?"
                backgroundColor="blue"
                headingColor="white"
                paragraphColor="white"
              />
              <ServiceCard
                link="services/webshop-ontwikkelen"
                label="Webshop ontwikkelen"
                description="Op zoek naar een nieuwe webshop?"
                backgroundColor="white"
                headingColor="blue"
                paragraphColor="gray"
              />
              <div className="items-center hidden lg:flex">
                <Link
                  href="/services"
                  className="group flex h-11 border-blue bg-white border-2 relative text-blue p-0 w-[177px] pr-[2px] rounded mt-1.5 ml-1.5"
                >
                  <div
                    className="px-4 py-3 -translate-y-2 -translate-x-0 transition-all bg-white rounded border-2 border-blue scale-[1.2] flex items-center
                    group-hover:translate-y-0 group-hover:translate-x-2"
                  >
                    <span className="w-[110px]">Meer bekijken</span>
                    <div className="mb-1.5">
                      <Chevron />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* Waarom ik */}
          <div className="mb-20 lg:mb-36">
            <div className="lg:flex lg:gap-12 lg:justify-between xl:px-32 2xl:px-64">
              <h2 className="text-blue text-3xl font-inter sm:text-4xl font-bold mb-6">
                Waarom kiezen <br />
                voor mij?
              </h2>
              <p className="font-montserrat max-w-xl text-gray mb-10 font-normal text-lg lg:mb-4 xl:mb-12 xl:max-w-[650px]">
                De behoeften van mijn klanten staan voorop. Ik bied persoonlijke
                aandacht aan elk project en werk samen met jou om een website op
                maat te creëren die niet alleen mooi is, maar ook
                SEO-geoptimaliseerd en responsive is. Dit laatste betekent dat
                jouw website goed zal scoren in de zoekresultaten van
                zoekmachines en goed zal werken op alle soorten apparaten. Of je
                nu op zoek bent naar een eenvoudige brochurewebsite of een
                geavanceerde webshop, ik heb de kennis en vaardigheden om samen
                met jou het project succesvol te voltooien.
              </p>
            </div>
            <div className="text-[#6C0123] text-[#BB9A63] text-[#6B532E] text-[#086570] text-[#008B3C] text-[#000057] text-[#6C0123] flex flex-col gap-8 sm:flex-row sm:flex-wrap xl:gap-12 xl:px-12 xl:justify-center 2xl:px-24">
              <Card
                color="#6C0123"
                img="seo"
                label="SEO-optimalisatie"
                description="Voor een hoge ranking in Google"
              />
              <Card
                color="#6B532E"
                img="maat"
                label="Op maat"
                description="Elke website die ik maak is op maat gemaakt"
              />
              <Card
                color="#086570"
                img="performance"
                label="Perfomance"
                description="Voor een razendsnelle website!"
              />
              <Card
                color="#008B3C"
                img="responsive"
                label="Responsive"
                description="Gemaakt voor elk apparaat"
              />
              <Card
                color="#000057"
                img="cms"
                label="Ingerichte CMS"
                description="Je kunt zelf de content aanpassen"
              />
              <Card
                color="#6C0123"
                img="gebruiksvriendelijk"
                label="Gebruikersvriendelijk"
                description="Het ontwerp is makkelijk te gebruiken"
              />
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div className="mb-20 lg:mb-36 relative sm:mt-12 sm:pt-12 lg:mt-8 lg:pt-0 xl:pt-4">
          <div aria-hidden className="absolute left-0 top-0">
            <div className="hidden lg:block h-[480px] scale-x-150 -translate-y-36">
              <Image
                src="./reviews-blob.svg"
                width={1920}
                height={800}
                alt="Decoratieve achtergrond illustratie"
                className="h-full scale-x-110 2xl:scale-x-150 object-fill"
              />
            </div>
            <div className="h-[700px] -translate-y-28 scale-x-[1.5] md:h-[500px] md:-translate-y-20 lg:hidden">
              <Image
                src="./reviews-blob-mobile.svg"
                width={1080}
                height={800}
                alt="Decoratieve achtergrond illustratie"
                className="h-full object-cover md:object-fill"
              />
            </div>
          </div>
          <div className="container">
            <div className="z-10 container relative md:flex md:px-0 md:gap-10 md:justify-center lg:gap-20">
              <h2 className="text-white font-inter text-3xl font-bold mb-6 sm:text-4xl">
                Ervaringen van <br />
                klanten
              </h2>
              <p className="font-montserrat max-w-sm text-white mb-10 font-normal text-lg lg:max-w-md xl:max-w-lg">
                Met trots kan ik je reviews laten zien van vorige samenwerkingen
                en hoop dat deze helpen bij het maken van een weloverwogen
                beslissing. Ik waardeer het enorm als klanten hun positieve
                ervaringen met anderen delen.
              </p>
            </div>
            <div className="md:max-w-lg mx-auto">
              <Slideshow />
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className="container mb-20 lg:mb-36 lg:-mt-8">
          <h2 className="text-blue font-inter text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 xl:ml-16 2xl:ml-48">
            Mijn meest <br />
            recente projecen
          </h2>
          <div className="flex flex-wrap md:flex-row gap-4 justify-around">
            <div>
              <a
                href="https://www.jewelsdesign.nl/pages/home/"
                target="_blank"
                rel="noreferrer"
                title="Site Jewelsdesign"
              >
                <Image
                  src="/jewelsdesign.png"
                  width={1080}
                  height={1080}
                  alt="Schermen van de site van JewelsDesign"
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
                  src="/gedenksieraad.png"
                  width={1080}
                  height={1080}
                  alt="Schermen van de site van gedenk-sieraad.nl"
                />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
