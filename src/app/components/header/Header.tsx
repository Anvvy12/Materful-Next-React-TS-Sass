import { FC } from "react";
import Image from "next/image";
import "./header.scss";
import logo from "@/img/logo.png";

const Header: FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Image src={logo} alt="logo" className="nav__logo" />
        <div className="nav__block">
          <span className="nav__block__text">
            We are an all-inclusive digital branding agency that specializes in
            helping purpose-driven food companies through our brand pollination™
            process.
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
