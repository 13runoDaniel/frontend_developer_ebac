let variavelMutavel = 'Valor que pode ser substituído.';
const variavelImutavel = 'Valor que não pode ser substituído e deve ser iniciado com um valor.';
console.log( variavelMutavel );    // Valor que pode ser substituído
console.log( variavelImutavel );    // Valor que não pode ser substituído e deve ser iniciado com um valor.
variavelMutavel = 'Valor mudado.';
console.log( variavelMutavel );    // Valor mudado.

let string = '5';
console.log( typeof( string ) );    // string
let number = 5;
console.log( typeof( number ) );    // number
let indefinida;
console.log( typeof( indefinida ) );    // undefined
let booleanoVerdadeiro = true;
console.log( typeof( booleanoVerdadeiro ) );    // boolean
let booleanoFalso = false;
console.log( typeof( booleanoFalso ) );    // boolean
number = '5';
console.log( typeof( number ) );    // string
number = parseInt( number );
console.log( number );    // 5
console.log( typeof( parseInt( 8 ) ) );    // number

const listaDeArrays = [ 'html', 'css', 'javascript' ];
console.log( listaDeArrays );    // [ 'html', 'css', 'javascript' ]
console.log( typeof( listaDeArrays ) );    // object
console.log( listaDeArrays[ 2 ] );    // javascript
console.log( listaDeArrays.length );    // 3
listaDeArrays.push( 'PowerShell' );
console.log( listaDeArrays.length );    // 4
console.log( listaDeArrays );    // [ 'html', 'css', 'javascript', 'PowerShell' ]
console.log( listaDeArrays.splice( 2, 2 ) );    // [ 'javascript', 'PowerShell' ]
console.log( listaDeArrays );    // [ 'html', 'css' ]

let ninja = [ 'Naruto', 'Sasuke', 'Sakura', 'kakashi' ];
for ( let i = 0; i < ninja.length; i ++ ) {
    console.log( 'Eu sou: ' + ninja[ i ] );    // Eu sou: Naruto    Eu sou: Sasuke    Eu sou: Sakura    Eu sou: kakashi
}

let aldeia = 0;
while ( aldeia < ninja.length ) {
    console.log( 'Eu sou: ' + ninja[ aldeia ] + ' um(a) ninja da aldeia da folha' );    // Eu sou: Naruto um(a) ninja da aldeia da folha    Eu sou: Sasuke um(a) ninja da aldeia da folha    Eu sou: Sakura um(a) ninja da aldeia da folha    Eu sou: kakashi um(a) ninja da aldeia da folha
    aldeia ++;
}

let timeSete = 0;
do {
    console.log( 'Eu sou: ' + ninja[ timeSete ] + ' do time 7' );    // Eu sou: Naruto do time 7    Eu sou: Sasuke do time 7    Eu sou: Sakura do time 7    Eu sou: kakashi do time 7
    timeSete ++;
} while ( timeSete < ninja.length );




// =     Atribui um valor a uma variável
// ==     Compara apenas o valor, podendo converter o tipo
// ===     Compara o valor e o tipo. Não faz conversão
// ''     O tipo mais comum para criar strings simples
// ""     Também muito comum e funciona da mesma forma que as aspas simples
// console     Objeto global que fornece acesso à interface de depuração (debug) do ambiente de execução
// log()     Método do objeto console, exibe informações na tela do console
// NaN     Valor especial que significa não é um número
// typeof()     Verifica o tipo de dados de uma variável
// parseInt()     Analisa uma string e retorna um número inteiro
// [  ]     Array é uma lista ordenada de valores que podem ser de qualquer tipo
// .length     Retorna o número de elementos de um array ou o número de caracteres de uma string
// push()     Adiciona um ou mais elementos ao final de um array
// splice()     Remove ou substitui elementos em qualquer posição de um array
// for (){}     Estrutura de controle de fluxo usada para repetir um bloco de código várias vezes
// while (){}     Estrutura de controle de fluxo usada para repetir um bloco de código, mas de forma condicional
// do {} while ()     Variação do laço while, a diferença é que o bloco de código é executado pelo menos uma vez