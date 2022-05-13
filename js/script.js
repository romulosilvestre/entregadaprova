/**************  Text Typing ********************/

function setTypingIntro() {
    const title = '#title1'
    const text1 = '#text1'
    const text2 = '#text2'

    const typeWriter = document.querySelectorAll([title, text1, text2]);
    // const dataTitle = typeWriter[0].getAttribute('data-text-title');
    const dataTitle = `AVISO`;
    // const dataText1 = typeWriter[1].getAttribute('data-text1');
    const dataText1 = `Você participará de um jogo ficcional protagonizado por uma ciberativista que faz uso de suas habilidades hackers para promover a segurança da informação.`;
    // const dataText2 = typeWriter[2].getAttribute('data-text2');
    const dataText2 = `Os perigos encontrados na internet, entretanto, são reais. Para sua segurança, siga as orientações e medidas preventivas que serão apresentadas._`;
    const seta1 = document.querySelector('#setaText1')
    const seta2 = document.querySelector('#setaText2')

    function setaText1() {
        seta1.innerHTML = `<span class="color__cyan glow--blue"><i class="fas fa-arrow-right"></i></span> `
    }

    function setaText2() {
        seta2.innerHTML = `<span class="color__cyan glow--blue"><i class="fas fa-arrow-right"></i></span> `
    }

    const delayText1 = 1500
    const delayText2 = 6500

    let countTitle = 0;
    const dataTitleLength = dataTitle.length;

    const setTitle = () => {
        setTimeout(() => {
            typeWriter[0].textContent = typeWriter[0].textContent + dataTitle.charAt(countTitle);
            countTitle++;
            if (countTitle <= dataTitleLength) {
                setTitle();
            }
        }, 200);
    }

    let countText1 = 0;
    const dataText1Length = dataText1.length;

    const setText1 = () => {
        setTimeout(() => {
            typeWriter[1].textContent = typeWriter[1].textContent + dataText1.charAt(countText1);
            countText1++;
            if (countText1 <= dataText1Length) {
                setText1();
            }
        }, 50)
    }

    let countText2 = 0;
    const dataText2Length = dataText2.length;

    const setText2 = function () {
        setTimeout(function () {
            typeWriter[2].textContent = typeWriter[2].textContent + dataText2.charAt(countText2);
            countText2++;
            if (countText2 <= dataText2Length) {
                setText2();
            }
        }, 50);
    }

    window.onload = () => {
        setTitle()
        setInterval(setaText1, delayText1)
        setInterval(setText1, delayText1)
        setInterval(setaText2, delayText2)
        setInterval(setText2, delayText2)
    }
}

//Mostrar BTN

function showBtnLonger() {
    let tagId = document.querySelector('#showBtnLonger')

    tagId.classList.remove('visually-hidden')
    tagId.classList.add('animate__animated', 'animate__bounceIn')
}
setTimeout(showBtnLonger, 13000)

function showBtn() {
    let tagId = document.querySelector('#showBtn')

    tagId.classList.remove('visually-hidden')
    tagId.classList.add('animate__animated', 'animate__bounceIn')
}
setTimeout(showBtn, 3000)

//Menu Slide
/* let btnMenu = document.querySelector('#overlay-input')
btnMenu.addEventListener('click', menuSlide)

function menuSlide() {
    let menu = document.querySelector('#overlay')

    if (btnMenu == 'checked') {
        menu.classList.add('animate__animated', 'animate__slideInLeft')
    } else if (btnMenu != 'checked') {
        menu.classList.add('animate__animated', 'animate__slideInRight')
    }
} */

function showMe(box) {

    var chboxs = document.getElementsByName("c1");
    var vis = "none";
    for (var i = 0; i < chboxs.length; i++) {
        if (chboxs[i].checked) {
            vis = "block";
            break;
        }
    }
    document.getElementById(box).style.display = vis;


}

// Janela Loading
function continuar() {
    document.querySelector("#continuar").classList.remove('disabled')
    document.querySelector('#textoSeguranca').innerHTML = `
    <p><strong>Inicializando treinamento em Segurança da Informação v.2.021</strong><br><span class="text-info">Instalação completa.</span></p>
    `
}
setTimeout(continuar, 8000)
const infoData = ["Segurança da Informação.", "Boatos.", "Golpes.", "Ataques na Internet.", "Malwares.", "Privacidade.", "Redes Sociais.", "Mecanismos de Segurança."]

/* const infoData = [
    {//object
      name: ["Segurança da Informação.", "Boatos.", "Golpes.", "Ataques na Internet.", "Malwares.", "Privacidade.", "Redes Sociais.", "Mecanismos de Segurança."]
    }
] */

// document.querySelector('#cursos').innerText = `${infoData[0]}`
let course = document.querySelector('#cursos')

setTimeout(courseName0, 0)
setTimeout(courseName1, 1000)
setTimeout(courseName2, 2000)
setTimeout(courseName3, 3000)
setTimeout(courseName4, 4000)
setTimeout(courseName5, 5000)
setTimeout(courseName6, 6000)
setTimeout(courseName7, 7000)

function courseName0() {
    course.innerHTML = `${infoData[0]}`
}

function courseName1() {
    course.innerHTML = `${infoData[1]}`

    /* for (let i = 0; i < infoData.length; i++) {
        name += infoData[i]
        course.innerHTML = name
    } */
}

function courseName2() {
    course.innerHTML = `${infoData[2]}`
}

function courseName3() {
    course.innerHTML = `${infoData[3]}`
}

