document.addEventListener('DOMContentLoaded', function () {
    // Obtener los elementos necesarios
    const addPostBtn = document.getElementById('addPostBtn');
    const agregarPublicacionBtn = document.getElementById('agregar-publicacion-btn');
    const addPostModal = new bootstrap.Modal(document.getElementById('addPostModal'));
    const tusPublicaciones = document.getElementById('tus-publicaciones');
    
    // Manejar el clic en el botón de añadir publicación
    addPostBtn.addEventListener('click', function () {
      addPostModal.show();
    });
  
    // Manejar el clic en el botón de agregar publicación dentro del modal
    agregarPublicacionBtn.addEventListener('click', function () {
      // Obtener los datos del formulario
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const imagen = document.getElementById('imagen').files[0];
  
      // Validar los campos
      if (title.trim() === "" || description.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      // Crear un elemento de card para la nueva publicación
      const card = document.createElement('div');
      card.classList.add('card', 'col-md-4', 'mb-4');
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = title;
  
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = description;
  
      // Manejar la imagen si existe
      if (imagen) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement('img');
          img.classList.add('card-img-top');
          img.src = e.target.result;
          card.appendChild(img);
        };
        reader.readAsDataURL(imagen);
      }
  
      // Agregar los elementos al card
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      card.appendChild(cardBody);
  
      // Agregar la nueva publicación al contenedor
      tusPublicaciones.appendChild(card);
  
      // Limpiar el formulario y cerrar el modal
      document.getElementById('nueva-publicacion-form').reset();
      addPostModal.hide();
    });
  });
  