alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto chute não for igual ao numerosecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    // se chute for igual ao número secreto

    if (chute == numeroSecreto) {
        alert(`Você acertou o núemro secreto ${numeroSecreto}! com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`Seu numero secreto é menor que ${chute}`);
        } else {
            alert(`Seu numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
    }
}


