
function carregar() {
    var msg = document.getElementById('msg1');
    var msg2 = document.getElementById('msg2');
    var imagem = document.getElementById('imagem-pagInicial');
    var data = new Date();
    var hora = data.getHours();
    var hora = 10;

    var testeClassmsg1 = document.querySelector('.msg1-bomdia');
    var testeClassmsg2 = document.querySelector('.msg2-bomdia');

    var mql800 = window.matchMedia('(max-width: 800px)');
    var mql600 = window.matchMedia('(max-width: 660px)');
    var mql400 = window.matchMedia('(max-width: 500px)');

    function screen800(e) {
        if (e.matches) {
            testeClassmsg1.classList.remove('msg1-bomdia');
            testeClassmsg2.classList.remove('msg2-bomdia');
            testeClassmsg2.classList.add('testeClass2-800');
            testeClassmsg1.classList.add('testeClass1-800');
        }
        else {
            testeClassmsg1.classList.add('msg1-bomdia');
            testeClassmsg2.classList.add('msg2-bomdia');
            testeClassmsg2.classList.remove('testeClass2-800');
            testeClassmsg1.classList.remove('testeClass1-800');
        }
    }
    function screen600(e) {
        if (e.matches) {
            testeClassmsg1.classList.add('testeClass1-600');
            testeClassmsg2.classList.add('testeClass2-600');
        }
        else {
            testeClassmsg1.classList.remove('testeClass1-600');
            testeClassmsg2.classList.remove('testeClass2-600');
        }
    }
    function screen400(e) {
        if (e.matches) {
            testeClassmsg1.classList.add('testeClass1-400');
            testeClassmsg2.classList.add('testeClass2-400');
        }
        else {
            testeClassmsg1.classList.remove('testeClass1-400');
            testeClassmsg2.classList.remove('testeClass2-400');
        }
    }

    if (hora >= 0 && hora < 12) {
        //bom dia
        msg1.innerHTML = `Bom dia!`;
        msg2.innerHTML = `O que vamos estudar hoje? <br>Ainda temos o dia todo!`;
        imagem.src = 'img/paginainicial/bomDia.PNG';
        mql800.addEventListener("change", screen800);
        mql600.addEventListener("change", screen600);
        mql400.addEventListener("change", screen400);

    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        msg1.innerHTML = `Boa tarde! `;
        msg2.innerHTML = `O que vamos estudar?<br> Nós ainda temos uma parte do dia, vamos aproveitar! `;
        msg1.classList.add('msg1-boatarde');
        msg2.classList.add('msg2-boatarde');
        msg1.style.backgroundColor = '#fa9e73cb';
        msg2.style.backgroundColor = '#fc8b40';
        imagem.src = 'img/paginainicial/boaTarde.PNG';

        mql800.addEventListener("change", screen800);
        mql600.addEventListener("change", screen600);
        mql400.addEventListener("change", screen400);


    } else {
        //boa noite
        msg1.innerHTML = `Boa noite!`;
        msg2.innerHTML = `O dia já passou, mas ainda dá tempo de estudar...`;
        imagem.src = 'img/paginainicial/boaNoite.PNG';
        msg1.classList.add('msg1-boanoite');
        msg2.classList.add('msg2-boanoite');
        
        msg1.style.backgroundColor = '#bd73fa70';
        msg2.style.backgroundColor = '#b740fc4b';
        mql800.addEventListener("change", screen800);
        mql600.addEventListener("change", screen600);
        mql400.addEventListener("change", screen400);
    }
}