import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import Chevron from "../components/icons/Chevron";
import Button from "../components/Button";

export default function Navbar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const [showMobile, setShowMobile] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-40 bg-white opacity-100 ${
          navbar && !showMobile ? "shadow" : ""
        }`}
      >
        <div className="container px-4 flex justify-between py-4 sm:px-0 lg:px-8 2xl:px-16">
          <div className="w-8/12 lg:w-64 xl:w-80 flex z-50 items-center">
            <Link href="/">
              <Image
                alt="Logo WebsiDesign"
                src="/logo/logo_sideways.svg"
                width={320}
                height={41}
                className="hidden sm:block"
              />
              <Image
                alt="Logo WebsiDesign"
                src="/logo/logo.svg"
                width={60}
                height={41}
                className="sm:hidden"
              />
            </Link>
          </div>
          {/* Pc Menu */}
          <ul className="hidden lg:flex items-center">
            <li
              role="presentation"
              className="group mx-0 xl:mx-2 my-1 relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              <Link
                href="/services"
                className={`relative h-full py-2 px-8 text-blue before:bg-blue flex gap-2
                    ${
                      router.pathname == "/services"
                        ? "before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                        : ""
                    }`}
              >
                Services
                <div className="rotate-90 group-hover:-rotate-90 group-hover:-mr-2 group-hover:ml-2 transition-all">
                  <Chevron />
                </div>
              </Link>
              {dropdown && (
                <div
                  role="presentation"
                  className="absolute top-10 z-0 left-1/2 -translate-x-1/2"
                  onMouseOver={() => setDropdown(true)}
                  onFocus={() => setDropdown(true)}
                >
                  <ul
                    className={` px-8 mt-6 py-2 shadow-lg rounded-lg bg-white`}
                  >
                    <li
                      className={
                        "whitespace-nowrap relative py-3 flex justify-center text-blue"
                      }
                    >
                      <Link
                        href="/services/website-ontwikkelen"
                        className={`w-full py-2 text-center hover:opacity-60 transition-all duration-100
                          ${
                            router.pathname == "/services/website-ontwikkelen"
                              ? "before:absolute before:bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                              : ""
                          } `}
                      >
                        Website ontwikkelen
                      </Link>
                    </li>
                    <li
                      className={`whitespace-nowrap relative py-3 flex justify-center text-blue`}
                    >
                      <Link
                        href="/services/webshop-ontwikkelen"
                        className={`w-full py-2 text-center hover:opacity-60 transition-all duration-100 
                            ${
                              router.pathname == "/services/webshop-ontwikkelen"
                                ? "before:absolute before:bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                                : ""
                            } `}
                      >
                        Webshop ontwikkelen
                      </Link>
                    </li>
                    <li
                      className={`whitespace-nowrap relative py-3 flex justify-center text-blue`}
                    >
                      <Link
                        href="/services/onderhoud"
                        className={`w-full py-2 text-center hover:opacity-60 transition-all duration-100 
                            ${
                              router.pathname == "/services/webshop-ontwikkelen"
                                ? "before:absolute before:bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                                : ""
                            } `}
                      >
                        Onderhoud & hosting
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="mx-0 xl:mx-2 my-1">
              <Link
                href="/projecten"
                className={`relative hover:opacity-50 transition-opacity py-2 px-8 text-blue before:bg-blue
                  ${
                    router.pathname == "/projecten"
                      ? "before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                      : ""
                  } `}
              >
                Projecten
              </Link>
            </li>
            {/* <li className="mx-0 xl:mx-2 my-1">
              <Link
                href="/blogs"
                className={`relative py-2 px-8 text-blue before:bg-blue
                  ${
                    router.pathname == "/blog"
                      ? "before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1"
                      : ""
                  } `}
              >
                Blogs
              </Link>
            </li> */}
            <li className="mx-0 xl:mx-2 my-1 relative pl-8">
              <Button link="/contact" label="Contact" />
            </li>
          </ul>
          {/* Mobile menu */}
          <ul
            onClick={() => setShowMobile(!showMobile)}
            className="navbar-mobile lg:hidden flex z-50 flex-col justify-center py-0"
          >
            <li
              className={`w-9 h-[4px] rounded-full duration-200 bg-blue 
                ${showMobile ? "-rotate-45 -mb-[12.5px]" : "rotate-0 mt-0"} `}
            ></li>
            <li
              className={`w-9 h-[4px] rounded-full my-2 duration-200 bg-blue
                ${showMobile ? "scale-0" : "scale-100"} `}
            ></li>
            <li
              className={`w-9 h-[4px] rounded-full duration-200 bg-blue
                ${showMobile ? "rotate-45 -mt-[11px]" : "rotate-0 mt-0"} `}
            ></li>
          </ul>
          {/* Mobile menu items */}
          <div
            className={`mobile-menu-items lg:hidden left-0 duration-300 opacity-95 z-40 w-full h-screen bg-white absolute ${
              showMobile ? "-top-0" : "-top-[100vh]"
            }`}
          >
            <ul className="w-screen h-screen flex flex-col items-center justify-center">
              <li className={`text-center w-full relative my-8`}>
                <Link
                  href="/services"
                  onClick={() => setShowMobile(!showMobile)}
                  className={`text-blue font-swiss font-bold textl-lg px-16 py-8 ${
                    router.pathname == "/services"
                      ? "before:absolute before:mt-9 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1 before:bg-blue"
                      : ""
                  }`}
                >
                  Services
                </Link>
              </li>
              <li className={`text-center w-full relative my-8`}>
                <Link
                  href="/projecten"
                  onClick={() => setShowMobile(!showMobile)}
                  className={`text-blue font-swiss font-bold textl-lg px-16 py-8 ${
                    router.pathname == "/projecten"
                      ? "before:absolute before:mt-9 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1 before:bg-blue"
                      : ""
                  }`}
                >
                  Projecten
                </Link>
              </li>
              <li className={`text-center w-full relative my-8`}>
                <Link
                  href="/contact"
                  onClick={() => setShowMobile(!showMobile)}
                  className={`text-blue font-swiss font-bold textl-lg px-16 py-8 ${
                    router.pathname == "/contact"
                      ? "before:absolute before:mt-9 before:left-1/2 before:-translate-x-1/2 before:w-6 before:h-1 before:bg-blue"
                      : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
