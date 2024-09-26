import { getCartProductFromLs } from "./getCartProductFromLs.js";
import { showToast } from "./showToast.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";
import { updateCartValue } from "./updateCartValue.js";

export  const removefromcart = (id)=>{
    console.log("in remove function");
    let cartProducts=getCartProductFromLs();
    cartProducts = cartProducts.filter((ele)=>ele.id !== id);
   // console.log(cartProducts);
    localStorage.setItem("cartProductLS",JSON.stringify(cartProducts));
    let removediv=document.getElementById(`card${id}`);
    if(removediv){
        console.log("removediv",id);
        removediv.remove();

        showToast("delete",id);
    }
    console.log("here update updatecart products");
    updateCartProductTotal();
   // updateCartValue(cartProducts);
}