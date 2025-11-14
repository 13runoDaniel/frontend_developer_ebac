( function () {
    const form = document.getElementById( 'form' );
    const campoA = document.getElementById( 'campo-a' );
    const campoB = document.getElementById( 'campo-b' );
    const mensagemVazia = document.getElementById( 'empty-field-message' );
    const mensagemIgual = document.getElementById( 'equal-field-message' );
    const mensagemReprovado = document.getElementById( 'rejected-message' );
    const mensagemAprovado = document.getElementById( 'approved-message' );
    const todasAsMensagens = [ mensagemVazia, mensagemIgual, mensagemReprovado, mensagemAprovado ];

    function limparMensagem() {
        todasAsMensagens.forEach( function ( e ) {
            e.classList.remove( 'warning' );
        } );
    }

    form.addEventListener( 'submit', function ( event ) {
        event.preventDefault();

        limparMensagem();

        const numA = parseInt( campoA.value );
        const numB = parseInt( campoB.value );

        if ( isNaN( numA ) || isNaN( numB ) ) {
            mensagemVazia.classList.add( 'warning' );
            return;
        }

        if ( numA > numB ) {
            mensagemReprovado.classList.add( 'warning' );
        } else if ( numA === numB ) {
            mensagemIgual.classList.add( 'warning' );
        } else {
            mensagemAprovado.classList.add( 'warning' );
        }
    } );
} )();




// ( function (){} )()     Immediately Invoked Function definida e executada no mesmo instante logo após sua criação
// document     Objeto que representa a própria página web (o documento HTML)
// .getElementById()     Seleciona um único elemento pelo seu atributo id.
// []     Array é uma lista ordenada de valores que podem ser de qualquer tipo
// forEach()     Itera sobre os elementos de um array, executando uma função de callback fornecida para cada elemento, mas sem alterar o array original e sem retornar um novo array
// .classList .add() (adicionar), .remove()(remover)     Alterna ou verifica se um elemento possui uma classe específica
// addEventListener()     Detecta e reage a eventos como cliques, digitação ou carregamento de página em elementos web
// 'submit'     Detecta quando um formulário está prestes a ser enviado
// preventDefault()     Impede a ação padrão de um evento que o navegador faria
// parseInt()     Analisa uma string e retorna um número inteiro
// if (){} else if (){} else {}     Estrutura de controle de fluxo que permite que o código tome decisões e execute blocos de código diferentes com base em condições
// isNaN()     Determina se um valor é "Not-a-Number"
// ||     OR Verifica se pelo menos uma das condições conectadas são verdadeiras
// ===     Compara o valor e o tipo. Não faz conversão