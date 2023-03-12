import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import IconChevron from "./icons/Chevron";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <a
        className="transition-all bg-white left-0 top-0 absolute p-3 m-3 -translate-y-16 focus:z-50 focus:top-0 focus:translate-y-0"
        href="#main-content"
      >
        Skip content
      </a>
      <Navbar />

      <main
        id="main-content"
        className="scroll-smooth mt-[73px] overflow-hidden"
      >
        {children}
      </main>
      <div
        className={`fixed z-40 transition-opacity bg-blue shadow-xl border-2 border-white rounded text-white w-12 h-12 bottom-8 right-8 
        ${scrollPosition > 10 ? "opacity-100" : "opacity-0"}`}
      >
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="w-full h-full flex justify-center items-center"
        >
          <div className="-rotate-90 flex mr-1.5 mb-0.5 items-center">
            <IconChevron />
          </div>
        </button>
      </div>
      <Footer />
    </>
  );
}
