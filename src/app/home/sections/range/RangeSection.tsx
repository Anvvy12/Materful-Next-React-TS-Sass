import { FC } from "react";
import {
  RangeCardSwipe,
  RangeCard,
  RangeCardStatic,
} from "@/app/components/range-card/RangeCard";
import card1 from "@/img/card1img.png";
import card2 from "@/img/card2img.png";
import card3 from "@/img/card3img.png";
import card4 from "@/img/card4img.png";
import card5 from "@/img/card5img.png";
import card6 from "@/img/card6img.png";
import card7 from "@/img/card7img.png";
import card8 from "@/img/card8img.png";
import card9 from "@/img/card9img.png";
import "./range-section.scss";

const RangeSection: FC = () => {
  return (
    <article className="range-article">
      <h5 className="range-article__heading">Food & Beverage Spotlight</h5>
      <section className="range-section">
        <RangeCard
          img={card1}
          classname={"div1"}
          assortment={"Branding, Packaging Design, Content, G2M Marketing"}
          heading={"Caulikids"}
          description={
            "CauliKids is a plant-based line of healthy snacks for kids!Launching in Spring 2023"
          }
        />
        <RangeCard
          classname={"div2"}
          img={card2}
          assortment={"Content, Website, Social Media, Amazon Design"}
          heading={"Amayu"}
          description={
            "Sustainably harvested from the Peruvian Amazon, Amayu is a superfruit juice packed with vitamins and antioxidants."
          }
        />
        <div className="div3"></div>
        <RangeCard
          img={card4}
          classname={"div4"}
          assortment={"Branding, Packaging, Web & E-comm, Amazon, G2M"}
          heading={"Mezcla"}
          description={
            "Mezcla is arguably the fastest growing plant protein bar in the better-for-you space. Each bar fuses art and food, featuring ingredients and designs from around the world."
          }
        />
        <RangeCardStatic classname={"div5"} />
        <RangeCard
          classname={"div6"}
          img={card6}
          assortment={"Branding, Packaging Design, Website"}
          heading={"Toum"}
          description={
            "Toum is middle eastern garlic dip and spread made from all REAL ingredients. Suspiciously healthy and deliciously addictive, you’ll want to put it on everything. We do!"
          }
        />
        <RangeCard
          classname={"div7"}
          img={card7}
          assortment={"Branding, Packaging Design, Illustration"}
          heading={"Two Good"}
          description={
            "Matterful is proud to have worked on this innovative new line of low-sugar yogurts from Danone’s Light and Fit portfolio. Full case study coming soon!"
          }
        />
        <div className="div8"></div>
        <RangeCard
          classname={"div9"}
          img={card9}
          assortment={"Packaging Design"}
          heading={"Red Jacket Juice"}
          description={
            "Matterful redesigned several of Red Jackets core packaging products; including their premium line of Stomps as well as Joe’s Half & Half and NY-style Lemonade. Full case study coming soon."
          }
        />
        <div className="div10"></div>
        <div className="div11"></div>
        <div className="div12"></div>
      </section>
    </article>
  );
};

export default RangeSection;
