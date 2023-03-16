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
        <title>Webshop ontwikkelen - websidesign</title>
        <meta charSet="utf-8"></meta>
        <meta name="author" content="Websidesign"></meta>
        <meta
          name="keywords"
          content="Webshop, Webdevelopment, Webdesign Sittard, Webshop Sittard, Webshop ontwikkelen Sittard, Webshop laten maken, Webshop laten maken Sittard"
        ></meta>
        <meta
          name="description"
          content="Samen maken wij jouw webshop innovatief en duurzaam voor de snel veranderende maatschappij om ons heen."
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className="h-72 lg:h-96 pt-10 md:pt-20 lg:pt-28 relative">
          <div className="top-0 left-0 bg-[url('/blob-footer.svg')] bg-cover bg-no-repeat h-72 lg:h-96 absolute -z-10 w-full rotate-180"></div>
          <div className="container text-white">
            <h1 className="font-inter font-black text-center mb-6 leading-[55px] text-4xl sm:text-5xl sm:leading-[60px] lg:mb-10 2xl:text-6xl 2xl:leading-[75px]">
              Webshop ontwikkelen
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
                Webshop ontwikkelen
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-20">
          <p className="max-w-2xl mx-auto w-full text-gray">
            Als je op zoek bent naar een betrouwbare en professionele partner
            voor het maken van webshops, kijk dan niet verder. Ik ben
            gepassioneerd over wat ik doe en stel altijd de behoeften van mijn
            klanten voorop. Samen werken wij aan een op maat website die niet
            alleen mooi is, maar ook SEO-geoptimaliseerd en responsive is. Dit
            betekent dat je website goed zal scoren in de zoekresultaten van
            zoekmachines en goed zal werken op alle soorten apparaten.
          </p>
        </div>
        <ServiceCardLarge
          title="Werkwijze"
          img="/webshop.jpg"
          imgAlt="Bureau met een laptop en een kop koffie"
          paragraph="Wanneer je besluit om een webshop te laten maken, zullen we eerst een intake 
          gesprek hebben om je wensen en doelen te bespreken. Vervolgens zal ik een ontwerp 
          maken dat aansluit bij je huisstijl en doelgroep. Daarna is het tijd om de content te leveren, 
          zoals teksten en afbeeldingen. Zodra alle benodigde materialen zijn geleverd, kan ik aan de slag 
          met het realiseren van de webshop. Dit betekent dat ik de webshop bouw en test om ervoor 
          te zorgen dat alles goed werkt. Als alles naar tevredenheid is, gaat de webshop live 
          zodat het publiek de webshop kan bezoeken."
        />
        <div className="container max-w-2xl mx-auto w-full -mt-6 mb-24">
          <h3 className="max-w-2xl mx-auto w-full text-blue text-2xl font-bold font-inter mb-4">
            Wat lever jij
          </h3>
          <p className="text-gray">
            Om een succesvolle website te creëren, hebben we de volgende content
            nodig:
            <ul className="list-disc pl-5 my-3">
              <li className="mb-2">
                Foto&#39;s en videos: Deze zijn belangrijk om de website visueel
                aantrekkelijk te maken en om bezoekers te helpen bij het
                begrijpen van wat u aanbiedt.
              </li>
              <li className="mb-2">
                Teksten: De teksten op uw website zijn belangrijk voor het
                informeren van bezoekers en voor het scoren in de zoekresultaten
                van zoekmachines.
              </li>
              <li>
                Productoverzicht: Het is belangrijk om een productoverzicht te
                leveren van al je producten, inclusief afbeeldingen,
                beschrijvingen, prijzen en eventuele opties. Dit helpt bij het
                organiseren van je producten op de website en bij het maken van
                aankopen door bezoekers.
              </li>
            </ul>
          </p>
          <p className="italic mt-2 text-gray">
            Let op: de productie van de website kan pas beginnen als ik de
            content van je heb ontvangen.
          </p>
        </div>
      </Layout>
    </>
  );
}
