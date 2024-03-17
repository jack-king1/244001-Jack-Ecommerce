import React from "react";
import CategoryHeader from "../CategoryHeader.js";
import CatgegoryDisplay from "../CatgegoryDisplay.js";
import { sizecategories, stylecategories } from "../../Model/Category.js";
import HeroBanner from "../Banners/HeroBanner.js";

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
                coltwo="bg-secondary"
                reverse={true}
            />
            <CategoryHeader text="Shop By Style" />
            <CatgegoryDisplay categories={stylecategories} />
        </div>
    );
}

export default Home;
