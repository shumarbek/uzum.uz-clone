const catalogButton = document.querySelector(".catalog__button");
const catalogButtonIcon = document.querySelector(".catalog__button .icon__div img");
const catalog = document.querySelector(".catalog");

catalogButton.addEventListener("click", () => {
    catalog.classList.toggle("active");
    
    if (catalog.classList.contains("active")) {
        catalogButtonIcon.src = "./assets/icons/close.png";
    } else {
        catalogButtonIcon.src = "./assets/icons/catalog.png";
    }
});