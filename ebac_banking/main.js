const form = document.getElementById( 'form-deposito' );
const nomeDoBeneficiario = document.getElementById( 'nome-beneficiario' );
let formEstaValido = false;

function validarNome( nomeCompleto ) {
    const nomeComoArray = nomeCompleto.split( ' ' );
    return nomeComoArray.length >= 2;
}

form.addEventListener( 'submit', function ( event ) {
    event.preventDefault();

    const valorDoDeposito = document.getElementById( 'valor-deposito' );
    const numeroDaContaDoBeneficiario = document.getElementById( 'numero-conta' );
    const mensagemDeSucesso = `Montante de R$ <b>${ valorDoDeposito.value }</b> depositado para o cliente: <b>${ nomeDoBeneficiario.value }</b>, na conta <b>${ numeroDaContaDoBeneficiario.value }</b>`;

    formEstaValido = validarNome( nomeDoBeneficiario.value );
    if ( formEstaValido ) {
        const containerMensagemDeSucesso = document.querySelector( '.success-message' ); 
        containerMensagemDeSucesso.innerHTML = mensagemDeSucesso;
        containerMensagemDeSucesso.style.display = 'block';

        nomeDoBeneficiario.value = '';
        numeroDaContaDoBeneficiario.value = '';
        valorDoDeposito.value = '';
    } else {
        nomeDoBeneficiario.style.border = '1px solid red';
        document.querySelector( '.error-message' ).style.display = 'block'; 
    }
} );

nomeDoBeneficiario.addEventListener( 'keyup', function ( e ) {
    formEstaValido = validarNome( e.target.value );

    if ( !formEstaValido ) {
        nomeDoBeneficiario.classList.add( 'error' );
        document.querySelector( '.error-message' ).style.display = 'block'; 
    } else {
        nomeDoBeneficiario.classList.remove( 'error' );
        document.querySelector( '.error-message' ).style.display = 'none'; 
    }
} );




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
// .innerHTML     Obtém ou define o conteúdo HTML de um elemento específico do DOM
// 'change'     Detecta quando o valor de um elemento de formulário é modificado e o elemento perde o foco
// 'keyup'     Detecta quando uma tecla é solta após ter sido pressionada
// .classList .add() (adicionar), .remove()(remover)     Alterna ou verifica se um elemento possui uma classe específica