

const div = document.getElementById('contenedor');
const btn = document.getElementById('btnFetchCharacters');
const tit = document.getElementById('titulo');

btn.addEventListener('click', () => {

  let url = 'https://rickandmortyapi.com/api/character';
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => Extraer(data.results));
});


const Extraer = (character) => {
  character.forEach(ch => {
    div.innerHTML += `<div class="tarjeta" >
        <img src="${ch.image}" alt="" id="imagen">
        <div class="contenido-tarjeta">
                        <h2 id="titulo">${ch.name}</h2>
            <p>${ch.species}</p>
            <button id="Insertar">Boton</button>
        </div>`;
  });
}

console.log(div)


//<img src="${ch.image}">