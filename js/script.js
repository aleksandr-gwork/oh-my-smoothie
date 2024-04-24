const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuItems = document.querySelectorAll('.mobile-menu-item');
const menuItems = document.querySelectorAll('.menu-grid-item');
const inputProduct = document.getElementById('input-product');

let menuOpen = false;
menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        mobileMenu.classList.add('active');
        menuOpen=true;
    }
    else {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('active');
        menuOpen=false;
    }
})

mobileMenuItems.forEach(item => {
    item.addEventListener('click', ()=> {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('active');
        menuOpen=false;
    })
})

menuItems.forEach(item => {
    const title = item.querySelector('.menu-grid-item-title');

    item.querySelector('.menu-grid-item-button').addEventListener('click', ()=> {
        inputProduct.value = title.textContent;
    })
})