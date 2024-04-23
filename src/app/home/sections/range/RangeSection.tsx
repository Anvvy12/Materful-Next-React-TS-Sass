import { FC } from "react";
import {
  RangeCardSwipe,
  RangeCard,
  RangeCardStatic,
  SwiperCard,
  VideoCard,
} from "@/app/components/range-card/RangeCard";
import card1 from "@/img/card1img.jpg";
import card2 from "@/img/card2img.jpg";
import card3 from "@/img/card3img.png";
import card4 from "@/img/card4img.jpg";
import card5 from "@/img/card5img.jpg";
import card6 from "@/img/card6img.jpg";
import card7 from "@/img/card7img.jpg";
import card8 from "@/img/card8img.png";
import card9 from "@/img/card9img.jpg";
import card10 from "@/img/card10img.png";
import card11 from "@/img/card11img.jpg";
import card12 from "@/img/card12img.jpg";
import Before from "@/img/before1.jpg";
import After from "@/img/after1.png";
import "./range-section.scss";

const RangeSection: FC = () => {
  return (
    <article className="range-article">
      <h5 className="range-article__heading">Food & Beverage Spotlight</h5>
      <section className="range-section">
        <VideoCard
          classname={"div1"}
          video={
            "https://matterfulbrands.com/wp-content/uploads/2022/12/mezcla-mobile-2.mp4"
          }
        />
        <RangeCard
          img={card1}
          classname={"div2"}
          assortment={"Branding, Packaging Design, Content, G2M Marketing"}
          heading={"Caulikids"}
          description={
            "CauliKids is a plant-based line of healthy snacks for kids!Launching in Spring 2023"
          }
        />
        <RangeCard
          classname={"div3"}
          img={card2}
          assortment={"Content, Website, Social Media, Amazon Design"}
          heading={"Amayu"}
          description={
            "Sustainably harvested from the Peruvian Amazon, Amayu is a superfruit juice packed with vitamins and antioxidants."
          }
        />
        <RangeCardSwipe classname="div4" after={After} before={Before} />

        <RangeCard
          img={card4}
          classname={"div5"}
          assortment={"Branding, Packaging, Web & E-comm, Amazon, G2M"}
          heading={"Mezcla"}
          description={
            "Mezcla is arguably the fastest growing plant protein bar in the better-for-you space. Each bar fuses art and food, featuring ingredients and designs from around the world."
          }
        />

        <RangeCardStatic classname={"div6"} />
        <RangeCard
          classname={"div7"}
          img={card6}
          assortment={"Branding, Packaging Design, Website"}
          heading={"Toum"}
          description={
            "Toum is middle eastern garlic dip and spread made from all REAL ingredients. Suspiciously healthy and deliciously addictive, you’ll want to put it on everything. We do!"
          }
        />
        <VideoCard
          classname={"div8"}
          video={
            "https://matterfulbrands.com/wp-content/uploads/2022/12/loncaro-mobile.mp4"
          }
        />

        <RangeCard
          classname={"div9"}
          img={card7}
          assortment={"Branding, Packaging Design, Illustration"}
          heading={"Two Good"}
          description={
            "Matterful is proud to have worked on this innovative new line of low-sugar yogurts from Danone’s Light and Fit portfolio. Full case study coming soon!"
          }
        />

        <div className="div10">pack swiper</div>
        <RangeCard
          classname={"div11"}
          img={card9}
          assortment={"Packaging Design"}
          heading={"Red Jacket Juice"}
          description={
            "Matterful redesigned several of Red Jackets core packaging products; including their premium line of Stomps as well as Joe’s Half & Half and NY-style Lemonade. Full case study coming soon."
          }
        />
        <SwiperCard classname={"div12"} />
        <div className="div13"></div>
        <RangeCard
          classname={"div13"}
          img={card11}
          assortment={"Packaging Design"}
          heading={"Love Beets"}
          description={
            "Matterful recently helped Love Beets design an eco-friendly version of packaging design for their popular Cooked Beets sku. Look-out for these fun and whimsical packs in Target, Costco and other high-profile retailers nationwide!"
          }
        />
        <RangeCardStatic classname={"div14"} />
      </section>
    </article>
  );
};

export default RangeSection;
