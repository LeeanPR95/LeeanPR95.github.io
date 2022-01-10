
// Acá podemos cambiar el titulo con una variable en js
const miTitulo = document.querySelector(".Mititulo")
miTitulo.textContent = ('Blog de LeeanPR95');

const yourname = document.querySelector('#yourname');
yourname.onclick = function () {
    let name = prompt("Dime tu nombre, adelante UwU");
    alert(`Hola ${name}, bienvenido a esta humilde página OwO`)
}

document.querySelector('.tocame').onclick = function () {
    alert("Hmmm... ¿Dónde estás tocando? (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)");
}
