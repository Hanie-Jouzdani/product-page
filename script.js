document.addEventListener("DOMContentLoaded", getDataFromLocal);
//oppening and closing responsive navbar
const openBtn = document.getElementById("icon-menu");
const closeBtn = document.getElementById("closed-icon-menu");
const sideNav = document.getElementById("side-nav");

openBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);

function openMenu() {
    sideNav.style.display = "block";
}

function closeMenu() {
    sideNav.style.display = "none"
}


//sellect product image to be shown in bigger size
const smallImage = document.getElementsByClassName("s-img");
const mainImage = document.getElementById("main-img");


for (let i = 0; i <= 3; i++) {
    smallImage[i].addEventListener("click", show);
}

function show() {
    for (let i = 0; i <= 3; i++) {
        smallImage[i].style.border = "none";
        if (smallImage[i].style.border === "none") {
            smallImage[i].style.opacity = "100%";
        }
    }
    event.target.style.border = "3px solid var(--orange)";
    event.target.style.opacity = "50%";

    switch (event.target.src) {
        case "images/image-product-1-thumbnail.jpg":
            mainImage.src = "images/image-product-1.jpg";
            break;

        case "images/image-product-2-thumbnail.jpg":
            mainImage.src = "images/image-product-2.jpg";
            break;

        case "images/image-product-3-thumbnail.jpg":
            mainImage.src = "images/image-product-3.jpg";
            break;

        case "images/image-product-4-thumbnail.jpg":
            mainImage.src = "images/image-product-4.jpg";
            break;

        default:
            mainImage.src = "images/image-product-1.jpg";
            break;
    }
}


//slideshow 

const next = document.getElementById("right");
const previous = document.getElementById("left");

let images = ["images/image-product-1.jpg", "images/image-product-2.jpg", "images/image-product-3.jpg", "images/image-product-4.jpg"];

next.addEventListener("click", nextPic);
previous.addEventListener("click", previousPic);

let i = 0; //current img

function nextPic() {
    if (i >= images.length - 1) {
        i = 0;
    }
    i++;
    mainImage.src = images[i];
}

function previousPic() {
    if (i <= 0) {
        i = images.length;
    }
    i--;
    mainImage.src = images[i];
}


//shopping cart
const cart = document.getElementById("cart-wrapper");
const cartInfo = document.getElementById("cart-info");
cart.addEventListener("click", toggle);

function toggle() {
    cartInfo.classList.toggle("cart-info-toggle")
}


const addBtn = document.getElementById("add-to-cart-btn");
const productNum = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", moreProduct);
minus.addEventListener("click", lessProduct);
// plus and minus the number of products
function moreProduct() {
    productNum.innerText = Number(productNum.innerText) + 1;
}

function lessProduct() {
    if (productNum.innerText > 0) {
        productNum.innerText = Number(productNum.innerText) - 1;
    }
}

addBtn.addEventListener("click", addToCart);

const cartMainPart = document.getElementById("cart-main");
const emptyCart = document.getElementById("empty");

let cartData;

function addToCart() {
    if (productNum.innerText > 0) {
        addItem(productNum.innerText);
    }
    cartData = {
        productName: "Fall Limited Edition Sneakers",
        productCount: productNum.innerText
    }
    addToLocal();

    //delete cart's item
    const deleteBtn = document.getElementById("delete");
    deleteBtn.addEventListener("click", clearCart);

    function clearCart() {
        cartMainPart.style.display = "none";
        emptyCart.style.display = "block";
        productNum.innerText = 0;
        removeFromLocal();
    }

}

//local storage
function checkLocalStorage() {
    if (localStorage.getItem("cart") === null) {
        cartData = {};
    } else {
        cartData = JSON.parse(localStorage.getItem("cart"));
    }
}

//add data to the local storage
function addToLocal() {
    checkLocalStorage();
    cartData.productName = "Fall Limited Edition Sneakers";
    cartData.productCount = productNum.innerText;
    localStorage.setItem("cart", JSON.stringify(cartData));
}

//get data from local storage when page is loaded
function getDataFromLocal() {
    checkLocalStorage();
    if (cartData.productCount !== 0) {
        addItem(cartData.productCount);
        productNum.innerText = cartData.productCount;
    }

    //delete cart's item $ LOCAL STORAGE
    const deleteBtn = document.getElementById("delete");
    deleteBtn.addEventListener("click", clearCart);

    function clearCart() {
        cartMainPart.style.display = "none";
        emptyCart.style.display = "block";
        productNum.innerText = 0;
        removeFromLocal();
    }
}

//remove the product from the local storage
function removeFromLocal() {
    checkLocalStorage();
    cartData.productCount = 0;
    localStorage.setItem("cart", JSON.stringify(cartData));
}

//adding item to the cart
function addItem(n) {
    emptyCart.style.display = "none";
    cartMainPart.innerHTML = `
    <div id="cart-items">
        <div id="item">
          <img
            id="item-img"
            src="images/image-product-1-thumbnail.jpg"
            alt="item image"
          />
          <div id="item-info">
            <p id="item-name">Fall Limitted Edition Sneakers</p>
            <div id="calculations">
              <p id="calculate">$125.00 *${n}</p>
              <p id="total">$${125*n}.00</p>
            </div>
          </div>
          <svg
            id="delete"
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a"
              />
            </defs>
            <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
          </svg>
        </div>
        <button id="checkout-btn">Checkout</button>
      </div>
    `
}