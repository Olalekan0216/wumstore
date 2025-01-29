
let timeOutput = document.getElementById("time");

function setTime() {
    let today = new Date();

    let day = today.getDay() + 1

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let amPm = hour < 12 ? "am" : "pm";

    timeOutput.innerText = `${day}: ${hour}:${minute}:${second} ${amPm}`;
}

setInterval(setTime, 1000);


let products = {
    data: [
        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 1",
            category: "unisexWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend4.jpg",
            ratings: 4,
            productName: "Watch 2",
            category: "unisexWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 3",
            category: "unisexWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 4",
            category: "unisexWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 5",
            category: "unisexWatches",
            price: "150.00",
            oldPrice: "260.00",
        },


        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 6",
            category: "unisexWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 7",
            category: "unisexWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 8",
            category: "unisexWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 9",
            category: "coupleWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend5.jpg",
            ratings: 4,
            productName: "Watch 10",
            category: "coupleWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend4.jpg",
            ratings: 4,
            productName: "Watch 11",
            category: "coupleWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 12",
            category: "coupleWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 13",
            category: "coupleWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 14",
            category: "coupleWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 15",
            category: "coupleWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 16",
            category: "coupleWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 17",
            category: "goldWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 18",
            category: "goldWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 19",
            category: "goldWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend1.jpg",
            ratings: 4,
            productName: "Watch 20",
            category: "goldWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 21",
            category: "goldWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 22",
            category: "goldWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 23",
            category: "goldWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 24",
            category: "goldWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 25",
            category: "titanumWatches",
            price: "150.00",
            oldPrice: "260.00",
        },


        {
            image: "images/trend3.jpg",
            ratings: 4,
            productName: "Watch 26",
            category: "titanumWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 27",
            category: "titanumWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 28",
            category: "titanumWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 29",
            category: "titanumWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 30",
            category: "titanumWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend2.jpg",
            ratings: 4,
            productName: "Watch 31",
            category: "titanumWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

        {
            image: "images/trend4.jpg",
            ratings: 4,
            productName: "Watch 32",
            category: "titanumWatches",
            price: "150.00",
            oldPrice: "260.00",
        },

    ]
}




// using the map method 

let divback = document.querySelector("[list]");




let showInitialCategory = () => {
    let filtered = products.data.filter(product => product.category === 'unisexWatches').map((product) => {
        let rating = ''
        for (let counter = 0; counter < product.ratings; counter++) {
            rating += '<span class="fa fa-star checked"></span>'
        }

        return `<div class="divback">
   <img class="trend11" src="${product.image}" width="220px">
   <div class="watchinfo">
     <div class="watchchild">
       <span>
         ${rating}
       </span>
       <h4>${product.productName}</h4>
       <span>
         <p>${product.price}</p> <del>${product.oldPrice}</del>
       </span>
     </div>
     </div>
 </div>`
    }).join("\n")

    divback.innerHTML = filtered;
}

showInitialCategory();


const unisex_label = document.querySelector('[unisexlabel]')


unisex_label.addEventListener('click', () => {
    let filtered = products.data.filter(product => product.category === 'unisexWatches').map((product) => {
        let rating = ''
        for (let counter = 0; counter < product.ratings; counter++) {
            rating += '<span class="fa fa-star checked"></span>'
        }

        return `<div class="divback">
    <img class="trend11" src="${product.image}" width="220px">
    <div class="watchinfo">
      <div class="watchchild">
        <span>
          ${rating}
        </span>
        <h4>${product.productName}</h4>
        <span>
          <p>${product.price}</p> <del>${product.oldPrice}</del>
        </span>
      </div>
      </div>
  </div>`
    }).join("\n")

    divback.innerHTML = filtered
})



// creating for active button 

const button_value = document.querySelectorAll('.button-value')

button_value.forEach((div, index) => {
    div.addEventListener('click', () => {
        button_value.forEach(div => div.classList.remove('selected'))
        button_value[index].classList.add('selected')
    })
})


const couple_label = document.querySelector('[couplelabel]')

couple_label.addEventListener('click', () => {
    let filtered = products.data.filter(product => product.category === 'coupleWatches').map((product) => {
        let rating = ''
        for (let counter = 0; counter < product.ratings; counter++) {
            rating += '<span class="fa fa-star checked"></span>'
        }

        return `<div class="divback">
    <img class="trend11" src="${product.image}" width="220px">
    <div class="watchinfo">
      <div class="watchchild">
        <span>
          ${rating}
        </span>
        <h4>${product.productName}</h4>
        <span>
          <p>${product.price}</p> <del>${product.oldPrice}</del>
        </span>
      </div>
      </div>
  </div>`
    }).join("\n")

    divback.innerHTML = filtered
})


