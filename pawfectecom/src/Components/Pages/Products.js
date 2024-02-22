import React from "react";

function Products(props) {
    return (
        <div className="w-full grid grid-cols-2">
            {props.map((product, index) => {
                <div className="col-span-1 flex flex-col justify-center items-center p-4">
                    <img src={product.image}></img>
                    <div className="text-xl">{product.productname}</div>
                </div>;
            })}
        </div>
    );
}

export default Products;
