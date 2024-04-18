"use client";
import { FC } from "react";
import "./range-card.scss";
import Image, { StaticImageData } from "next/image";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const RangeCardSwipe: FC<{
  classname: string;
  after: StaticImageData;
  before: StaticImageData;
}> = ({ classname, before, after }) => {
  return (
    <div className={classname}>
      <ImgComparisonSlider
        style={{
          width: 470,
          maxHeight: 614,
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Image
          slot="first"
          src={before}
          alt="before"
          style={{ backgroundSize: "cover" }}
        />
        <Image
          slot="second"
          src={after}
          alt="after"
          style={{ backgroundSize: "cover" }}
        />
      </ImgComparisonSlider>
    </div>
  );
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

const comentsArray = [
  {
    userAvatar: "",
    userName: "Natasha Lichty",
    userProfession: "Marketing Director , Love Beets",
    userComments:
      "Matterful is more than just another design shop looking for another project - they REALLY care about the success of their clients. On many occasions, Matterful has come through in the clutch. We surely wouldn't have been able to grow at the pace we have without their hard work, guidance and dedication.",
  },
];

export const SwiperCard: FC = () => {
  return (
    <div className="div10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="mySwiper "
        loop={true}
      >
        <SwiperSlide>
          <div className="swiper-slide">sssss</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">sssss</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">sssss</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
