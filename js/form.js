     
     
     // Example starter JavaScript for disabling form submissions if there are invalid fields
     (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop Para Validação dos campos
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })()
          
      
      // =====Calculo do Peso=============
      
          function calcularPreco() {
              const peso = document.getElementById('peso').value;
              const precoPorQuilo = 1000; // 1000 kwanzas por quilograma
              const precoTotal = peso * precoPorQuilo;
      
              document.getElementById('resultado').textContent = `Preço estimado: ${precoTotal} kwanzas`;
          }