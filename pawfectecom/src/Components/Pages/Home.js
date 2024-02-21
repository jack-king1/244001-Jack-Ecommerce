import React from "react";
import Banner from "../Banner";
import Image from "../Image";
import CategoryHeader from "../CategoryHeader";

function Home() {
    return (
        <div className="flex flex-col w-full">
            <Banner text="✈️Free Delivery on orders over £50!#✈️" />
            <Image className="w-full mx-auto" url="./Images/banner.png" />
            <CategoryHeader text="Shop By Category" />
        </div>
    );
}

export default Home;
