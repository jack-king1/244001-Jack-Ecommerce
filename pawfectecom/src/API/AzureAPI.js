const apiURL = "http://localhost:3001";

export async function getProducts() {
    const response = await fetch(apiURL + "/products/");
    return response;
}

export async function getProduct(id) {
    const response = await fetch(apiURL + `/products/${id}`);
    return response;
}

export async function getProductHighlights(id) {
    const response = await fetch(apiURL + `/products/${id}/highlights`);
    return response;
}
