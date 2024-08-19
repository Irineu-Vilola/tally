/**
   Preload toda configuração do preload.
   */
   const preloader = document.querySelector('#preloader');
   if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
   }
   
   
   
const menuDiv = document.getElementById('menu-mobile');
const btnAnimar = document.getElementById('btn-menu');

    menuDiv.addEventListener('click', animarMenu)

function animarMenu(){

    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
    }
