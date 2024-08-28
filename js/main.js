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
    (
  
      function() {
      "use strict";
    
      /**
       * Easy selector helper function
       */
      const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
    
      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }
    
      /**
       * Easy on scroll event listener 
       */
      const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
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
    
      
    
    
      
    
    
    })()