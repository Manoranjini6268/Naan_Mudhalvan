const mobile = JSON.parse(localStorage.getItem("cartdata"));

const con = document.getElementById("container");
for (let i = 0; i < mobile.length; i++) {
  con.innerHTML += `
    <div>
     <img src=${mobile[i].image}>
     <h1>${mobile[i].brand}</h1>
     <p>${mobile[i].description}</p>
     <p>$${mobile[i].price}</p>
     <button onclick="cart(${mobile[i].productId})">Buy Now</button>
    </div>`;
}
