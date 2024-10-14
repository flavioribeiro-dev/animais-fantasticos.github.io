export default function animacaoScroll() {
    const section = document.querySelectorAll('.js-scroll');

    function animaScroll() {
        
        section.forEach((item) => {
            const sectionTop = item.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            
            if(sectionTop < screenHeight*0.578 ) {
                item.classList.add('ativo');
            }
        })
    }

    window.addEventListener('scroll', animaScroll);
}
