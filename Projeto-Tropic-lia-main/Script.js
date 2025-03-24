document.addEventListener('DOMContentLoaded', function (){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
    })

    const aumentaFonteBotão = document.getElementById('aumentar-fonte'); 
    const diminuiFonteBotão = document.getElementById('diminuir-fonte'); 

    let tamanhoAtualFonte = 1; 

    aumentaFonteBotão.addEventListener ('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
 
    diminuiFonteBotão.addEventListener ('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`

    })
})