const form = document.getElementById( 'form-atividade' );
const imgAprovado = `<img src="./assets/image/aprovado.png" alt="Emoji celebrando" />`;
const imgReprovado = `<img src="./assets/image/reprovado.png" alt="Emoji decepcionado" />`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class="result approved">Aprovado</span>`;
const spanReprovado = `<span class="result failed">Reprovado</span>`;
const notaMinima = parseFloat( prompt( 'Digite a nota mínima' ) );

let linhas = '';

form.addEventListener( 'submit', function ( e ) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
} );

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById( 'nome-atividade' );
    const inputNotaAtividade = document.getElementById( 'nota-atividade' );

    if ( atividades.includes( inputNomeAtividade.value ) ) {
        alert( `A atividade ${ inputNomeAtividade.value } já foi inserida` );
    } else {
        atividades.push( inputNomeAtividade.value );
        notas.push( parseFloat( inputNotaAtividade.value ) );

        let linha = '<tr>';
        linha += `<td>${ inputNomeAtividade.value }</td>`;
        linha += `<td>${ inputNotaAtividade.value }</td>`;
        linha += `<td>${ inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {

    const corpoTabela = document.querySelector( 'tbody' );
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById( 'media-final-valor' ).innerHTML = mediaFinal.toFixed( 2 );
    document.getElementById( 'media-final-resultado' ).innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;   

    for ( let i = 0; i < notas.length; i ++ ) {
        somaDasNotas += notas[ i ];
    }

    const media = somaDasNotas / notas.length;
    return media;
}




// addEventListener()     Detecta e reage a eventos como cliques, digitação ou carregamento de página em elementos web
// 'submit'     Detecta quando um formulário está prestes a ser enviado
// preventDefault()     Impede a ação padrão de um evento que o navegador faria
// push()     Adiciona um ou mais elementos ao final de um array
// parseFloat()     Converte uma string em um número de ponto flutuante
// for (){}     Estrutura de controle de fluxo usada para repetir um bloco de código várias vezes
// prompt()     Exibe uma caixa de diálogo ao usuário com uma mensagem e um campo para que ele insira dados
// if (){} else if (){} else {}     Estrutura de controle de fluxo que permite que o código tome decisões e execute blocos de código diferentes com base em condições
// includes()     Verifica se um determinado elemento existe dentro de uma string ou de um array
// alert()     Exibe uma caixa de diálogo pop-up simples no navegador com uma mensagem