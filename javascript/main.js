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