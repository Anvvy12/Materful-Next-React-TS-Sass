import { FC } from "react";
import Image from "next/image";
import CanImage from "@/img/home-can-bg.png";
import "./home.scss";

const HomeSection: FC = () => {
  return (
    <section className="home-section">
      <div className="home-section-desc-block">
        <h6 className="home-section-desc-block__heading6">
          Featured Case Study
        </h6>
        <h5 className="home-section-desc-block__heading5">Loncaro</h5>
        <p className="home-section-desc-block__paragraph">
          Check out our latest brand launch for Loncaro — the authentic long
          drink from Kuopio, Finland
        </p>
      </div>
      <div className="can-container"></div>
    </section>
  );
};

export default HomeSection;
