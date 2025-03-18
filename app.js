// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//
// Agrega un nuevo amigo al arreglo o array de la variable.
// Hay que revisar que el nombre no esté vacío antes de agregarlo y actualiza la lista visual.
// se crea la funcion agregar amigo, que se obtiene del ID decretado anteriormente amigo.
//
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

// Actualiza la visualización de la lista de amigos en el Document Object Model (DOM), creando elementos para cada amigo ingresado
//
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}

//Sortea y muestra un amigo de la lista de amigos de manera aleatoria sorteada, el cual sería el ganador del sorteo
//La funcion sortearAmigo Revisa que antes de sortear no este la lista vacia
//
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Ingrese al menos un amigo. Sin amigos, no se puede jugar!");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
  }
}