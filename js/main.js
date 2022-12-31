// PRODUCTOS
const productos = [
    // Bazar
    {
        id: "Bazar-01",
        titulo: "Mandolin",
        imagen: "imagenes/ImgBazar/mandolin.png",
        categoria: {
            nombre: "Bazar",
            id: "Bazar"
        },
    },
    {
        id: "abrigo-02",
        titulo: "Termos",
        imagen: "imagenes/ImgBazar/termos.png",
        categoria: {
            nombre: "Bazar",
            id: "Bazar"
        },
    },
    {
        id: "Bazar-03",
        titulo: "Cacerolas",
        imagen: "imagenes/ImgBazar/Cacerolas.png",
        categoria: {
            nombre: "Bazar",
            id: "Bazar"
        },
        
    },
    {
        id: "Bazar-04",
        titulo: "Set de woks",
        imagen: "imagenes/ImgBazar/wok.png",
        categoria: {
            nombre: "Bazar",
            id: "Bazar"
        },
        precio: 1000
    },
    {
        id: "Bazar-05",
        titulo: "Sanguichera",
        imagen: "imagenes/ImgBazar/Sanguichera.png",
        categoria: {
            nombre: "Bazar",
            id: "Bazar"
        },
        precio: 1000
    },
    // Reposteria
    {
        id: "Reposteria-01",
        titulo: "Fondas para tortas",
        imagen: "imagenes/ImagReposteria/fonda.png",
        categoria: {
            nombre: "Reposteria",
            id: "Reposteria"
        },
        precio: 1000
    },
    {
        id: "Reposteria-02",
        titulo: "Colorantes para tortas",
        imagen: "imagenes/ImagReposteria/Colorantes.png",
        categoria: {
            nombre: "Reposteria",
            id: "Reposteria"
        },
        precio: 1000
    },
    {
        id: "Reposteria-03",
        titulo: "Decoracion para Tortas",
        imagen: "imagenes/ImagReposteria/Decoracion-01.png",
        categoria: {
            nombre: "Reposteria",
            id: "Reposteria"
        },
        precio: 1000
    },
    {
        id: "Reposteria-04",
        titulo: "Fruta Escurrida para pan dulce",
        imagen: "imagenes/ImagReposteria/FrutaEscurrida.png",
        categoria: {
            nombre: "Reposteria",
            id: "Reposteria"
        },
        precio: 1000
    },
    {
        id: "Reposteria-05",
        titulo: "Modelos Silicona",
        imagen: "imagenes/ImagReposteria/MoldeSil-02.png",
        categoria: {
            nombre: "Reposteria",
            id: "Reposteria"
        },
        precio: 1000
    },
    {
        id: "Reposteria-06",
        titulo: "Picos tipo 1",
        imagen: "imagenes/ImagReposteria/picos-01.png",
        categoria: {
            nombre: "Reposteria",
            id: "Reposteria"
        },
        precio: 1000
    },
    {
        id: "Reposteria-07",
        titulo: "Picos tipo 2",
        imagen: "imagenes/ImagReposteria/picos-03.png",
        categoria: {
            nombre: "Reposteria",
            id: "Reposteria"
        },
        precio: 1000
    },
    {
        id: "Reposteria-08",
        titulo: "Reposteria 08",
        imagen: "imagenes/ImagReposteria/espatula.png",
        categoria: {
            nombre: "Reposteria",
            id: "Reposteria"
        },
        precio: 1000
    },
    // Otros
    {
        id: "Otros-01",
        titulo: "Decoraciones Variadas",
        imagen: "imagenes/ImgOtros/Decoracion.png",
        categoria: {
            nombre: "Otros",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "Otros-02",
        titulo: "Decoración de Angeles",
        imagen: "imagenes/ImgOtros/Angeles.png",
        categoria: {
            nombre: "Otros",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "Otros-03",
        titulo: "Bombillas",
        imagen: "imagenes/ImgOtros/Bombillas.png",
        categoria: {
            nombre: "Otros",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "Otros-04",
        titulo: "Mates de distintos materiales",
        imagen: "imagenes/ImgOtros/mates.png",
        categoria: {
            nombre: "Otros",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "Otros-05",
        titulo: "Ejemplo de Velas",
        imagen: "imagenes/ImgOtros/Velas-02.png",
        categoria: {
            nombre: "Otros",
            id: "Otros"
        },
        precio: 1000
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}