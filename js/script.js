// NavBar
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// pg characters
const marvelApiKey = '00bd7dc3ebd4da7509c41d3af9f8691c';

function getAllHeroes() {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=00bd7dc3ebd4da7509c41d3af9f8691c`)
}