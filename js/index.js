document.addEventListener("DOMContentLoaded", function() {
    const loader = document.querySelector('.loadingspinner');
    const content = document.getElementById('content');
  
    // Simula un tiempo de carga (por ejemplo, 3 segundos)
    setTimeout(function() {
      loader.classList.add('hide-loading'); // Añade la clase para ocultar el cargador
  
      // Espera a que termine la animación para mostrar el contenido
      loader.addEventListener('animationend', function() {
        loader.style.display = 'none';
        content.style.display = 'block';
      });
    }, 3000); // Cambia 3000ms por el tiempo de carga real
  });

  