const miniImages = document.querySelectorAll(".miniImage");
const windowImage = document.querySelector(".windowImage ");
const close = document.querySelector("#close");
const bucketIcon = document.querySelector(".bucketIcon");
const basket = document.querySelector(".basket");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const productCount = document.querySelector(".productCount");
const btn = document.querySelector(".btn");
const bucketCount = document.querySelector(".bucketCount");
const myCarousel = document.querySelector("#myCarousel");
const basketCardFull = document.querySelector(".basketCardFull");
const cardProductCount = document.querySelector(".cardProductCount");
const resultPrice = document.querySelector(".resultPrice");
const deleteIcon = document.querySelector(".deleteIcon");
const cardImgAndContent = document.querySelector(".cardImgAndContent");
const btnCheck = document.querySelector(".btnCheck");
const basketCardEmpty = document.querySelector(".basketCardEmpty");
const navbarToggler = document.querySelector(".navbar-toggler");
const toggleClose = document.querySelector(".toggleClose");
const toggleMenu = document.querySelector(".toggleMenu");

miniImages.forEach((miniImage) => {
  miniImage.addEventListener("click", () => {
    windowImage.src = miniImage.src;
  });
});

let count = localStorage.getItem("numberValue") || 0;
function updateNumber() {
  productCount.textContent = count;
}

plus.addEventListener("click", function (e) {
  e.preventDefault();
  count++;
  localStorage.setItem("numberValue", count);
  updateNumber();
});

minus.addEventListener("click", function (e) {
  e.preventDefault();
  count--;
  localStorage.setItem("numberValue", count);
  updateNumber();
});

updateNumber();

bucketIcon.addEventListener("click", () => {
  basketCardEmpty.classList.toggle("block");
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (count > 0) {
    basketCardFull.style.display = "block";
    bucketCount.innerHTML = count;
    cardProductCount.innerHTML = count;
    resultPrice.innerHTML = `$${125 * count}.00`;
  } else {
    bucketCount.innerHTML = 0;
    basketCardFull.style.display = "none";
    basketCardEmpty.style.display = "block";
  }
});
deleteIcon.addEventListener("click", (e) => {
  basketCardFull.style.display = "none";
  basketCardEmpty.style.display = "block";
  bucketCount.innerHTML = 0;
});

windowImage.addEventListener("click", (e) => {
  e.preventDefault();
  myCarousel.style.display = "block";
});
navbarToggler.addEventListener("click", (e) => {
  toggleMenu.style.display = "block";
});
toggleClose.addEventListener("click", (e) => {
  toggleMenu.style.display = "none";
});
