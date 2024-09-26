import { getCartProductFromLs } from "./getCartProductFromLs.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";
getCartProductFromLs();
export const addToCart=(event,id,stock)=>{
console.log("add to cart function called");
let arrLocalStorageProduct=getCartProductFromLs();
const currentProductElement=document.querySelector(`#card${id}`);
console.log(currentProductElement);
let quantity=currentProductElement.querySelector('.productQuantity').innerText;
let price=currentProductElement.querySelector('.productPrice').innerText;
console.log("in add to cart",quantity,price);

price=price.replace("₹","");
price=Number(price*quantity); 
quantity=Number(quantity);
console.log("in add to cart",quantity,price);


let existingprod=arrLocalStorageProduct.find((curprod)=>curprod.id===id);

console.log(existingprod);


if(existingprod && quantity>1){
    quantity=Number(existingprod.quantity)+ Number(quantity);
    price=Number(existingprod.price)+Number(price);
    let updateCart={id,quantity,price};
    updateCart=arrLocalStorageProduct.map((curpro)=>{
        return curpro.id===id?updateCart:curpro;
    })
    console.log("updatecart",updateCart);
    localStorage.setItem("cartProductLS",JSON.stringify(updateCart))
}

if(existingprod){
    return false;
}



console.log(quantity , price, arrLocalStorageProduct.length);
arrLocalStorageProduct.push({id,quantity,price})
localStorage.setItem("cartProductLS",JSON.stringify(arrLocalStorageProduct));
updateCartValue(arrLocalStorageProduct);
//
showToast("add",id);
}