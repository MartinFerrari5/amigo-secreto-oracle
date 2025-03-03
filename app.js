// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Llamados al DOM
const listaAmigos = document.querySelector(".name-list")
const result = document.querySelector(".result-list")
const input = document.querySelector(".input-name")


// Arreglo de amigos
const amigos = []

// Funcion para agregar un amigo
function agregarAmigo(){
    result.innerHTML = ""
    let amigo = input.value
    if(amigo === ""){
        alert("Por favor, ingrese un nombre valid")
        return
    }
    amigos.push(amigo)
    
    listaAmigos.innerHTML += `<li>${amigo}</li>`
    input.value = ""
}

// Funcion para sortear un amigo
function sortearAmigo(){
    let amigo = amigos[Math.floor(Math.random() * amigos.length)]
    listaAmigos.innerHTML = ""
    result.innerHTML = `<li>El amigo secreto sorteado es: ${amigo}</li>`
}