import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
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
      <Footer />
    </>
  );
}
