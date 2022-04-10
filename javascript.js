'use strict';

//Variáveis
let somaMussarela = 0;
let somaPortuguesa = 0;
let somaFrango = 0;
let vendaMussarela = 0.00;
let vendaPortuguesa = 0.00;
let vendaFrango = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//Eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//Funções
function venda(e) {
  if (document.getElementById('mussarela').checked) {
    somaMussarela = somaMussarela + 1;
    vendaMussarela = vendaMussarela + 25.00;
    document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
    document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
  } else if (document.getElementById('portuguesa').checked) {
    somaPortuguesa = somaPortuguesa + 1;
    vendaPortuguesa = vendaPortuguesa + 25.00;
    document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
    document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
  } else if (document.getElementById('frango').checked) {
    somaFrango = somaFrango + 1;
    vendaFrango = vendaFrango + 25.00;
    document.getElementById('resultadoFrango').innerHTML = somaFrango;
    document.getElementById('vendaFrango').innerHTML = vendaFrango.toFixed(2);
  }
}

function estorno(e) {
  if (document.getElementById('mussarela').checked) {
    somaMussarela = somaMussarela - 1;
    vendaMussarela = vendaMussarela - 25.00;
    if (somaMussarela < 0) {
      somaMussarela = 0;
      vendaMussarela = 0.00;
    }
    document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
    document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);

  } else if (document.getElementById('portuguesa').checked) {
    somaPortuguesa = somaPortuguesa - 1;
    vendaPortuguesa = vendaPortuguesa - 25.00;
    if (somaPortuguesa < 0) {
      somaPortuguesa = 0;
      vendaPortuguesa = 0.00;
    }
    document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
    document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);

  } else if (document.getElementById('frango').checked) {
    somaFrango = somaFrango - 1;
    vendaFrango = vendaFrango - 25.00;
    if (somaFrango < 0) {
      somaFrango = 0;
      vendaFrango = 0.00;
    }
    document.getElementById('resultadoFrango').innerHTML = somaFrango;
    document.getElementById('vendaFrango').innerHTML = vendaFrango.toFixed(2);
  }
}

function planilha(e) {
  TableToExcel.convert(document.getElementById('table'));
}