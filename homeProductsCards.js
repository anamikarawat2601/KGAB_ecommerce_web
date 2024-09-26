import { homeQuantityToggle } from "/homeQuantityToggle.js";
import { addToCart} from "/addToCart.js";

const productContainer=document.querySelector('#productContainer');//container
const productTemplate=document.querySelector('#productTemplate');//template



export const showProductContainer=(products)=>{
   if(!products){
    return false;
   }
      products.forEach(currpro => {
      const { category, description, id, image, name, price, stock }=currpro;
      const productClone=document.importNode(productTemplate.content,true);
      productClone.querySelector(".productName").textContent=name; 
      productClone.querySelector(".category").textContent=category;
      productClone.querySelector(".productImage").src=image;
      productClone.querySelector(".productImage").alt=name;
      productClone.querySelector(".productDescription").textContent=description;
      productClone.querySelector(".productPrice").textContent=`₹${price}`;
      productClone.querySelector(".productActualPrice").textContent=`₹${price*4}`
      productClone.querySelector(".productStock").textContent=stock;
      productClone.querySelector("#cardValue").setAttribute("id",`card${id}`);
      productClone.querySelector(".stockElement").addEventListener('click',(event)=>{
         homeQuantityToggle(event,id,stock);
      })
      
       
     productClone.querySelector('.add-to-cart-button').addEventListener('click',(event)=>{
     addToCart(event,id,stock);



})

       
      productContainer.append(productClone);
   });
} 

