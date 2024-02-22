import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts/UserProvider";
import { allproducts } from "../../Model/Product";
import { useSearchParams } from "react-router-dom";
import { GetFiftyPercentOff } from "../../Model/HelperFunctions";
import { useNavigate } from "react-router-dom";

//layout inspo https://www.harrys.com/en/gb/products/dynamic-skin-care-duo/?selected=12331922
function Products() {
    const userContext = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
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
                              <div
                                  onClick={() => navigate("/product")}
                                  className="flex flex-col justify-center items-center rounded transition-all drop-shadow-lg bg-white border border-black border-opacity-20 p-2 hover:scale-105 hover:cursor-pointer"
                              >
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
                                      className="text-gray-950 text-center font-medium flex gap-2 items-center
"
                                  >
                                      {product.onsale ? (
                                          <div className="text-red-500 font-bold text-lg">
                                              £
                                              {GetFiftyPercentOff(
                                                  product.price
                                              )}
                                          </div>
                                      ) : null}
                                      <div
                                          className={`${
                                              product.onsale
                                                  ? "line-through"
                                                  : ""
                                          }`}
                                      >
                                          £{product.price}
                                      </div>
                                  </div>
                                  <div
                                      onClick={() => navigate("/product")}
                                      className="w-1/2 h-6 bg-orange-500 font-bold text-center text-white rounded hover:cursor-pointer hover:animate-pulse"
                                  >
                                      Buy Now
                                  </div>
                                  {product.onsale ? (
                                      <div className="absolute bg-red-500 w-24 h-10 rounded-r-xl left-0 top-0 animate-pulse flex items-center justify-center">
                                          <div className="text-white font-bold">
                                              50% Off!
                                          </div>
                                      </div>
                                  ) : null}
                              </div>
                          );
                      })
                    : null}
            </div>
        </div>
    );
}

export default Products;
