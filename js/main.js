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



     /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
