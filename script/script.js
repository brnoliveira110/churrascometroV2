let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let divCarne = document.getElementById("divCarne");
let divCerveja = document.getElementById("divCerveja");
let divBebida = document.getElementById("divBebida");

function calcular() {
  console.log("Calculando...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qdtTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;
  let qdtCerveja = cervejaPP(duracao) * adultos;
  let qdtTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  divCarne.innerHTML = `<h5 class="mb-0">${
    qdtTotalCarne / 1000
  } Kg de Carne</h5>`;
  divCerveja.innerHTML = `<h5 class="mb-0">${Math.ceil(
    qdtCerveja / 355
  )} Latas de 355ml de Cerveja</h5>`;
  divBebida.innerHTML = `<h5 class="mb-0">${Math.ceil(
    qdtTotalBebidas / 2000
  )} Garrafas de 2 litros de Bebidas</h5>`;
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 500;
  } else {
    return 300;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 700;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 700;
  }
}