function courseName4() {
    course.innerHTML = `${infoData[4]}`
}

function courseName5() {
    course.innerHTML = `${infoData[5]}`
}

function courseName6() {
    course.innerHTML = `${infoData[6]}`
}

function courseName7() {
    course.innerHTML = `${infoData[7]}`
}

/* window.onload = function cursos(cursos) {
    return document.querySelector('#cursos').innerHTML = `
    ${cursos.map(curso => `${curso.name[0]}`).join('')}
    `
} */

/*
See https://greensock.com/draggable/ for details.
This demo uses InertiaPlugin which is a membership benefit of Club GreenSock, https://greensock.com/club/
*/

/**************  Baralho ********************/
let clickState = 0;
let baralhoCard = document.querySelector('#baralhoCard')
let baralhoMiniCards = document.querySelector('#baralhoMiniCards')

function baralhoCards() {
    clickState++;

    if (clickState == 1 ) {
        // Do something...
        baralhoCard.classList.remove('visually-hidden')
        baralhoCard.innerHTML = `
        <h6 class="baralho__title">1 - Acesso a conteúdos impróprios ou ofensivos</h6>
        <p>Ao navegar você pode se deparar com conteúdos que contenham pornografia, atentem contra a honra ou incitem o ódio e o racismo.</p>
        `
        baralhoMiniCards.innerHTML = `
        <figure class="m-3"><img src="../../img/carta_numeros_1.png" alt="Baralhos"></figure>
        `

    } else if (clickState == 2 ) {
        // Do something...
        baralhoCard.innerHTML = `
        <h6 class="baralho__title">2 - Contato com pessoas mal-intencionadas</h6>
        <p>Ao navegar você pode se deparar com conteúdos que contenham pornografia, atentem contra a honra ou incitem o ódio e o racismo.</p>
        `
        baralhoMiniCards.innerHTML = `
        <figure class="m-3"><img src="../../img/carta_numeros_2.png" alt="Baralhos"></figure>
        `
    } else if (clickState == 3 ) {
        // Do something...
        baralhoCard.innerHTML = `
        <h6 class="baralho__title">3 - Furto de identidade</h6>
        <p>Alguém pode tentar se passar por você e executar ações em seu nome, levando outras pessoas a acreditarem que estão interagindo com você e colocando em risco a sua imagem ou reputação. </p>
        `
        baralhoMiniCards.innerHTML = `
        <figure class="m-3"><img src="../../img/carta_numeros_3.png" alt="Baralhos"></figure>
        `
    } else if (clickState == 4 ) {
        // Do something...
        baralhoCard.innerHTML = `
        <h6 class="baralho__title">4 - Furto e perda de dados</h6>
        <p>Os dados presentes em seus equipamentos conectados à internet podem ser furtados e apagados pela ação de ladrões, atacantes e códigos maliciosos.</p>
        `
        baralhoMiniCards.innerHTML = `
        <figure class="m-3"><img src="../../img/carta_numeros_4.png" alt="Baralhos"></figure>
        `
    } else if (clickState == 5 ) {
        // Do something...
        baralhoCard.innerHTML = `
        <h6 class="baralho__title">5 - Invasão de privacidade</h6>
        <p>A divulgação de informações pessoais pode comprometer a sua privacidade, de seus amigos e familiares e, mesmo que você restrinja o acesso, não há como controlar que elas não serão repassadas.  </p>
        `
        baralhoMiniCards.innerHTML = `
        <figure class="m-3"><img src="../../img/carta_numeros_5.png" alt="Baralhos"></figure>
        `
    } else if (clickState == 6 ) {
        // Do something...
        baralhoCard.innerHTML = `
        <h6 class="baralho__title">6 - Desinformação</h6>
        <p>As informações na internet se propagam rapidamente e podem atingir um grande número de pessoas em pouco tempo. Se isso pode ser positivo em certos casos, também pode ser usado para a divulgação de informações falsas, que podem gerar pânico e prejudicar pessoas e empresas.</p>
        `
        baralhoMiniCards.innerHTML = `
        <figure class="m-3"><img src="../../img/carta_numeros_6.png" alt="Baralhos"></figure>
        `
    } else if (clickState == 7 ) {
        // Do something...
        baralhoCard.innerHTML = `
        <h6 class="baralho__title">7 - Dificuldade de exclusão</h6>
        <p>Aquilo que é divulgado na internet nem sempre pode ser totalmente excluído ou ter o acesso controlado. Uma opinião dada em um momento de impulso pode ficar acessível por tempo indeterminado e pode, de alguma forma, ser usada contra você e acessada por diferentes pessoas, desde seus familiares até seus chefes.  </p>
        `
        baralhoMiniCards.innerHTML = `
        <figure class="m-3"><img src="../../img/carta_numeros_7.png" alt="Baralhos"></figure>
        `
    } else if (clickState == 8 ) {
        // Do something...
        // then reset clickState for the next go round
        baralhoCard.innerHTML = `
        <h6 class="baralho__title">8 - Dificuldade de manter sigilo</h6>
        <p>No seu dia a dia, é possível ter uma conversa confidencial com alguém e tomar cuidados para que ninguém mais tenha acesso ao que está sendo dito. Na internet, caso não sejam tomados os devidos cuidados, as informações podem trafegar ou ficar armazenadas de forma que outras pessoas tenham acesso ao conteúdo. </p>
        `
        baralhoMiniCards.innerHTML = `
        <figure class="m-3"><img src="../../img/carta_numeros_8.png" alt="Baralhos"></figure>
        `
        clickState=0;
    }

}

