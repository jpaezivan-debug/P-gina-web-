// ===== MENÚ HAMBURGUESA PARA MÓVIL =====
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

// ===== DATOS DE LOS VINOS (TOP 5) =====
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
        imagen: "🍷"
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
        imagen: "🏰"
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
        imagen: "🇮🇹"
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
        imagen: "🥂"
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
        imagen: "🇺🇸"
    }
];

// ===== CARGAR VINOS DINÁMICAMENTE =====
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
    console.log("Vinos cargados correctamente");
}

// ===== FORMULARIO DE NEWSLETTER =====
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
        
        // Validación básica
        if (nombre === '' || email === '') {
            mostrarMensaje('Por favor, completa todos los campos', 'error', mensajeDiv);
            return;
        }
        
        if (!validarEmail(email)) {
            mostrarMensaje('Por favor, ingresa un email válido', 'error', mensajeDiv);
            return;
        }
        
        // Simular envío exitoso
        mostrarMensaje(`¡Gracias ${nombre}! Te has suscrito correctamente a nuestra newsletter.`, 'success', mensajeDiv);
        form.reset();
    });
}

function mostrarMensaje(texto, tipo, mensajeDiv) {
    if (!mensajeDiv) return;
    
    mensajeDiv.textContent = texto;
    mensajeDiv.className = 'form-mensaje ' + tipo;
    
    // Ocultar después de 5 segundos
    setTimeout(() => {
        mensajeDiv.textContent = '';
        mensajeDiv.className = 'form-mensaje';
    }, 5000);
}

function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===== SCROLL SUAVE PARA ENLACES INTERNOS =====
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

// ===== INICIALIZAR TODO CUANDO EL DOM ESTÉ LISTO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado, inicializando scripts...");
    
    // Cargar vinos
    cargarVinos();
    
    // Inicializar formulario
    inicializarFormulario();
    
    // Inicializar scroll suave
    inicializarScrollSuave();
    
    console.log("Todos los scripts inicializados correctamente");
});
