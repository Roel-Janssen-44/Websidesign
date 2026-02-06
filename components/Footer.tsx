import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-16 lg:pt-32 pb-4 relative bg-[url('/blob-footer.svg')] bg-cover bg-no-repeat bg-bottom sm:pt-28 sm:bg-right-bottom xl:bg-top">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-gray">
        <div className="mt-6 mb-12 lg:ml-16 lg:mb-16 xl:ml-28">
          <h2 className="text-white font-inter text-3xl font-bold mb-6 sm:text-4xl">
            Benieuwd naar <br />
            de mogelijkheden?
          </h2>
          <p className="font-montserrat max-w-sm text-white mb-10 font-normal text-lg">
            Neem vrijblijvend contact met mij op.
          </p>
          <div className="w-32 pr-1.5">
            <Link
              className="group flex border-white border-2 relative text-blue p-0 rounded mt-1.5 ml-1.5"
              href="/contact"
            >
              <span
                className="block font-bold font-inter px-6 py-2 -translate-y-1.5 -translate-x-1.5 transition-all bg-white rounded border-2 border-white scale-[1.045]
              group-hover:translate-y-0 group-hover:translate-x-0"
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
        <ul className="text-lg font-light pb-4 flex flex-wrap ">
          <li className="w-7/12 mb-12 sm:w-4/12">
            <div className="text-left lg:text-left lg:flex lg:justify-center lg:items-center lg:flex-col">
              <div>
                <h2 className="text-white font-swiss font-bold mb-2">
                  Contact
                </h2>
                <ul className="text-white opacity-60">
                  <li className="mb-4">Terhagen 7</li>
                  <li className="mb-4">6181HR ELSLOO LB</li>
                  <li className="mb-4">+31 6 363 588 63</li>
                  <li className="mb-4">service@websidesign.nl</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="w-5/12 mb-12 sm:w-4/12">
            <div className="text-left lg:text-left lg:flex lg:justify-center lg:items-center lg:flex-col">
              <div>
                <h2 className="text-white font-swiss font-bold mb-2">
                  {"Pagina's"}
                </h2>
                <ul className="text-white">
                  <li className="mb-4">
                    <Link
                      className="py-3 opacity-60 hover:opacity-100 transition-opacity"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="py-3 opacity-60 hover:opacity-100 transition-opacity"
                      href="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="py-3 opacity-60 hover:opacity-100 transition-opacity"
                      href="/projecten"
                    >
                      Projecten
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="py-3 opacity-60 hover:opacity-100 transition-opacity"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="w-full md:mb-0 mt-0 sm:w-4/12">
            <div className="text-left lg:text-left lg:flex lg:justify-center lg:items-center lg:flex-col">
              <div>
                <h2 className="text-white font-swiss font-bold mb-2">
                  Algemeen
                </h2>
                <ul className="text-white">
                  <li className="mb-4">
                    <Link
                      className="py-3 opacity-60 hover:opacity-100 transition-opacity"
                      href="/algemene-voorwaarden"
                    >
                      Algemene voorwaarden
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link
                      className="py-3 opacity-60 hover:opacity-100 transition-opacity"
                      href="/privacy-verklaring"
                    >
                      Privacy verklaring
                    </Link>
                  </li>
                  <li className="mb-4 opacity-60">Kvk nr. 86 78 61 72</li>
                  <li className="mb-4 opacity-60">Btw nr. NL004312576B81</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <hr className="w-full h-0.5 opacity-60 bg-white mx-auto" />
        <div className="text-white opacity-60 pt-4 sm:pt-8 font-light flex justify-between">
          <p>Copyright © {new Date().getFullYear()} Websidesign</p>
          <div className="flex w-[75px] opacity-60 items-center justify-between">
            <a
              aria-label="Linkedin pagina"
              href="https://www.linkedin.com/in/roel-janssen-7738441b1/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="20"
                height="20"
                fill="#fff"
                className="text-xl opacity-90 cursor-pointer hover:opacity-60 transition-all duration-100"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
