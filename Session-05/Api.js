const con = document.getElementById("container");
fetch("https://fakestoreapi.com/products")
  .then((data) => data.json()) // converting json to js obj
  .then((data) => {
    data.forEach((val) => {
      let formattedTitle = formatTitle(val.title);
      con.innerHTML += `<div class="whole"><div class="top">
      <img src=${val.image} class="img"></div> 
      <div class="button-container">
      <button class="title">${formattedTitle}</button>
      <button class="price">$${val.price}</button>
      </div>
      <button class="add">Add to Cart</button>
      </div>`;
    });
  });

function formatTitle(title) {
  let words = title.split(" ");
  return words.length > 5 ? words.slice(0, 5).join(" ") : title;
}
