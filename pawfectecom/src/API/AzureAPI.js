const apiURL = "http://localhost:3001";

//fetch all products
export async function getProducts() {
    const response = await fetch(`http://localhost:3001/products`).then(
        (response) => response.json()
    );
    return response;
}

//fetch one product with a given id
export async function getProduct(id) {
    // const response = await fetch(apiURL + `/product/${id}`);

    const response = await fetch(`http://localhost:3001/products/${id}`).then(
        (response) =>
            response.json().then(() => {
                //console.log("Fetched Prodcts: ", response);
            })
    );

    return response;
}

//fetch product details for given product.
export async function getProductHighlights(id) {
    const response = await fetch(
        `http://localhost:3001/products/${id}/highlights`
    ).then((response) => response.json());
    return response;
}
