const form = document.getElementById( 'form-atividade' );
const imgAprovado = `<img src="./assets/image/aprovado.png" alt="Emoji celebrando" />`;
const imgReprovado = `<img src="./assets/image/reprovado.png" alt="Emoji decepcionado" />`;

let linhas = '';

form.addEventListener( 'submit', function ( e ) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById( 'nome-atividade' );
    const inputNotaAtividade = document.getElementById( 'nota-atividade' );

    let linha = '<tr>';
    linha += `<td>${ inputNomeAtividade.value }</td>`;
    linha += `<td>${ inputNotaAtividade.value }</td>`;
    linha += `<td>${ inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado }</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector( 'tbody' );
    corpoTabela.innerHTML = linhas;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
} );




// addEventListener()     Detecta e reage a eventos como cliques, digitação ou carregamento de página em elementos web
// 'submit'     Detecta quando um formulário está prestes a ser enviado
// preventDefault()     Impede a ação padrão de um evento que o navegador faria