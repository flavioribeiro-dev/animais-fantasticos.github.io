export default function animaFaq() {
    const faqLista = document.querySelectorAll('.faq-lista dt');

    faqLista.forEach((faq, index) => {
        faq.addEventListener('click', exibirFaq);
    })
    
    function exibirFaq(event) {
        const faqListaDesc = event.currentTarget.nextElementSibling;
    
        if(faqListaDesc.classList.contains('ativo')) {
            faqListaDesc.classList.remove('ativo');
        } else {
            faqListaDesc.classList.add('ativo');
        }
    }
}
