const productsArray = [
    {
        id: "price_1MdkvDDgcQtx6EHYpLuqAJgE",
        
        title: "Raspberry Pi 4",
        price: 125.00
    },

    {
        id: "price_1MiRyfDgcQtx6EHYCPqowOen",
        title: "server",
        price: 200.99
    },
    {
        id: "price_1MiSKcDgcQtx6EHYISWbv8v2",
        title: "steam deck",
        price: 600.00
    },


]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);


    if (productData === undefined) {
        console.log("Product Data does not exist for ID: " + id);
    }


    return productData;

}

export { productsArray, getProductData };