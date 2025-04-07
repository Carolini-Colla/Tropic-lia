document.addEventListener('DOMContentLoaded', function (){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')

        const botãoSelecionado = BotãoAcessibilidade.getAtribute ('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado)

//Código omitido
    })

    const aumentaFonteBotão = document.getElementById('aumentar-fonte'); 
    const diminuiFonteBotão = document.getElementById('diminuir-fonte'); 

    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1; 

    aumentaFonteBotão.addEventListener ('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
 
    diminuiFonteBotão.addEventListener ('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })

    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste')
    })


})