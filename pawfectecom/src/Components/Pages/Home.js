import React from "react";
import Banner from "../Banner";
import Image from "../Image";
import CategoryHeader from "../CategoryHeader";
import CatgegoryDisplay from "../CatgegoryDisplay";
import { sizecategories, stylecategories } from "../../Model/Category";
import HeroBanner from "../Banners/HeroBanner";

function Home() {
    return (
        <div className="flex flex-col w-full scroll overflow-y-auto max-w-screen pb-10">
            <div className="bg-primary"></div>
            <div className="bg-secondary"></div>
            <HeroBanner
                colone="from-primary"
                coltwo="bg-secondary"
                reverse={false}
            />
            <CategoryHeader text="Shop By Category" />
            <CatgegoryDisplay categories={sizecategories} />
            <HeroBanner
                colone="from-secondary"
                coltwo="bg-primary"
                reverse={true}
            />
            <CategoryHeader text="Shop By Style" />
            <CatgegoryDisplay categories={stylecategories} />
        </div>
    );
}

export default Home;
