//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

const adicionarAmigo = () => {
    let nomeDosAmigos = document.querySelector('input').value;

    if (nomeDosAmigos === '') {
        alert('Você não adicionou um amigo');
        return;

    } else if (amigos.includes(nomeDosAmigos)) {
        alert('esse nome já existe');

    } else {
        amigos.push(nomeDosAmigos);
        listaDeAmigos();
    }

    limparCampo();
}

const listaDeAmigos = () => {
    let lista = document.querySelector('#listaAmigos');

    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

const sortearAmigo = () => {

    if (amigos.length < 2) {
        alert('Coloque mais de um nome para o sorteio ser feito!');
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let nomeSorteado = amigos[indiceAleatorio];
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = `O nome sorteado é: ${nomeSorteado}`;
    }
}


const limparCampo = () => {
    nomeDosAmigos = document.querySelector('input');
    nomeDosAmigos.value = '';
}











