import { useContext, useState } from "react";
import { UserContext } from "../../Contexts/UserProvider";
import { testProduct } from "../../Model/Product";

function ProductPage() {
    const userContext = useContext(UserContext);
    const [product, setProduct] = useState(testProduct);
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="flex flex-col items-center h-screen w-full md:flex-row mt-8">
            <div className="w-5/6 md:w-1/2">
                <div className="text-3xl">{product.productname}</div>
                <div className="text-2xl text-primary">£{product.price}</div>
                <img src={product.image}></img>
                <div className="">{product.description}</div>
                <div className="flex flex-row mt-2 gap-2">
                    <div
                        id="quantity"
                        className="flex flex-row w-28 border border-gray-600"
                    >
                        <div
                            className="flex-1 flex w-12 h-12 text-center items-center justify-center"
                            onClick={() =>
                                setQuantity(Math.max(1, quantity - 1))
                            }
                        >
                            <div
                                className={`text-xl ${
                                    quantity <= 1 ? "font-thin" : "font-bold"
                                }`}
                            >
                                -
                            </div>
                        </div>
                        <div className="flex-1 flex w-12 h-12 text-center items-center justify-center">
                            <div>{quantity}</div>
                        </div>
                        <div
                            className="flex-1 flex w-12 h-12 text-center items-center justify-center"
                            onClick={() =>
                                setQuantity(Math.max(1, quantity + 1))
                            }
                        >
                            <div className="font-bold text-xl">+</div>
                        </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center bg-orange-500">
                        <div className="text-white font-bold">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
