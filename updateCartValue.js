const cartValue=document.querySelector('#cartValue');
export const updateCartValue=(kuch)=>{
   
return (cartValue.innerHTML=`<i class="fa-solid fa-cart-shopping"> ${kuch.length} </i>`)
}