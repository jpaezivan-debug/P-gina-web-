// ===== PARTE 1: MENÚ HAMBURGUESA Y DATOS DE VINOS =====

// MENÚ HAMBURGUESA PARA MÓVIL
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        if (hamburger) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});

// DATOS DE LOS VINOS (TOP 5) CON IMÁGENES
const vinosData = [
    {
        nombre: "Vega Sicilia Único",
        bodega: "Bodegas Vega Sicilia",
        tipo: "Tinto",
        año: 2010,
        region: "Ribera del Duero, España",
        rating: 4.9,
        descripcion: "Considerado el mejor vino de España. Elegante, complejo y con un potencial de guarda excepcional.",
        precio: "€€€€",
        imagen: "https://images.unsplash.com/photo-1586370434639-0fe43b2d3240?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        alt: "Botella de vino tinto"
    },
    {
        nombre: "Château Margaux",
        bodega: "Château Margaux",
        tipo: "Tinto",
        año: 2015,
        region: "Burdeos, Francia",
        rating: 4.9,
        descripcion: "Primer Grand Cru Classé. Un vino de elegancia suprema, con taninos sedosos y aroma a violetas.",
        precio: "€€€€",
        imagen: "https://images.unsplash.com/photo-1516596543-91e4daaa0bcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        alt: "Botella de vino de Burdeos"
    },
    {
        nombre: "Sassicaia",
        bodega: "Tenuta San Guido",
        tipo: "Tinto",
        año: 2016,
        region: "Toscana, Italia",
        rating: 4.8,
        descripcion: "El padre de los Super Toscano. Equilibrio perfecto entre estructura italiana y elegancia bordelesa.",
        precio: "€€€",
        imagen: "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        alt: "Vino italiano"
    },
    {
        nombre: "Dom Pérignon",
        bodega: "Moët & Chandon",
        tipo: "Espumoso",
        año: 2010,
        region: "Champagne, Francia",
        rating: 4.8,
        descripcion: "La referencia en champán de lujo. Burbujas finas, notas cítricas y de bollería.",
        precio: "€€€",
        imagen: "https://images.unsplash.com/photo-1557400202-2c9b0a2d7f8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        alt: "Botella de champagne"
    },
    {
        nombre: "Opus One",
        bodega: "Opus One Winery",
        tipo: "Tinto",
        año: 2017,
        region: "Napa Valley, USA",
        rating: 4.7,
        descripcion: "La alianza entre Robert Mondavi y Baron Philippe de Rothschild. Potente y sedoso.",
        precio: "€€€",
        imagen: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        alt: "Vino de Napa Valley"
    }
];
// ===== PARTE 2: FUNCIÓN PARA CARGAR VINOS =====

function cargarVinos() {
    const container = document.getElementById('top-vinos-container');
    
    if (!container) {
        console.log("Contenedor de vinos no encontrado");
        return;
    }
    
    let html = '';
    
    vinosData.forEach((vino, index) => {
        // Generar estrellas según rating
        const ratingFull = Math.floor(vino.rating);
        const ratingHalf = vino.rating % 1 >= 0.5 ? 1 : 0;
        const ratingEmpty = 5 - ratingFull - ratingHalf;
        
        let estrellas = '';
        for (let i = 0; i < ratingFull; i++) estrellas += '<i class="fas fa-star"></i>';
        if (ratingHalf) estrellas += '<i class="fas fa-star-half-alt"></i>';
        for (let i = 0; i < ratingEmpty; i++) estrellas += '<i class="far fa-star"></i>';
        
        html += `
            <div class="vino-card" style="animation: fadeInUp 0.5s ease ${index * 0.1}s both;">
                <div class="vino-imagen" style="background-image: url('${vino.imagen}');">
                    <!-- La imagen se carga como fondo -->
                </div>
                <div class="vino-info">
                    <h3>${index + 1}. ${vino.nombre}</h3>
                    <p class="vino-bodega">${vino.bodega}</p>
                    <p class="vino-tipo">${vino.tipo} · ${vino.año}</p>
                    <p><small>${vino.region}</small></p>
                    <div class="vino-rating">
                        ${estrellas}
                        <span>(${vino.rating})</span>
                    </div>
                    <p class="vino-descripcion">${vino.descripcion}</p>
                    <p class="vino-precio">${vino.precio}</p>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    console.log("Vinos cargados correctamente con imágenes");
             }
// ===== PARTE 3: FORMULARIO, SCROLL SUAVE E INICIALIZACIÓN =====

// FUNCIÓN PARA EL FORMULARIO
function inicializarFormulario() {
    const form = document.getElementById('newsletter-form');
    const mensajeDiv = document.getElementById('form-mensaje');
    
    if (!form) {
        console.log("Formulario no encontrado");
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        
        if (nombre === '' || email === '') {
            mostrarMensaje('Por favor, completa todos los campos', 'error', mensajeDiv);
            return;
        }
        
        if (!validarEmail(email)) {
            mostrarMensaje('Por favor, ingresa un email válido', 'error', mensajeDiv);
            return;
        }
        
        mostrarMensaje(`¡Gracias ${nombre}! Te has suscrito correctamente a nuestra newsletter.`, 'success', mensajeDiv);
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

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// SCROLL SUAVE PARA ENLACES INTERNOS
function inicializarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// INICIALIZAR TODO CUANDO EL DOM ESTÉ LISTO
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado, inicializando scripts...");
    cargarVinos();
    inicializarFormulario();
    inicializarScrollSuave();
    console.log("Todos los scripts inicializados correctamente");
});
