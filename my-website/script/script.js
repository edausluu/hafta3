
const searchForm = document.querySelector('.search-form');
const cartItem = document.querySelector('.cart-items-container');
const navbar = document.querySelector('.navbar');

//! Buttons
const searchBtn = document.querySelector('#search-btn');
const cartBtn = document.querySelector('#cart-btn');
const menuBtn = document.querySelector('#menu-btn');


searchBtn.addEventListener("click", function (e) {
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    navbar.classList.remove('active');
    e.stopPropagation();
});


cartBtn.addEventListener("click", function (e) {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    e.stopPropagation();
});


menuBtn.addEventListener("click", function (e) {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    e.stopPropagation();
});


document.addEventListener("click", function (e) {
    if (!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)) {
        searchForm.classList.remove('active');
    }

    if (!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem)) {
        cartItem.classList.remove('active');
    }

    if (!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)) {
        navbar.classList.remove('active');
    }
});
