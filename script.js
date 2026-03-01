// ===== MENÚ HAMBURGUESA =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        if (hamburger) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});

// ===== DATOS DE LOS VINOS =====
const vinosData = [
    {
        nombre: "Vega Sicilia Único",
        bodega: "Bodegas Vega Sicilia",
        tipo: "Tinto",
        año: 2010,
        region: "Ribera del Duero, España",
        rating: 4.9,
        descripcion: "Considerado el mejor vino de España. Elegante, complejo y excepcional.",
        precio: "€€€€",
        imagen: "https://images.unsplash.com/photo-1586370434639-0fe43b2d3240?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Château Margaux",
        bodega: "Château Margaux",
        tipo: "Tinto",
        año: 2015,
        region: "Burdeos, Francia",
        rating: 4.9,
        descripcion: "Primer Grand Cru Classé. Elegancia suprema y taninos sedosos.",
        precio: "€€€€",
        imagen: "https://images.unsplash.com/photo-1516596543-91e4daaa0bcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Sassicaia",
        bodega: "Tenuta San Guido",
        tipo: "Tinto",
        año: 2016,
        region: "Toscana, Italia",
        rating: 4.8,
        descripcion: "El padre de los Super Toscano. Equilibrio perfecto.",
        precio: "€€€",
        imagen: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Dom Pérignon",
        bodega: "Moët & Chandon",
        tipo: "Espumoso",
        año: 2010,
        region: "Champagne, Francia",
        rating: 4.8,
        descripcion: "La referencia en champán de lujo. Burbujas finas.",
        precio: "€€€",
        imagen: "https://images.unsplash.com/photo-1557400202-2c9b0a2d7f8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        nombre: "Opus One",
        bodega: "Opus One Winery",
        tipo: "Tinto",
        año: 2017,
        region: "Napa Valley, USA",
        rating: 4.7,
        descripcion: "La alianza Mondavi-Rothschild. Potente y sedoso.",
        precio: "€€€",
        imagen: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
];

// ===== CARGAR VINOS =====
function cargarVinos() {
    const container = document.getElementById('top-vinos-container');
    if (!container) return;
    
    let html = '';
    
    vinosData.forEach((vino, index) => {
        const ratingFull = Math.floor(vino.rating);
        const ratingHalf = vino.rating % 1 >= 0.5 ? 1 : 0;
        const ratingEmpty = 5 - ratingFull - ratingHalf;
        
        let estrellas = '';
        for (let i = 0; i < ratingFull; i++) estrellas += '<i class="fas fa-star"></i>';
        if (ratingHalf) estrellas += '<i class="fas fa-star-half-alt"></i>';
        for (let i = 0; i < ratingEmpty; i++) estrellas += '<i class="far fa-star"></i>';
        
        html += `
            <div class="vino-card">
                <div class="vino-imagen" style="background-image: url('${vino.imagen}');"></div>
                <div class="vino-info">
                    <h3>${index + 1}. ${vino.nombre}</h3>
                    <p class="vino-bodega">${vino.bodega}</p>
                    <p class="vino-tipo">${vino.tipo} · ${vino.año}</p>
                    <p><small>${vino.region}</small></p>
                    <div class="vino-rating">${estrellas} <span>(${vino.rating})</span></div>
                    <p class="vino-descripcion">${vino.descripcion}</p>
                    <p class="vino-precio">${vino.precio}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ===== FORMULARIO =====
function inicializarFormulario() {
    const form = document.getElementById('newsletter-form');
    const mensajeDiv = document.getElementById('form-mensaje');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        
        if (nombre === '' || email === '') {
            mostrarMensaje('Completa todos los campos', 'error', mensajeDiv);
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            mostrarMensaje('Email válido requerido', 'error', mensajeDiv);
            return;
        }
        
        mostrarMensaje(`¡Gracias ${nombre}! Te has suscrito.`, 'success', mensajeDiv);
        form.reset();
    });
}

function mostrarMensaje(texto, tipo, mensajeDiv) {
    if (!mensajeDiv) return;
    mensajeDiv.textContent = texto;
    mensajeDiv.className = 'form-mensaje ' + tipo;
    setTimeout(() => {
        mensajeDiv.textContent = '';
        mensajeDiv.className = 'form-mensaje';
    }, 5000);
}

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== INICIAR =====
document.addEventListener('DOMContentLoaded', function() {
    cargarVinos();
    inicializarFormulario();
});
