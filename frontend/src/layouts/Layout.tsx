import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
// import Hero from "../components/Hero";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col">
      <Header />
      {/* <Hero /> */}
      <HeroBanner/>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
