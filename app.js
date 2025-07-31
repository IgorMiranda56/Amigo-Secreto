//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo(){
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if(nome === ""){
        alert("Por favor, insira um nome.");
        return;
    }
    if(listaAmigos.includes(nome)){
        alert("Este nome já está na lista de amigos.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = '';
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(nome => {
        li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert("A lista de amigos está vazia. Adicione amigos para sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> ${amigoSorteado} é o amigo secreto! </li>`;
}