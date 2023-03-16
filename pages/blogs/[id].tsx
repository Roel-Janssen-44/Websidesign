import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import Layout from "../../components/Layout";
import Chevron from "../../components/icons/Chevron";

import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }: { params: any }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Blog({ postData }: { postData: any }) {
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
        <div className="container min-h-[75vh] h-auto pt-20 mb-28 lg:pt-28 relative">
          <div className="text-blue max-w-4xl mx-auto mb-14 md:mb-18">
            <h1 className="font-inter font-black text-center mb-6 leading-[55px] text-4xl sm:text-5xl sm:leading-[60px] lg:mb-10 2xl:text-6xl 2xl:leading-[75px]">
              {postData.title}
            </h1>
            <div className="relative text-center flex justify-center items-center gap-4">
              <div className="inline">
                <Link
                  className="hover:opacity-70 font-inter font-bold tracking-wider duration-100"
                  href="/blogs"
                >
                  Blogs
                </Link>
              </div>
              <div className="-mt-0.5">
                <Chevron />
              </div>
              <div className="inline font-inter tracking-wider">
                {postData.title}
              </div>
            </div>
          </div>
          {/* To do martin top -X */}
          <div className="relative overflow-hidden max-w-6xl mb-14 w-full h-auto lg:h-[500px] xl:h-[600px] mx-auto">
            <img
              src={`/blogs/${postData.image}`}
              alt={postData.imageAlt}
              className="lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-full h-auto"
            />
          </div>
          <div
            className="blog_data max-w-2xl mx-auto"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </Layout>
    </>
  );
}
