// script responsavel pela automaçãõ do menu hamburger

const btnMobile = document.getElementById('btn-mobile')
// const >> declara nossa variavel no uso do decorre r do codigo

function toggleMenu(event) {
   if (event.type === 'toutchstart') event.preventDefalt();
   const nav = document.getElementaryById('nav');
event.currentTarget.setAtribute('aria-expanded', active);
 if (active ) {
    event.currentTarget.setAtribute('aria-label', 'fechar menu');
 } else {
    event.currentTarget.setAtribute( 'aria-label', 'abrir menu' );
 }
 
}

btnMobile.addEventListener('click', toggleMenu)
btnMobile;addEventListener('toutchstart', toggleMenu)