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
        case "http://127.0.0.1:5500/images/image-product-1-thumbnail.jpg":
            mainImage.src = "http://127.0.0.1:5500/images/image-product-1.jpg";
            break;

        case "http://127.0.0.1:5500/images/image-product-2-thumbnail.jpg":
            mainImage.src = "http://127.0.0.1:5500/images/image-product-2.jpg";
            break;

        case "http://127.0.0.1:5500/images/image-product-3-thumbnail.jpg":
            mainImage.src = "http://127.0.0.1:5500/images/image-product-3.jpg";
            break;

        case "http://127.0.0.1:5500/images/image-product-4-thumbnail.jpg":
            mainImage.src = "http://127.0.0.1:5500/images/image-product-4.jpg";
            break;

        default:
            mainImage.src = "http://127.0.0.1:5500/images/image-product-1.jpg";
            break;
    }
}


//slideshow

const next = document.getElementById("right");
const previous = document.getElementById("left");

let images = ["http://127.0.0.1:5500/images/image-product-1.jpg", "http://127.0.0.1:5500/images/image-product-2.jpg", "http://127.0.0.1:5500/images/image-product-3.jpg", "http://127.0.0.1:5500/images/image-product-4.jpg"];

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