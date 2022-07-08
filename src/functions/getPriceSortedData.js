export const priceSortedData = (product,price) =>{
 if(price === "low-to-high"){
    return product.sort((a,b)=> a.price - b.price)
 }
 if(price==="high-to-low"){
     return product.sort((a,b)=> b.price - a.price)
 }
return product
}