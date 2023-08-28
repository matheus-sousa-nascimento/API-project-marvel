// NavBar
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// pg characters
let marvelApiKey = '00bd7dc3ebd4da7509c41d3af9f8691c';
let ts = "1693216557450";
let hashVal = "d527f316d361aa621c33f9d1e23adc36";

let input = document.getElementById("input-box");
let button = document.getElementById("submit-button");
let showContainer = document.getElementById(".list");

let date = new Date();
console.log(date.getTime());

const [timestamp, ApiKey, hash] = [ts, marvelApiKey, hashVal]

button.addEventListener.addEventListener("click", (getRsult = async () =>{
    if (input.value.trim().lenght < 1){
        alert("input cannot be blank");
    }
    showContainer.innerHTML = "";
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&name=${input.value}`

    const response = await fetch(url);
    constjsonData = await response.json();
    json.Data["results"].forEach((element) => {
        showContainer.innerHTML = `<div class="container-character-image"> <img src="${element.thumbnail["path"] + "." + element.description}</div>"
        </div>;`
    });
}));

window.onload = () => {
    getRsult()
}