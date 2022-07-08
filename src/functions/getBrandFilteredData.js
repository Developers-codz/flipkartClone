export const brandFiltedData = (products,brands) =>{
if(brands.length!==0){
    const brandFiltered = products.filter((product) =>
    brands.some((b) => product.brand === b)
  );
  return brandFiltered
}
return products
}