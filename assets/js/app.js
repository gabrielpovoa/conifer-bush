const navbar = document.querySelector('.navbar');
const menu = document.getElementById('menu');

menu.onclick = () => {
    navbar.classList.toggle('active')
}