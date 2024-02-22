import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserProvider";
import { allproducts } from "../../Model/Product";
import { useSearchParams } from "react-router-dom";

function Products() {
    const userContext = useContext(UserContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        //Get products from api here ready to be rendered with whatever filter the user applies e.g. category, name etc.
        //the filtering would happen before the results are retrieved to save api calls.
        setProducts(allproducts);
    }, []);

    return (
        <div className="flex justify-center items-center">
            <div className="flex text-black grid-cols-2 grid w-full gap-4 m-2 md:w-1/2 md:grid-cols-4">
                {products != null
                    ? products.map((product, index) => {
                          return (
                              <div className="flex flex-col justify-center items-center rounded transition-all border border-black border-opacity-20 p-2 hover:scale-110">
                                  <img
                                      className="rounded"
                                      src={product.image}
                                  ></img>
                                  <div
                                      className="text-gray-700 text-center
"
                                  >
                                      {product.productname}
                                  </div>
                                  <div
                                      className="text-gray-950 text-center font-medium
"
                                  >
                                      £{product.price}
                                  </div>
                                  <div className="w-1/2 h-6 bg-orange-500 font-bold text-center text-white rounded hover:cursor-pointer hover:animate-pulse">
                                      Buy Now
                                  </div>
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
}

export default Products;
