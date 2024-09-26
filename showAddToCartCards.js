import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS.js";
import { getCartProductFromLs } from "./getCartProductFromLs.js";
import { incrementDecrement } from "./incrementDecrement.js";
import { removefromcart } from "./removefromcart.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

let products;
fetch('/products.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(pro => {
    products = pro;

    let cartProducts = getCartProductFromLs();

    let filterProducts = products.filter((curprod) => {
      return cartProducts.some((curpro2) => curpro2.id === curprod.id);
    });

    const cartElement = document.querySelector('#productCartContainer');
    const templateContainer = document.querySelector('#productCartTemplate');

  let showCartProduct=()=> {
      filterProducts.forEach(element => {
        const {  category, id, image, name, price, stock } = element;
        const productClone = document.importNode(templateContainer.content, true);
        const LSActualData = fetchQuantityFromCartLS(id,price);
        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productName').textContent=name;
        productClone.querySelector('.productPrice').textContent=LSActualData.price;        
        productClone.querySelector('.productQuantity').textContent=LSActualData.quantity;
        productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
          incrementDecrement(event,id,stock,price);
        })
        productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=>{
            removefromcart(id)}
        )


        // Add more product properties here as needed
        cartElement.append(productClone);
      });
    }

    showCartProduct();
    updateCartProductTotal();
  })
  .catch(error => {
    console.error('Error fetching the JSON:', error);
  });

/*import { getCartProductFromLs } from "./getCartProductFromLs.js";

let products;
fetch('/products.json')
  .then(response => {
   
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(pro => {
    products=pro;
  
  })
  .catch(error => {
    console.error('Error fetching the JSON:', error);
  });


let cartProducts=getCartProductFromLs();
console.log(products);
let filterProducts=products.filter((curprod)=>{
   return cartProducts.some((curpro2)=>curpro2.id===curprod.id);
})
const cartElement=document.querySelector('#productCartContainer');
const templateContainer=document.querySelector('#productCartTemplate');


function showCartProduct(){
    filterProducts.forEach(element => {
        const  { brand, category,id, image, name, price, stock }=element;
        const productClone=document.importNode(templateContainer.textContent,true);
        productClone.querySelector('.category').textContent=category;
        productClone.querySelector('.productImage').src=image;
        //productClone.querySelector('.')
        cartElement.append(productClone);
    });
}

showCartProduct();
/*
products.forEach(currpro => {
      const { brand, category, description, id, image, name, price, stock }=currpro;
      const productClone=document.importNode(productTemplate.content,true);
      productClone.querySelector(".productName").textContent=name;
      productClone.querySelector(".category").textContent=category; */
      