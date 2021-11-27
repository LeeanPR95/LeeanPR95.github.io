// se añade un evento de click que emita una alerta

document.querySelector('button').onclick = function()
{
    alert("Hmmm... ¿Dónde estás tocando? (⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)");
}

// Acá podemos cambiar el titulo con una variable en js
const miTitulo = document.querySelector('h1')
miTitulo.textContent = 'Blog de LeeanPR95';


/* probamos las condicionales
let numero = 5
if (numero !== 5) {
    alert ('No es 5')
} else {
    alert ('El número es 5')
}
*/
