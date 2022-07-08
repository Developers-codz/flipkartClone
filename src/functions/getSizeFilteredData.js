export const sizeFilteredData = (products,sizes) =>{
    const sizesProducts = products.filter((product) =>
      sizes.every((size) => product.sizes.includes(size))
    );
    return sizesProducts
}