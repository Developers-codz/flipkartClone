export const categoryFilteredData = (products, categories) => {
  if (categories.length !== 0) {
    const categoryProducts = products.filter((product) =>
      categories.some((cat) => product.category === cat)
    );
    return categoryProducts;
  }
  return products;
};
