var somar = require("./modulos/somar");
var subtracao = require("./modulos/subtracao");
var multiplicacao = require("./modulos/multiplicacao");
var divisao = require("./modulos/divisao");
var media = require("./modulos/media");
var mensagem = require("./modulos/mensagem");
var nome = "Mariana";
var msg = "mensagem";

console.log("A soma de x e y é; " + somar(12,84));
console.log("A subtração de x e y é; " + subtracao(25,34));
console.log("O produto de x e y é; " + multiplicacao(23,90));
console.log("A divisão de x e y é; " + divisao(20,10));
console.log("A média de x e y é; " + media(22,90));
console.log(mensagem(nome, msg));
