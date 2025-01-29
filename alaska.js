let openMenuIcon = document.querySelector(".bi-list");
let closeMenuIcon = document.querySelector(".bi-x-lg");
let mobileNav = document.querySelector(".mobile-nav");
let header = document.querySelector(".header");

openMenuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("slide");
  openMenuIcon.classList.toggle("hide");
  closeMenuIcon.classList.toggle("hide");
});

closeMenuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("slide");
  openMenuIcon.classList.toggle("hide");
  closeMenuIcon.classList.toggle("hide");
})

// opening basket menu 

let openCartIcon = document.querySelector(".ddd")
let closeCartIcon = document.querySelector(".sidebar-close")
let sideBar = document.querySelector(".side-bar")


openCartIcon.addEventListener('click', () => {
    sideBar.classList.toggle('slide');
    openCartIcon.classList.toggle('open')
    console.log('opening')
});

closeCartIcon.addEventListener('click', () => {
    sideBar.classList.toggle('slide')
    closeCartIcon.classList.toggle('open')
    console.log('closing')

});



// cart section 
let cart = JSON.parse(localStorage.getItem('cart-items')) || []
generateCartItem()
calculateCartLength()
cartSumTotal()
const addToCart = (id) => {

  let foundItem = watches.find(watch => watch.watchid == id)

  foundItem['quantity'] = 1
  cart.push(foundItem)
  localStorage.setItem("cart-items", JSON.stringify(cart));

  generateCartItem()
  cartSumTotal()
  calculateCartLength()

  console.log(cart)
};





function generateCartItem(){
  let cartWrapper = document.querySelector('.cart-wrapper')
  cartWrapper.innerHTML = cart.map(watch => {
    let { watchid, image, newPrice, formerPrice, rating, quantity } = watch
    return `<div class="cart">
     <div class="cart-container">
       <div>
         <img src="${image}" alt="" width="100px">
       </div>
       <div class="cart-price-details">
         <p>${newPrice}</p>
         <span><del>${formerPrice}</del></span>
       </div>
     </div>
       <div class="cart-details">
         <div class="viewcart">
           <a href ="cartpage.html">Viewcart</a>
         </div>
         <div class="btn-remove">
           <div onclick = "deleteItems ('${watchid}')">Delete</div>
         </div>
       </div>

   </div>
`
  }).join('')
}

const deleteItems = (watchid) => {
  console.log('deleting')
  cart = cart.filter((watch) => watch.watchid != watchid)
  console.log(cart);
  generateCartItem()
  calculateCartLength()
  cartSumTotal()
}


// calculating total


function cartSumTotal(){
  const cartTotal = document.querySelector('.cart-total')
  subTotal = cart.reduce((acc, curr) => acc + (parseInt(curr.newPrice.split('$')[1]) * parseInt(curr.quantity)), 0)
  cartTotal.textContent = `$ ${subTotal}`
}

// calculating cartlength 

function calculateCartLength (){
  document.querySelector('.cart-length').innerText = cart.length
}


calculateCartLength()



// changing image in the pocket-friendly-div 

let images = [
  {
    image: "images/trend2.jpg",
    imageid: '1',
    price: '$230.00',
    oldPrice: '$240.00',
    imageName: "watch1",
    stock: 5,
  },

  {
    image: "images/trend1.jpg",
    imageid: '2',
    price: '$160.00',
    oldPrice: '$240.00',
    imageName: "watch2",
    stock: 10
  },

  {
    image: "images/222.jpg",
    imageid: '3',
    price: '$156.00',
    oldPrice: '$250.00',
    imageName: "watch3",
    stock: 10
  }
]


let pocketDiv = document.querySelector('.pocket-div')


localStorage.setItem('images', JSON.stringify(images))

let newImages = images.map((image) => {
  return `<div class="pocket-friendly-images" >
  <a href="product.html?id=${image.imageid}"><img class = "imageee" src="${image.image}"width="220px"></a>

<div class="pocket-friendly-info">
  <div class="pockect-watch-info">
    <div class="rating">★★★★☆</div>
    <h4>${image.imageName}</h4>
    <span><h3>${image.price}</h3></span>
    <span class="circle">

    <div class="red"></div>
    <div class="brown"></div>
    <div class="white"></div>
    </span>
  </div>
</div>
</div>`

}).join('')
pocketDiv.innerHTML = newImages






const productBtn = document.querySelectorAll('.product-btn');


let cont = document.querySelectorAll('.product-container');

// productBtn.forEach((h4,index) =>{
//   h4.addEventListener('click', (e) => {
//     console.log('clickinggg')
//     containers.forEach((container, index)=>{
//       container.classList.remove('show-box');
//     });
//     containers[index].classList.add("show-box");
//   })
// })

// function productContainer(){
//   console.log('clicking')
// }

// cont.addEventListener('click', () => {
//    console.log('clickingggggggggggggg')
// } )



   

































