let cartSpan = document.querySelector('.cart-span');

let alaska = document.querySelector('.alaska-container');

let basket = JSON.parse(localStorage.getItem('cart-items')) || []
console.log(basket)

const generateitem = () => {
    
    alaska.innerHTML = basket.map(watch => {
        let { watchid, image, newPrice, quantity, images, X } = watch
        return `
        <div class="vertical-line containers"></div>

    <div class="cart-list-items2 containers">
      <div class="cart-box">
        <div><img src="${image}" width="100px"></div>
        <div class="cartttt">${watchid}</div>
        <div class="cartttt">$${newPrice}</div>
        <div class="cartttt"><input id = "inputt" type="number" value="${quantity}" min="1"></div> 
        <div><img onclick = "deletebutton('${watchid}')"  class="deletebuttonnn" src="images/icons8-cancel-30.png" alt=""></div>
        <div id ="newprice" class="cartttt">${newPrice}</div>
      </div>
    </div>

   </section>

   `
    }).join('')
}

generateitem()




const cartSumTotall = () => {
    const cartTtotal = document.querySelector('.cart-totall')
    subTotal = basket.reduce((acc, curr) => acc + (parseInt(curr.newPrice.split('$')[1]) 
    * parseInt(curr.quantity)), 0)

    cartTtotal.textContent = `$ ${subTotal}`
}

cartSumTotall()



const deletebutton = (watchid) => {
  basket = basket.filter((watch) => watch.watchid != watchid)
  console.log(basket)
  generateitem()
  cartSumTotall()

}

deletebutton()






