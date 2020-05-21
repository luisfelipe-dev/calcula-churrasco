/* 
  REGRA DA CALCULADORA DE CHURRASCO
   CARNE: 
    400 GRAMAS POR PESSOA
    + de 6 horas - 650

   CERVEJA:
    1200 ML POR PESSOA
    + de 6 horas - 2000 ML
   
   REFRI/AGUA
   1000 ML POR PESSOA
   + de 6 horas - 1500 ML

   Crianças valem a metade de cada item.
*/

let qtdAdultos = document.getElementById("adultos");
let qtdCriancas = document.getElementById("criancas");
let qtdDuracao = document.getElementById("duracao");

let resultado = document.getElementById("result");
let resultadoBebibdas = document.getElementById("result-drinks");

const calculaCarne = (duracao) => {
  if (duracao > 6) {
    return 650;
  } else {
    return 400;
  }
};

const calculaCerveja = (duracao) => {
  if (duracao > 6) {
    return 2000;
  } else {
    return 1200;
  }
};

const calculaBebida = (duracao) => {
  if (duracao > 6) {
    return 1500;
  } else {
    return 1000;
  }
};

const calcular = () => {
  let adultos = qtdAdultos.value;
  let criancas = qtdCriancas.value;
  let duracao = qtdDuracao.value;

  setInterval(() => {
    resultado.classList.add("active");

    resultadoBebibdas.innerHTML = `${duracao} Garrafas`;
  }, 1500);
};
