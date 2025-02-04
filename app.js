// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//creacion de array para guardar los amigos
let amigos=[];

//funcion para agregar amigos
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombreAmigo = input.value;
    if (nombreAmigo) {
        amigos.push(nombreAmigo);
        console.log(amigos);
        input.value = ''; 
        actualizarListaAmigos();
    }
    else if (nombreAmigo === ''){
        alert('Debes ingresar un nombre');
    }
}

//funcion para actualizar la lista de amigos
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//funcion para sortear amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amig@ secreto es: <li>${amigoSorteado}</li>`;
}