const navbar = document.querySelector('.navbar');
const menu = document.getElementById('menu');

menu.onclick = () => {
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    },
});