let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name :'Hayvan Çifliği',
        tag : 'hayvanciftligi',
        price : 12.00,
        inCart : 0
    },

    {
        name :'1984',
        tag : 'george',
        price : 18.50,
        inCart : 0
    },

    {
        name :'Momo',
        tag : 'momo',
        price : 23.45,
        inCart : 0
    },

    {
        name :'Simyacı',
        tag : 'simyacı',
        price : 12.45,
        inCart : 0
    },

    {
        name :'Veronika Ölmek İstiyor',
        tag : 'veronika',
        price : 19.00,
        inCart : 0
    },
    {
        name :'Muhteşem Gatsby',
        tag : 'muhtesemgatsby',
        price : 30.00,
        inCart : 0
    },
    {
        name :'Kayıp Tanrılar Ülkesi',
        tag : 'kayıptanrılar',
        price : 45.99,
        inCart : 0
    },
    {
        name :'Otomatik Portakal',
        tag : 'portakal',
        price : 10.00,
        inCart : 0
    },
    {
        name :'İkigai',
        tag : 'ikigai',
        price : 16.50,
        inCart : 0
    },
    {
        name :'İçinde Bir Sen',
        tag : 'icindebirsen',
        price : 129.45,
        inCart : 0
    },

];



for(let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',() =>{
    cartNumbers(products[i]);
    totalCost(products[i]);
    })
}


 /*function onLoadCartNumbers(){
  let productNumbers = localStorage.getItem('cartNumbers');

if(productNumbers){
      document.querySelector('.cart span').textContent = productNumbers;
  }

}
*/


function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent = 1;

    }

    setItems(product);

}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My cartItems are",cartItems);
    console.log("İnside of set items");
    console.log("the product",product);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag] : product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else {
        product.inCart = 1;
            cartItems = {
            [product.tag] : product
        }
    }

    localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}




function totalCost(product){
      //  console.log("The Product price is",product.price);
        let cartCost = localStorage.getItem('totalCost');
        console.log("My Cart Cost is",cartCost);
        console.log(typeof cartCost);

        if(cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);
        }else{
            localStorage.setItem("totalCost",product.price);
        }
}



function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);
    if(cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item =>{
            productContainer.innerHTML += `
                
            <div class ="product">
                <ion-icon name="close-circle-outline"></ion-icon>
                <img src ="./images/${item.tag}.jpg">
                <span>${item.name}</span>
                </div> 
                
                <div class="price">${item.price}</div>
                <div class="quantity">
                <ion-icon name="arrow-back-outline"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div class="total">
                    ${item.inCart * item.price}
                </div>
                
                
                
            `;
        });


        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
            Sepet Toplam
        </h4>
        <h4 class="basketTotal">
            ${cartCost}
        </h4>
        `


    }
    console.log(localStorage.getItem(productContainer));










}

// onLoadCartNumbers();
displayCart();






