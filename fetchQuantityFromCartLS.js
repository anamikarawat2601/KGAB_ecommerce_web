import { getCartProductFromLs } from "./getCartProductFromLs.js";

export const fetchQuantityFromCartLS=(id,price)=>{
 let cartProducts=getCartProductFromLs();
  
 let existingProduct= cartProducts.find((curprod)=>curprod.id === id);
 let quantity=1;

 if(existingProduct){
    quantity=existingProduct.quantity;
    price=existingProduct.price;


 }
 console.log(price,quantity);
 return {quantity,price};

};