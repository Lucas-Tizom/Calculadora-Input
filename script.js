
//função de adição
function adc() {
   n1 = document.getElementById("v1").value;
   n2 = document.getElementById("v2").value;
   n3 = parseInt(n1) + parseInt(n2)
   var resultado = document.getElementById("result")
   resultado.innerHTML = "Seu resultado é: " + n3
}
//função de subtração
function sbt() {
   n1 = document.getElementById("v1").value;
   n2 = document.getElementById("v2").value;
   n3 = parseInt(n1) - parseInt(n2);
   var resultado = document.getElementById("result")
   resultado.innerHTML = "Seu resultado é: " + n3
}
//função de multiplicação
function mtp() {
   n1 = document.getElementById("v1").value;
   n2 = document.getElementById("v2").value;
   n3 = parseInt(n1) * parseInt(n2);
   var resultado = document.getElementById("result")
   resultado.innerHTML = "Seu resultado é: " + n3
}
//função de divisão
function div() {
   n1 = document.getElementById("v1").value;
   n2 = document.getElementById("v2").value;
   n3 = parseInt(n1) / parseInt(n2);
   var resultado = document.getElementById("result")
   resultado.innerHTML = "Seu resultado é: " + n3
}
//função de exponenciação
function exp() {
   n1 = document.getElementById("v1").value;
   n2 = document.getElementById("v2").value;
   n3 = parseInt(n1) ** parseInt(n2);
   var resultado = document.getElementById("result")
   resultado.innerHTML = "Seu resultado é: " + n3
}
//função de porcentagem
function pct() {
   n1 = document.getElementById("v1").value;
   n2 = document.getElementById("v2").value;
   n3 = (parseInt(n1)/100) * parseInt(n2);
   var resultado = document.getElementById("result")
   resultado.innerHTML = "Seu resultado é: " + n3 
}

/* n1 é o primeiro valor, n2 é o segundo valor e n3 é o resultado da operação. 
A variável resultado é o que usamos pra manipular o parágrafo */
