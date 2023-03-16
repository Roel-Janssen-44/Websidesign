import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Layout from "../components/Layout";
import Chevron from "../components/icons/Chevron";
import Button from "../components/Button";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Projecten({ allPostsData }: { allPostsData: any }) {
  const [items, setItems] = useState(allPostsData.map((post: any) => post));

  // Comparison function to sort items by date
  function compareByDate(item1: any, item2: any) {
    const [day1, month1, year1] = item1.date.split("-");
    const [day2, month2, year2] = item2.date.split("-");
    const date1: any = new Date(`${year1}-${month1}-${day1}`);
    const date2: any = new Date(`${year2}-${month2}-${day2}`);
    return date1 - date2;
  }

  // Sort the items array by date
  const sortedItems = items.sort(compareByDate);
  return (
    <>
      <Head>
        <title>Blogs - websidesign</title>
        <meta charSet="utf-8"></meta>
        <meta name="author" content="Websidesign"></meta>
        <meta name="keywords" content="Blog, Blogs, Blogs websidesign"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <div className="h-72 lg:h-96 pt-20 lg:pt-28 relative mb-14 md:mb-18">
          <div className="top-0 left-0 bg-[url('/blob-footer.svg')] bg-cover bg-no-repeat h-72 lg:h-96 absolute -z-10 w-full rotate-180"></div>
          <div className="container text-white">
            <h1 className="font-inter font-black text-center mb-6 leading-[55px] text-4xl sm:text-5xl sm:leading-[60px] lg:mb-10 2xl:text-6xl 2xl:leading-[75px]">
              All Blogs
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
              <div className="inline font-inter tracking-wider">Blogs</div>
            </div>
          </div>
        </div>
        <div className="container relative min-h-screen">
          <ul className="grid grid-cols-3 auto-rows-auto lg:auto-rows-fr lg:grid-row-6 gap-10">
            {sortedItems?.map(
              (
                {
                  id,
                  date,
                  time,
                  title,
                  image,
                  imageAlt,
                  intro,
                }: {
                  id: any;
                  date: string;
                  time: string;
                  title: string;
                  image: string;
                  imageAlt: string;
                  intro: string;
                },
                index: any
              ) => (
                <div
                  key={id}
                  className={`relative p-2 pb-5 w-full rounded-lg col-span-3 border-2 border-blue ${
                    index === 0 || index === 3 || index === 6
                      ? "lg:row-span-3 lg:col-span-2"
                      : "lg:row-span-2 lg:col-span-1"
                  }`}
                >
                  <Link
                    className="relative flex flex-col group h-full"
                    href={`/blogs/${id}`}
                  >
                    <img
                      className=" rounded-md"
                      src={`/blogs/${image}`}
                      alt={imageAlt}
                    />
                    <div className="pl-4 pt-4">
                      <div className="flex content-center mb-3">
                        <span className="text-gray text-xs">{time} lezen</span>
                        <span className="ml-3 flex justify-center items-center">
                          <div className="w-1 h-1 bg-gray rounded-full"></div>
                        </span>
                        <span className="text-gray text-xs ml-3">{date}</span>
                      </div>
                      <h4 className="text-xl text-blue font-bold font-inter mb-2">
                        {title}
                      </h4>
                      <p className="text-gray mb-6">{intro}</p>
                      <div className="w-[144px]">
                        <div className=" flex border-blue border-2 relative text-white p-0 rounded mt-1.5 ml-1.5">
                          <span
                            className="block px-6 py-2 -translate-y-1.5 -translate-x-1.5 transition-all font-bold bg-blue rounded scale-[1.06]
              group-hover:translate-y-0 group-hover:translate-x-0"
                          >
                            Lees verder
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
          </ul>
        </div>
      </Layout>
    </>
  );
}
