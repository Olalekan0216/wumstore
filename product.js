const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const imagesss = JSON.parse(localStorage.getItem('images'));

const item = images.find(element => element.imageid == id);


const preview_image = document.querySelector('.product-box-image');
const preview_price = document.querySelector('.product-price2');
const preview_slashed_price = document.querySelector('.slashed-price');
const preview_product_new_price = document.querySelector('.product-new-price');
const preview_h2 = document.querySelector('.product-h1');

preview_image.src = item.image;

preview_price.textContent =  item.oldPrice;

preview_product_new_price.textContent =   item.price;

preview_h2.textContent = item.imageName;





// creating toggle for productpage 

let brandBorder = document.querySelector('.brand-border')

function dropDown(){
  console.log('changing')
  let menu = document.querySelector('#drop-down-list')
  if(menu.style.display==='block'){
    menu.style.display = 'none'
  }
  else{
    menu.style.display = 'block'
  }
}



const adding = document.querySelector('#add');
const sub = document.querySelector('#sub');
const val = document.querySelector('#val');
const stockMessage = document.querySelector('.instock');

let quantity = 1;


adding.addEventListener('click', increaseQuantity)
sub.addEventListener('click', decreaseQuantity)



function increaseQuantity(){
  if(quantity < item.stock){
    quantity += 1
    val.textContent = quantity
  }
  else{
    stockMessage.textContent = 'Out of stock!!'
  }
}



function decreaseQuantity(){
  if(quantity > 1)
  quantity -= 1
  val.textContent = quantity
    stockMessage.textContent = 'Instock!!!'
}



function addingproduct() {

}




