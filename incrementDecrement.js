import { getCartProductFromLs } from "./getCartProductFromLs.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

export const  incrementDecrement=(event,id ,stock,price)=>{
    const currentCardElement=document.querySelector(`#card${id}`);
    if (!currentCardElement) {
        console.error(`Element #card${id} not found.`);
        return;
    }
     const productQuantity=currentCardElement.querySelector(".productQuantity");
     const productPrice=currentCardElement.querySelector(".productPrice");
     let quantity=1; 
     let localprice=0;
     let localcartProducts=getCartProductFromLs();
     let exisitingprod=localcartProducts.find((curr)=> curr.id===id);
     if(exisitingprod){
       quantity=exisitingprod.quantity;
       localprice=exisitingprod.price;
    }else{
        localprice=price;

        
        price=price;
    }

    if(event.target.className == "cartIncrement"){
        if(quantity < stock) {
           quantity+=1;
        }else if(quantity ===stock){
           quantity=stock;
           localprice=price*stock;
        }
   }

   if(event.target.className == "cartDecrement"){
    if(quantity>1){

        quantity-=1;
    }  
}
localprice=price*quantity;
localprice=Number(localprice.toFixed(2))
let updateCart={id,quantity,price:localprice};
    updateCart=arrLocalStorageProduct.map((curpro)=>{
        return curpro.id===id?updateCart:curpro;
    })
    console.log("updatecart",updateCart);
    localStorage.setItem("cartProductLS",JSON.stringify(updateCart))
    productQuantity.innerText=quantity;
    productPrice.innerText=localprice;
    updateCartProductTotal();
};