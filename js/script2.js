let button = document.querySelector(".button");
let body = document.querySelector(".container");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    // this specific command means we can make sth happen only after clicking at the button
    body.classList.toggle("dark");//this function makes all page go to dark mode;

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";//this instruction changes text inside the button;

});

let formElement = document.querySelector(".form")
formElement.addEventListener("submit", () => {
    console.log('The form have been submitted');
});

formElement.addEventListener("reset", () => {
    console.log('The form have been reseted');
});

let price = document.querySelector(".js-price")
price.addEventListener("submit", (event) => {
    event.preventDefault();

let powUz = document.querySelector(".js-PU");
let cenaOdMetra = 250;
let cena = cenaOdMetra * powUz.value;
let finalPrice = document.querySelector(".js-finalPrice");
finalPrice.innerText = cena;
});