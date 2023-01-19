import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Navbar />
      <main className="scroll-smooth mt-[73px] overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
}
