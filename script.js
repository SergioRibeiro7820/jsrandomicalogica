var numeroSecreto = Math.random * 10;

function Sorteio() {
  numeroSecreto = parseInt(Math.random() * 10);
}

Sorteio();
var numeroTentativa = 3;

function Adivinhe() {
  var elementoResultado = document.getElementById("resultado");
  var adivinhe = parseInt(document.getElementById("valor").value);

    if (adivinhe > 10 || adivinhe < 0 || isNaN(adivinhe)) {
    elementoResultado.innerHTML = "Inválido!<p>" + "Digite apenas de 0 a 10<p>"
      + "Ainda resta (" + numeroTentativa + ") tentativas.";
  } else if (adivinhe == numeroSecreto) {
    elementoResultado.innerHTML =
      "Parabéns, Você acertou!!!<p>" + "O número é " + numeroSecreto + ".<p>Estou pensando em outro número...<p>" + "Consegue adivinhar?!";
    Sorteio();
    numeroTentaiva = 3;
  } else {
    -- numeroTentativa;
    if (adivinhe > numeroSecreto) {
      elementoResultado.innerHTML =
        "Quase!<p>" + "Tente um número menor. " + "Tentativas Restantes (" + numeroTentativa + ").";
  } else {
      elementoResultado.innerHTML =
        "Quase!<p>" + "Tente um número maior. " + "Tentativas Restantes (" + numeroTentativa + ").";
    }
  }
    if (numeroTentativa === 0) {
    elementoResultado.innerHTML =
      "Poxa, acabaram suas chances!<p>" + "O número era " + numeroSecreto + ".<p>Pensei em um novo número!<p>" + "Consegue adivinhar?!";
    Sorteio();
    numeroTentativa = 3;
  }
}