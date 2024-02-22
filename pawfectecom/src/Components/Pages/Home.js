import React from "react";
import Banner from "../Banner";
import Image from "../Image";
import CategoryHeader from "../CategoryHeader";
import CatgegoryDisplay from "../CatgegoryDisplay";
import { sizecategories, stylecategories } from "../../Model/Category";

function Home() {
    return (
        <div className="flex flex-col w-full scroll overflow-y-auto">
            <Banner text="✈️ Free Delivery on orders over £50! ✈️" />
            <Image className="w-full mx-auto" url="./Images/banner.png" />
            <CategoryHeader text="Shop By Category" />
            <CatgegoryDisplay categories={sizecategories} />
            <Image
                className="w-full mx-auto"
                url="./Images/stylecollection.png"
            />
            <CategoryHeader text="Shop By Style" />
            <CatgegoryDisplay categories={stylecategories} />
        </div>
    );
}

export default Home;
