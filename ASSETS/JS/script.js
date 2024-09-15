const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuUl = document.querySelector('.menu ul');

menuHamburguer.addEventListener('click', () => {
    if(menuHamburguer.getAttribute('aria-hidden') == 'true') {
        menuHamburguer.removeAttribute('aria-hidden');
        menuHamburguer.setAttribute('aria-expanded', 'true');
        menuHamburguer.children[1].style.opacity = 0;

    } else {
        console.log('menu mobile ABERTO');

        menuHamburguer.removeAttribute('aria-expanded');
        menuHamburguer.setAttribute('aria-hidden', 'true');
        menuHamburguer.children[1].style.opacity = 1;
    }
})


