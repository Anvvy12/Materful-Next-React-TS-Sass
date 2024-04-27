"use client";
import { FC } from "react";
import "./range-card.scss";
import Image, { StaticImageData } from "next/image";
import { ImgComparisonSlider } from "@img-comparison-slider/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation } from "swiper/modules";
import { BeforeAfterSVG } from "@/img/svg/IconsSVG";
import Avatar1 from "@/img/avatars/avatar1.jpg";
import Avatar2 from "@/img/avatars/avatar2.jpg";
import Avatar3 from "@/img/avatars/avatar3.jpg";
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
        className="coloured-slider"
        value={50}
        style={{
          width: 470,
          maxHeight: 614,
          borderRadius: "8px",
          overflow: "hidden",
          outline: "none",
        }}
      >
        <figure slot="first" className="before">
          <Image
            src={before}
            alt="before"
            style={{ backgroundSize: "contain" }}
            loading="lazy"
            width={470}
            height={583.97}
          />
          <figcaption>Before</figcaption>
        </figure>
        <figure slot="second" className="after">
          <Image
            src={after}
            alt="after"
            style={{ backgroundSize: "contain" }}
            loading="lazy"
            width={470}
            height={583.97}
          />
          <figcaption>After</figcaption>
        </figure>
        <figure slot="handle">
          <BeforeAfterSVG />
        </figure>
      </ImgComparisonSlider>
    </div>
  );
};

export const VideoCard: FC<{ classname: string; video: string }> = ({
  classname,
  video,
}) => {
  return (
    <div className={"card " + classname}>
      <video className="video" autoPlay muted loop disablePictureInPicture>
        <source src={video}></source>
      </video>
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
      <div className="img-container">
        <Image src={img} alt="card Img" className="card__img" loading="lazy" />
      </div>
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

const commentsArray = [
  {
    userAvatar: Avatar1,
    userName: "Natasha Lichty",
    userProfession: "Marketing Director , Love Beets",
    id: "1",
    userComments: (
      <p className="slide__comment">
        Matterful is more than just another design shop looking for another
        project - they REALLY care about the success of their clients. On many
        occasions, Matterful has come through in the clutch. We surely wouldn`t
        have been able to grow at the pace we have without their hard work,
        guidance and dedication.
      </p>
    ),
  },
  {
    userAvatar: Avatar3,
    userName: "Bogdan Roman ",
    userProfession: "Front-end Developer, Love React and TypeScrypt",
    id: "2",
    userComments: (
      <p className="slide__comment">
        Nice to meet you, I am a Front-end developer with 2+ years of commercial
        experience. This page was made for my portfolio, you can contact me in
        any convenient way:
        <br /> Phone: <a href="phone:+(380)95-074-41-29">
          +(380)95-074-41-29
        </a>{" "}
        <br /> Email:{" "}
        <a href="mailto:romanbs.wo@gmail.com">romanbs.wo@gmail.com</a> <br />
        <a href="https://github.com/Anvvy12">GitHub</a>,{" "}
        <a href="https://www.linkedin.com/in/bogdan-roman-b498b924b/">
          LinkedIn
        </a>
        , <a href="https://t.me/Anvvy">Telegram</a>
      </p>
    ),
  },
  {
    userAvatar: Avatar2,
    userName: "Griffin Spolansky",
    userProfession: "Founder, EatMezcla",
    id: "3",
    userComments: (
      <p className="slide__comment">
        Joey Rosa and the Matterful team have surpassed every expectation we had
        for them. We set out to hire a design firm, but with Matterful, you get
        so much more. When you hire the firm, you become a part of their family,
        and they work tirelessly to make sure that you are on the right path.
        This level of attention they give to each client, paired with their
        amazing design expertise, top quality production, connections, and deep
        industry knowledge, have made them the ideal partner for us at Mezcla. I
        would be thrilled to discuss Matterful with any prospective clients.
      </p>
    ),
  },
];

export const SwiperCard: FC<{ classname: string }> = ({ classname }) => {
  return (
    <div className={classname}>
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
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        modules={[Keyboard, Navigation]}
        className="mySwiper "
        loop={true}
      >
        {commentsArray.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="slide card">
              <div className="user-info">
                <Image
                  src={user.userAvatar}
                  alt="avatar"
                  loading="lazy"
                  className="user-info__avatar"
                />
                <h4 className="user-info__user-name">{user.userName}</h4>
                <p className="user-info__profession">{user.userProfession}</p>
              </div>
              {user.userComments}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
