alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 10;
console.log(numeroSecreto)
let chute = prompt('Escolha um número de 1 a 10.')

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
     alert(`Você acertou o núemro secreto! ${numeroSecreto}`);
} else {
    alert('Você errou.');
}

