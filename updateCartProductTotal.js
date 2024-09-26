import { getCartProductFromLs } from "./getCartProductFromLs.js";

export const updateCartProductTotal=()=>{
    let productsubtotal=document.querySelector(".productSubTotal");
    let productfinaltotal=document.querySelector(".productFinalTotal");
    let localcartProducts=getCartProductFromLs();
    let initialValue=0;
    let totalProductPrice=localcartProducts.reduce((accum,curelem)=>{
        let productPrice=parseInt((curelem.price)||0);
        return accum+productPrice;
    },initialValue);
    console.log(totalProductPrice);
   productsubtotal.innerText=`₹${totalProductPrice}`;
    productfinaltotal.innerText=`₹${totalProductPrice+50}`;

}