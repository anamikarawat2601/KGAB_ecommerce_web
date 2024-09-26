import { showProductContainer } from "/homeProductsCards.js";
console.log("welcome to kgab");


fetch('/products.json')
  .then(response => {
   
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(products => {
    showProductContainer(products);
  
  })
  .catch(error => {
    console.error('Error fetching the JSON:', error);
  });
