// script responsavel pela automaçãõ do menu hamburger

const btnMobile = document.getElementById('btn-mobile')
// const >> declara nossa variavel no uso do decorrer do codigo

function toggleMenu(event) {
   if (event.type === 'toutchstart') event.preventDefault();
   const nav = document.getElementById('nav');
   nav.classList.toggle ('active');
   const active = nav.classList.contains('active');
event.currentTarget.setAttribute('aria-expanded', active);
 if (active ) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
 } else {
    event.currentTarget.setAttribute( 'aria-label', 'Abrir Menu' );
 }
 
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('toutchstart', toggleMenu)