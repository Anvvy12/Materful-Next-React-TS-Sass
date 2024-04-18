import { FC } from "react";
import Header from "./components/header/Header";
import HomeSection from "./home/sections/home/HomeSection";
import RangeSection from "./home/sections/range/RangeSection";
import "./page.scss";

const Home: FC = () => {
  return (
    <>
      <Header />
      <main className="page">
        <HomeSection />
        <RangeSection />
      </main>
    </>
  );
};

export default Home;
