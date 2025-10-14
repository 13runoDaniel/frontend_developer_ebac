const form = document.getElementById( 'form-deposito' );

function validarNome( nomeCompleto ) {
    const nomeComoArray = nomeCompleto.split( ' ' );
    return nomeComoArray.length >= 2;
}

form.addEventListener( 'submit', function ( event ) {
    let formEstaValido = false;
    event.preventDefault();

    const nomeDoBeneficiario = document.getElementById( 'nome-beneficiario' );
    const numeroDaContaDoBeneficiario = document.getElementById( 'numero-conta' );
    const valorDoDeposito = document.getElementById( 'valor-deposito' );
    const mensagemDeSucesso = `Montante de R$ ${ valorDoDeposito.value } depositado para o cliente: ${ nomeDoBeneficiario.value }, na conta ${ numeroDaContaDoBeneficiario.value }`;

    formEstaValido = validarNome( nomeDoBeneficiario.value );
    if ( formEstaValido ) {
        alert( mensagemDeSucesso );

        nomeDoBeneficiario.value = '';
        numeroDaContaDoBeneficiario.value = '';
        valorDoDeposito.value = '';
    } else {
        alert( 'O nome não está completo' );
    }
} );

console.log( form );




// addEventListener()     Detecta e reage a eventos como cliques, digitação ou carregamento de página em elementos web
// 'submit'     Detecta quando um formulário está prestes a ser enviado
// preventDefault()     Impede a ação padrão de um evento que o navegador faria
// split()     Divide uma string em um array de substrings usando um delimitador especificado
// .length     Retorna o número de elementos de um array ou o número de caracteres de uma string
// if (){} else if (){} else {}     Estrutura de controle de fluxo que permite que o código tome decisões e execute blocos de código diferentes com base em condições
// .value     Obtém ou define o conteúdo atual de elementos que armazenam um valor
// alert()     Exibe uma caixa de diálogo pop-up simples no navegador com uma mensagem
// ``     A forma mais moderna e flexível que permite interpolar variáveis usando ${ minhaVariavel } e usar quebras de linha
// ${  }     Permite embutir valores dinâmicos ou resultados de código JavaScript dentro de uma string