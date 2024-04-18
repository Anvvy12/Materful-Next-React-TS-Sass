"use client";
import { FC } from "react";
import ReactCompareImage from "react-compare-image";
import "./range-card.scss";
import Image, { StaticImageData } from "next/image";

export const RangeCardSwipe: FC = () => {
  const before =
    "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg";
  const after =
    "https://hindalkindi1992.files.wordpress.com/2013/11/portrait_eyes_23.jpg";

  return <ReactCompareImage leftImage={before} rightImage={after} />;
};

export const RangeCardStatic: FC<{
  classname: string;
}> = ({ classname }) => {
  return <div className={`${classname}`}></div>;
};

export const RangeCard: FC<{
  img: StaticImageData;
  assortment: string;
  heading: string;
  description: string;
  classname: string;
}> = ({ img, assortment, heading, description, classname }) => {
  return (
    <div className={"card " + classname}>
      <Image src={img} alt="card Img" className="card__img" />
      <div className="card-footer">
        <p className="card-footer__assortment">{assortment}</p>
        <h5 className="card-footer__heading">{heading}</h5>
        <p className="card-footer__description">
          <span className="card-footer__description__text">{description}</span>
        </p>
      </div>
    </div>
  );
};
