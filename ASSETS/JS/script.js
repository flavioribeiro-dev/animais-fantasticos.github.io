const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuUl = document.querySelector('.menu ul');

menuHamburguer.addEventListener('click', () => {
    if(menuHamburguer.getAttribute('aria-hidden') == 'true') {
        console.log('menu mobile ABERTO');
        menuHamburguer.removeAttribute('aria-hidden');
        menuHamburguer.setAttribute('aria-expanded', 'true');
        menuHamburguer.children[1].style.opacity = 0;

        menuHamburguer.children[0].classList.add('rotate_line1');
        menuHamburguer.children[2].classList.add('rotate_line3');
    } else {
        console.log('menu mobile FECHADO');
        menuHamburguer.removeAttribute('aria-expanded');
        menuHamburguer.setAttribute('aria-hidden', 'true');
        menuHamburguer.children[1].style.opacity = 1;     

        menuHamburguer.children[0].classList.remove('rotate_line1');
        menuHamburguer.children[2].classList.remove('rotate_line3');
    }
})

// ================================================

const tabMenu = document.querySelectorAll('.js-tabmenu li');   
const tabContent = document.querySelectorAll('.js-tabcontent section');

function activeTab(index) {
    tabContent.forEach((item) => {
        item.classList.remove('ativo');
    })
    
    tabContent[index].classList.add('ativo');
}

tabMenu.forEach((item, index) => {
    item.addEventListener('click', function() {
        activeTab(index);
    })
})















// ==============================================

const faqLista = document.querySelectorAll('.faq-lista dt');

faqLista.forEach((faq) => {
    faq.addEventListener('click', clicou);
})

function clicou(item) {
    const faqListaDesc = item.currentTarget.nextElementSibling;
    console.log( faqListaDesc );
}











