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

const prompt = require( 'prompt-sync' )();
const idadeDoNinja = Number( prompt( 'Qual é sua idade? ' ) );
if ( idadeDoNinja >= 16 ) {
    console.log( 'Idade para ser chunin.' );
} else if ( idadeDoNinja >= 13 ) {
    console.log( 'Idade para ser genin.' );
} else {
    console.log( 'Precisa ir para a academia ninja.' );
}

const aprovado = 'Você pode ser um genin';
const reprovado = 'Você não pode ser um genin';
const notaNaAcademia = Number( prompt( 'Qual a sua nota final: ' ) );
const exameFinal = notaNaAcademia >= 7 ? aprovado : reprovado;
console.log( exameFinal );

const idadeDoNinjaGraduado = Number( prompt( 'Idade: ' ) );
const notaNaGraduacao = Number( prompt( 'Nota: ' ) );
const requisitoParaGenin = idadeDoNinjaGraduado > 12 && notaNaGraduacao >= 7 ? aprovado : reprovado;
console.log( requisitoParaGenin );

const aprovadoChunin = 'Você pode ser um chunin';
const reprovadoChunin = 'Você não pode ser um chunin';
const idadeDoNinjaGenin = Number( prompt( 'Idade do genin: ' ) );
const notaDoNinjaGenin = Number( prompt( 'Nota do genin: ' ) );
const requisitoParaChunin = notaDoNinjaGenin >= 97 || idadeDoNinjaGenin >= 21 ? aprovadoChunin : reprovadoChunin;
console.log( requisitoParaChunin );

function olaMundo() {
    return 'Olá mundo';
}
console.log( olaMundo() );    // Olá mundo

function descobrirIdade( anoDeNascimento ) {
    return 2025 - anoDeNascimento;
}
console.log( descobrirIdade( 1994 ) );    // 31

function somarNumeros( numeroA, numeroB, numeroC ) {
    return  numeroA + numeroB + numeroC;
}
console.log( somarNumeros( 7, 10, 8 ) );    // 25

function subtrairNumero( numeroA, numeroB, numeroC ) {
    let resultado = numeroA - numeroB - numeroC;
    return resultado;
}
const resultadoDaSubtracao = subtrairNumero( 40, 30, 5 );
console.log( 'O resultado da subtração do número foi: ' + resultadoDaSubtracao );    // O resultado da subtração do número foi: 5

let ninjaDaFolha = 'Naruto';
function saudacoes() {
    console.log( `Olá ${ ninjaDaFolha }` );    // Olá Naruto
}
saudacoes();

function convocacao() {
    let ninjaDaFolha = `Sasuke Uchiha`;
    console.log( `Você foi convodado ${ ninjaDaFolha }!` );    // Você foi convodado Sasuke Uchiha!
}
convocacao();
console.log( ninjaDaFolha );    // Naruto

function parabenizandoNinja() {
    let ninjaDaFolha = 'Naruto';

    function parabens() {
        console.log( `Parabéns ${ ninjaDaFolha }` );    // Está aqui seu prêmio Naruto
    }

    function premio() {
        console.log( `Está aqui seu prêmio ${ ninjaDaFolha }` );    // Está aqui seu prêmio Naruto
    }

    return {
        parabens: parabens,
        premio: premio
    };
}
const ninjaPremiado = parabenizandoNinja();
ninjaPremiado.parabens();
ninjaPremiado.premio();




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
// require( 'prompt-sync' )()     Obtém entrada de dados do usuário diretamente no terminal.
// if (){} else if (){} else {}     Estrutura de controle de fluxo que permite que o código tome decisões e execute blocos de código diferentes com base em condições
// const operadorTernario = ( condição ) ? valor_se_verdadeiro : valor_se_falso     Variação do if (){} else if (){} else {}
// Number()     Converte um valor de qualquer tipo para o tipo número
// &&     AND Verifica se todas as condições conectadas são verdadeiras
// ||     OR Verifica se pelo menos uma das condições conectadas são verdadeiras
// function nome(){}     Definida para não receber nenhum valor de entrada
// function nome( comParametro ){}     Definida para receber um ou mais valores de entrada
// ( function (){} )()     Immediately Invoked Function definida e executada no mesmo instante logo após sua criação
// return     Define o valor que uma função deve devolver ou enviar de volta para o local de onde ela foi chamada
// Escopo     Refere-se ao contexto onde variáveis, funções e outros identificadores são visíveis e acessíveis.
// Escopo Global     Variáveis e funções declaradas fora de qualquer bloco ou função. São acessíveis de qualquer lugar do código
// Escopo Local     Variáveis e funções declaradas dentro de um escopo específico
// Escopo de Função     Declaradas dentro de uma função (acessíveis apenas dentro dela)
// Escopo de Bloco     Declaradas com 'let' ou 'const' dentro de um bloco {} (if, for, while, do while)
// Escopo Léxico     Significa que o escopo de uma variável é determinado pela sua posição no código-fonte (onde foi escrita), e não por onde a função é chamada ou executada
// Closure     Ocorre quando uma função interna (aninhada) mantém o acesso ao escopo de sua função externa, mesmo depois que a função externa já foi executada