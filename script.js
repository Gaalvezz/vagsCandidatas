
// script para quando a pertar o botao ver mais aparecer novas vagas mode de celular

var btn = document.querySelector('#visibily');
var container =document.querySelector('.vermais');


btn.addEventListener('click',function(){

    if(container.style.display === 'block'){
        container.style.display = 'none';
    }
    else {
        container.style.display = 'block';
    }
});

// modal para quando apertar desistir da vaga e fechar ..



function abrirModal(){
    // cria um cont modal -- chamar o ID FADE
    const modal = document.getElementById('janela-modal')

    //classList.add cria uma clase . clase abrir 
    modal.classList.add('abrir')
    //add.eventlistener cria um evento -- evento de click
    modal.addEventListener('click', (e) => {
        //acontecera se o ID for clicado 
                        //  || significa ou se clicar fora irar fechar tambem
        if(e.target.id == 'fechar' || e.target.id == 'desistirr' )
        //quando a classe abrir existir ela sera removida
        modal.classList.remove('abrir')

    })

}

// criando a opcao de remove a vaga da tela quando desistir


