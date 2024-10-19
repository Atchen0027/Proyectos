const getProducto = (data) => {
  return ` 
    <div class="tarjeta" onclick="abrirImagen('${data.foto}')">
      <div class="articulo">
        <img src="${data.foto}" alt="" srcset="" />
        <p class="nombre">${data.nombre}</p>
        <p class="precio">${data.precio}</p>
      </div>
      <div class="descrip">
        ${data.descripcion}
      </div>
    </div>
    `;
};

const recogerContainer = document.querySelector(".container");

const introducirProducto = (tarjeta, container) => {
  container.innerHTML += tarjeta;
};

const introducirProductos = (data) => {
  data.forEach((producto) => {
    const tarjeta = getProducto(producto);
    introducirProducto(tarjeta, recogerContainer);
  });
};

fetch("./productos.json")
  .then((response) => response.json())
  .then((data) => {
    introducirProductos(data.productos);
  });

// Funciones para manejar la superposición
function abrirImagen(src) {
    const overlay = document.getElementById('overlay');
    const imagenModal = document.getElementById('imagen-modal');
    imagenModal.src = src; 
    overlay.style.display = 'flex'; 
}

function cerrarImagen() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; 
}
