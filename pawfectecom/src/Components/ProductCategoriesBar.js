import React from "react";

function ProductCategoriesBar() {
    return (
        <div className="flex flex-row h-9 w-full justify-center items-center">
            <div className="w-1/2 flex flex-row justify-between text-center">
                <div className="flex-1">Category 1</div>
                <div className="flex-1">Category 2</div>
                <div className="flex-1">Category 3</div>
                <div className="flex-1">Category 4</div>
                <div className="flex-1">Category 5</div>
            </div>
        </div>
    );
}

export default ProductCategoriesBar;
