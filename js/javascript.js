//comentário de uma linha

/*mùl
ti
plas

linha*/

// tres froma d dclarar uma variavl (sem tipo)
// o var  o lt se idstinguem plo copo e declaração.

let nome;
var sobrenome;

if (nome == "Olivio") {
    sobrenome = "Rodriga";
    let idade = 32;
    var pet = "dog";
    console.log("nome: "+nome+ "Sobrenome: " +sobrenome+ "Idade: "+idade+ "Pet: " +pet);
}
//console.log("nome: "+nome+ "Sobrenome: " +sobrenome+ "Idade: "+idade+ "Pet: " +pet);
// Erututura de seleção no JS

/*
if (nome == "Olivio"){
    console.log("nome: "+nome);
}
else {
    console.log("nome: "+"Olívia Rodrigo");
}
*/

//

if (idade == "32"){
    console.log("A");
}
if (idade === "32"){
    console.log("B");
}

peso = 80;
imc = peso/(altura*altura)

//Classificação  do IMC

 if(imc < 18.5) {
    console.log("Abaixo do peso");
 }
 else if (imc >= 18.5 && imc < 25) {
    console.log("Peso Normal");
 }
 else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
 }
 else if (imc >= 30 && imc < 35) {
    console.log("Obsidade 1");
 }
 else if (imc >= 35 && imc < 40) {
    console.log("Obsidade 2");
 }
 else if (imc >= 40) {
    console.log("Obesidade 3");
 }

 // Switch cas etrutura de seleção para imc
 switch(true){
    case imc < 18.5: console.log("Abaixo do peso normal"); break;
    case imc >= 18.5 && imc < 25: console.log("Peso normal"); break;
    case imc >= 25 && imc < 30: console.log("Acima do peso normal"); break;
    case imc >= 30 && imc < 35: console.log("Obesidad Grau 1"); break;
    case imc >= 35 && imc < 40: console.log("Obesidad Grau 2"); break;
    case imc >= 40: console.log("Obesidad Grau 3"); break;
 }


 //Switch case: estrutura de seleção

 a = 2

 switch(a){
    case a**a==4: console.log("A"); break;
    case 2==2: console.log("B"); break;
    case 3==3: console.log("C"); break;
    default: console.log("D");
 }

 // Estrutura de repetição

 let i = 0;
 while(i < 5) {
    console.log(i);
    i++;
 }