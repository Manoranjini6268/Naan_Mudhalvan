const con = document.getElementById("container");
const miniitem = document.querySelectorAll(".myImg .myimg");
const img = ["Images/image3.png", "Images/image1.png", "images/image2.png"];
let i = 0;
function next() {
  miniitem[i].classList.remove("active");
  i++;
  if (i == img.length) {
    i = 0;
  }
  miniitem[i].classList.add("active");
  con.style.background = 'url("' + img[i] + '")';
}

function prev() {
  i--;
  if (i == -1) {
    i = img.length - 1;
  }
  con.style.background = 'url("' + img[i] + '")';
}
