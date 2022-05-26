import React from "react";
import Hero from "@components/Hero/Hero";
import { EachProduct } from "@components/EachProduct";
import HeroInfo from "@components/Hero/HeroInfo";
import CategoryScroll from "@components/CategoryScroll/CategoryScroll";
import HomeBanner from "@components/Banners/HomeBanner";
import Heading from "@components/Heading/Heading";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <HeroInfo />
      <section className="container-fluid section">
        <Heading heading="New Arrivals" />
        <div className="grid-products grid--view-items shop-grid-5 prd-grid">
          <div className="row">
            <EachProduct size="3" />
            <EachProduct size="3" />
            <EachProduct size="3" />
            <EachProduct size="3" />
            <EachProduct size="3" />
            <EachProduct size="3" />
          </div>
        </div>
      </section>
      <CategoryScroll />
      <section className="container-fluid section">
        <Heading heading="Popular Items" />
        <div className="grid-products grid--view-items ">
          <div className="row">
            <EachProduct size="3" />
            <EachProduct size="3" />
            <EachProduct size="3" />
            <EachProduct size="3" />
            <EachProduct size="3" />
            <EachProduct size="3" />
          </div>
        </div>
      </section>
      <HomeBanner />
    </div>
  );
};

export default Home;
