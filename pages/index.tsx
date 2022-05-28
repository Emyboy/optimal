import React from "react";
import Hero from "@components/Hero/Hero";
import { EachProduct } from "@components/EachProduct";
import HeroInfo from "@components/Hero/HeroInfo";
import CategoryScroll from "@components/CategoryScroll/CategoryScroll";
import HomeBanner from "@components/Banners/HomeBanner";
import Heading from "@components/Heading/Heading";
import ProductService from "service/product.service";
import { AppContext } from "next/app";
import axios from "axios";
import { Product } from "interfaces/product.interface";

interface Props {
    products: {
        data: Product[];
    };
}

const Home: React.FC<Props> = ({ products }) => {
    return (
        <div>
            <Hero />
            <HeroInfo />
            <section className="container-fluid section">
                <Heading heading="New Arrivals" />
                <div className="grid-products grid--view-items shop-grid-5 prd-grid">
                    <div className="row">
                        {products.data.map((val, i) => {
                            return (
                                <EachProduct
                                    key={`prod-${i}`}
                                    data={val}
                                    size="3"
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            <CategoryScroll />
            <section className="container-fluid section">
                <Heading heading="Popular Items" />
                <div className="grid-products grid--view-items ">
                    <div className="row">
                        {products.data.map((val, i) => {
                            return (
                                <EachProduct
                                    key={`prod-${i}`}
                                    data={val}
                                    size="3"
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            <HomeBanner />
        </div>
    );
};

// export async function getServerSideProps(context:AppContext) {
//   const posts = await ProductService.getRecentProducts();
//     return {
//         props: {
//           posts
//         }, // will be passed to the page component as props
//     };
// }

export async function getServerSideProps() {
    // Fetch data from external API
    // const res = await ProductService.getRecentProducts();
    const res = await axios(
        process.env.NEXT_PUBLIC_API_URL +
            `/products/?fields=name,price,image_urls,slug`,
    );

    // Pass data to the page via props
    return { props: { products: res.data } };
}

export default Home;