const gold_label = document.querySelector('[goldlabel]')

gold_label.addEventListener('click', () => {
    let filtered = products.data.filter(product => product.category === 'goldWatches').map((product) => {
        let rating = ''
        for (let counter = 0; counter < product.ratings; counter++) {
            rating += '<span class="fa fa-star checked"></span>'
        }

        return `<div class="divback">
    <img class="trend11" src="${product.image}" width="220px">
    <div class="watchinfo">
      <div class="watchchild">
        <span>
          ${rating}
        </span>
        <h4>${product.productName}</h4>
        <span>
          <p>${product.price}</p> <del>${product.oldPrice}</del>
        </span>
      </div>
      </div>
  </div>`
    }).join("\n")

    divback.innerHTML = filtered
})

const titanum_label = document.querySelector('[titanumlabel]')

titanum_label.addEventListener('click', () => {
    let filtered = products.data.filter(product => product.category === 'titanumWatches').map((product) => {
        let rating = ''
        for (let counter = 0; counter < product.ratings; counter++) {
            rating += '<span class="fa fa-star checked"></span>'
        }
        return `<div class="divback">
    <img class="trend11" src="${product.image}" width="220px">
    <div class="watchinfo">
      <div class="watchchild">
        <span>
          ${rating}
        </span>
        <h4>${product.productName}</h4>
        <span>
          <p>${product.price}</p> <del>${product.oldPrice}</del>
        </span>
      </div>
      </div>
  </div>`
    }).join("\n")

    divback.innerHTML = filtered
})




let watches = [
    {
      watchid: "Watch1",
      image: "images/15.jpg",
      icon: "bi bi-cart2",
      ratings: "4",
      newPrice: "$156.00",
      formerPrice: "$234.00",
    },
  
    {
      watchid: "Watch2",
      image: "images/trend3.jpg",
      icon: "bi bi-cart2",
      ratings: "4",
      newPrice: "$156.00",
      formerPrice: "$234.00",
    },
  
    {
      watchid: "Watch3",
      image: "images/trend3.jpg",
      icon: "bi bi-cart2",
      ratings: "4",
      newPrice: "$150.00",
      formerPrice: "$235.00",
    },
  
    {
      watchid: "Watch4",
      image: "images/trend3.jpg",
      icon: "bi bi-cart2",
      ratings: "4",
      newPrice: "$153.00",
      formerPrice: "$240.00",
    },
  
    {
      watchid: "Watch5",
      image: "images/trend3.jpg",
      icon: "bi bi-cart2",
      ratings: "4",
      newPrice: "$156.00",
      formerPrice: "$237.00",
    },
  
    {
      watchid: "Watch6",
      image: "images/trend1.jpg",
      icon: "bi bi-cart2",
      ratings: "4",
      newPrice: "$156.00",
      formerPrice: "$234.00",
    },
  
    {
      watchid: "Watch7",
      image: "images/trend2.jpg",
      icon: "bi bi-cart2",
      ratings: "4",
      newPrice: "$152.00",
      formerPrice: "$254.00",
    },
  
    {
      watchid: "Watch8",
      image: "images/trend5.jpg",
      icon: "bi bi-cart2",
      ratings: "4",
      newPrice: "$150.00",
      formerPrice: "$244.00",
    },
  
  ]
  
  console.log(watches)
  
  let trendingProducts = document.querySelector(".trending-products")
  
  
  let NewWatches = watches.map((watch) => {
  
    return `<div class="trending-product-image-box">
    <div>
      <img src="${watch.image}" width="330px">
      <div class="add-icons">
        <i onclick="addToCart('${watch.watchid}')" id="addToCart" class="${watch.icon}" style="color: #000000;"></i>
    </div>
    </div>
    
    <div class="watch-info1">
      <div class="watch-child">
        newPrice
        <h4>${watch.watchid}</h4>
  
        <span class="old-new">
          <h3>${watch.newPrice}</h3> <del>${watch.formerPrice}</del>
        </span>
      </div>
    </div>
  </div>`
  }).join("")
  console.log(trendingProducts)
  trendingProducts.innerHTML = NewWatches