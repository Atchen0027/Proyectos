const getProducto = (data) => {
  return ` 
    <div class="tarjeta">
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
  data.slice(1, 3).forEach((producto) => {
    const tarjeta = getProducto(producto);
    introducirProducto(tarjeta, recogerContainer);
  });
};

fetch("./productos.json")
  .then((response) => response.json())
  .then((data) => {
    introducirProductos(data.productos);
  });
