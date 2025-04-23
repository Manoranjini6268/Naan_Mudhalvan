// let empobj = {
//   name: "Mano",
//   email: "mano2226@gmail.com",
//   age: 20,
//   experience: 0,
// };

let mobile = [
  {
    productId: 1,
    brand: "Samsung",
    model: "Galaxy s26",
    image: "https://m.media-amazon.com/images/I/61p3FwE31-L._AC_UY218_.jpg ",
    description: "samsung",
    price: 50,
  },
  {
    productId: 2,
    brand: "IQOO",
    model: "IQOO Z9s",
    image: "https://m.media-amazon.com/images/I/61nO5YRaAxL._AC_UY218_.jpg ",
    description: "samsung",
    price: 50,
  },
  {
    productId: 3,
    brand: "Oneplus",
    model: "Galaxy s26",
    image: "https://m.media-amazon.com/images/I/71o8VehMHXL._AC_UY218_.jpg ",
    description: "samsung",
    price: 50,
  },
  {
    productId: 4,
    brand: "Nokia",
    model: "Galaxy s26",
    image: "https://m.media-amazon.com/images/I/61v3V9bh1iL._AC_UY218_.jpg ",
    description: "samsung",
    price: 50,
  },
];

// document.getElementById("container").innerHTML = `
// <img src=${mobile.image}>
// <h1>${mobile.brand}</h1>
// <p>${mobile.description}</p>
// <p>$${mobile.price}</p>
// <button>Add to cart</button>
// `;

const con = document.getElementById("container");
for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `
    <div>
     <img src=${mobile[i].image}>
     <h1>${mobile[i].brand}</h1>
     <p>${mobile[i].description}</p>
     <p>$${mobile[i].price}</p>
     <button onclick="cart(${mobile[i].productId})">Add to cart</button>
    </div>`;
}

let arr = [];
// localStorage.getItem('cartdata').length == 0{
//   arr=[]
// }

function cart(productId) {
  if (localStorage.length === 0) {
    arr = [];
  }
  arr.push(mobile[productId - 1]);
  localStorage.setItem("cartdata", JSON.stringify(arr));
  //localstorage should be in keys and values. store data in json format(js obj trotation)
}
