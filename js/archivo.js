// productos
const productos = [
  //pasteles
  { id: 1, name: "torta de Red Velvet", price: 2500 },
  { id: 2, name: "torta de Chocolate", price: 3000 },
  { id: 3, name: "torta de Vainilla", price: 2500 },
  //galletas
  { id: 4, name: "galleta de Queso", price: 400 },
  { id: 5, name: "galleta de Red velvet", price: 400 },
  { id: 6, name: "galleta de Chocolate", price: 550 },
  { id: 7, name: "galleta de Vainilla", price: 250 },
];

// carrito
const carrito = [];
// costo total
let costoTotal = 0;

// funcion para visualizar productos en el carrito
const visualizar = () => {
  const containerGeneral = document.getElementById("carro");
  const contDeProdViejo = document.getElementById("contDeProd");
  let contDeProd = document.createElement("div");
  contDeProd.setAttribute("id", "contDeProd");
  containerGeneral.replaceChild(contDeProd, contDeProdViejo);

  carrito.forEach((prodCarrrito) => {
    let vistaCarrito = document.createElement("div");
    vistaCarrito.innerHTML = `
            <h4>Producto: "${prodCarrrito.name}"</h4>
            <p>El costo del producto es de: $${prodCarrrito.price}</p>
            <p>Cantidad: ${prodCarrrito.cantidad}</p>
            `;
    contDeProd.append(vistaCarrito);
  });

  // Ver el costo total
  let costoTotalView = document.createElement("h2");
  costoTotalView.innerHTML = `El costo total de tus productos es de: $${costoTotal}`;
  contDeProd.append(costoTotalView);
};

// Muestra los productos en el HTML
productos.forEach((producto) => {
  const contenedor = document.getElementById("Container");
  let productView = document.createElement("div");
  productView.innerHTML = `  
    <h3>${producto.name}</h3>
    <p>$${producto.price}</p>
    <button id="btn${producto.id}">Agregar ${producto.name} al carrito</button>
    `;
  contenedor.append(productView);

  const botonAgregar = document.getElementById(`btn${producto.id}`);

  // Verifica si ya en el carrito existe el producto agregado
  botonAgregar.onclick = () => {
    const existe = carrito.find((elemento) => elemento.id === producto.id);

    if (existe) {
      carrito.forEach((elemento) => {
        if (elemento.id === producto.id) {
          elemento.cantidad++;
        }
      });
    } else {
      carrito.push({
        name: producto.name,
        price: producto.price,
        id: producto.id,
        cantidad: 1,
      });
    }
    costoTotal = costoTotal + producto.price;
    console.log(carrito, costoTotal);

    // Llama a la funcion "visualizar"
    visualizar();
  };
});
