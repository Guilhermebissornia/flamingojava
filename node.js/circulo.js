// Importe o modulo 'readline' para lidar com a entrada do usuario
const readline = require('readline');


//crie uma interface de leitura e escrita
const rl = readline.createInterface ({
input: process.stdin,
output: process.stdout
});


//função para calcular a area do circulo
function calcularareacirculo(raio){
const area = Math.PI * Math.pow(raio, 2)
return area;
}

// pergunte ao usuario pelo raio do circulo

rl.question('informe o raio do circulo: ', (raio) => {
    
    // converter a entrasa do usuario para um numero 
    raio = parseFloat(raio);})

    //verificar se a entrada é valida 

if(!isNaN(raio) && raio > 0 ){
const area = calcularareacirculo(raio);
console.log(`A área do círculo com o raio ${raio} é: ${area.toFixed(2)}`);

} else {
    console.log('por favor, insira um raio valido maior que zero')
}

// fechar a interface de leitura 
rl.close();

