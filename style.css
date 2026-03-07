/* ===== PARTE 1: VARIABLES, RESET Y NAVEGACIÓN ===== */

/* VARIABLES GLOBALES */
:root {
    --color-vino: #8B3A3A;
    --color-vino-oscuro: #5D2E2E;
    --color-crema: #F5E6D3;
    --color-dorado: #D4AF37;
    --color-marron-fondo: #3E2723;
    --color-marron-claro: #5D4037;
    --color-texto-claro: #EFEBE9;
    --color-texto-oscuro: #2C3E50;
    --sombra: 0 8px 20px rgba(0,0,0,0.3);
    --transicion: all 0.3s ease;
}

/* RESET Y ESTILOS BASE */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--color-texto-claro);
    background-color: var(--color-marron-fondo);
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* TÍTULOS */
.section-title {
    font-size: 2.5rem;
    text-align: center;
    color: var(--color-dorado);
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--color-dorado);
    box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
}

.section-subtitle {
    text-align: center;
    color: var(--color-crema);
    font-size: 1.2rem;
    margin-bottom: 3rem;
    font-style: italic;
}

/* HEADER Y NAVEGACIÓN */
.header {
    background-color: rgba(62, 39, 35, 0.95);
    backdrop-filter: blur(5px);
    box-shadow: var(--sombra);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 2px solid var(--color-dorado);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5%;
    max-width: 1400px;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-dorado);
}

.logo i {
    font-size: 2rem;
    color: var(--color-dorado);
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: var(--color-crema);
    font-weight: 500;
    transition: var(--transicion);
    padding: 0.5rem 1rem;
    border-radius: 5px;
}

.nav-menu a:hover {
    color: var(--color-dorado);
    background-color: rgba(212, 175, 55, 0.1);
}

.hamburger {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--color-crema);
    transition: var(--transicion);
}
/* ===== PARTE 2: HERO, TIPOS DE VINO Y TOP VINOS ===== */

/* HERO SECTION */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.7), rgba(62, 39, 35, 0.8)), 
                url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--color-texto-claro);
    margin-top: 0;
    padding: 0 1rem;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.highlight {
    color: var(--color-dorado);
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease 0.2s both;
}

.btn {
    display: inline-block;
    padding: 1rem 2rem;
    background-color: var(--color-dorado);
    color: var(--color-marron-fondo);
    text-decoration: none;
    border-radius: 5px;
    transition: var(--transicion);
    border: 2px solid transparent;
    animation: fadeInUp 1s ease 0.4s both;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn:hover {
    background-color: transparent;
    border-color: var(--color-dorado);
    color: var(--color-dorado);
}

/* SECCIÓN TIPOS DE VINO */
.tipos {
    padding: 5rem 0;
    background-color: var(--color-marron-claro);
    position: relative;
}

.tipos::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--color-dorado), transparent);
}

.tipos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.tipo-card {
    background: rgba(62, 39, 35, 0.8);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: var(--sombra);
    transition: var(--transicion);
    text-align: center;
    border: 1px solid var(--color-dorado);
    backdrop-filter: blur(5px);
}

.tipo-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.4);
    border-color: var(--color-crema);
}

.tipo-icon {
    width: 80px;
    height: 80px;
    background: var(--color-dorado);
    color: var(--color-marron-fondo);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

.tipo-card h3 {
    color: var(--color-dorado);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.tipo-card p {
    color: var(--color-crema);
    margin-bottom: 1rem;
}

.variedades {
    list-style: none;
    text-align: left;
    padding: 1rem;
    background: rgba(0,0,0,0.2);
    border-radius: 10px;
    font-size: 0.9rem;
    border: 1px solid var(--color-dorado);
}

.variedades li {
    margin-bottom: 0.5rem;
    color: var(--color-crema);
}

.variedades strong {
    color: var(--color-dorado);
}

/* SECCIÓN TOP VINOS */
.top-vinos {
    padding: 5rem 0;
    background: linear-gradient(135deg, var(--color-marron-fondo) 0%, var(--color-vino-oscuro) 100%);
    color: var(--color-texto-claro);
    position: relative;
}

.top-vinos .section-title,
.top-vinos .section-subtitle {
    color: var(--color-crema);
}

.top-vinos .section-title::after {
    background: var(--color-crema);
}

.top-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.vino-card {
    background: rgba(62, 39, 35, 0.9);
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--sombra);
    transition: var(--transicion);
    color: var(--color-crema);
    border: 1px solid var(--color-dorado);
    position: relative;
}

.vino-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
    border-color: var(--color-crema);
}

.vino-imagen {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center;
    position: relative;
    border-bottom: 3px solid var(--color-dorado);
}

.vino-imagen::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: linear-gradient(transparent, rgba(62, 39, 35, 0.9));
}

.vino-info {
    padding: 1.5rem;
    position: relative;
    z-index: 2;
}

.vino-info h3 {
    color: var(--color-dorado);
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
}

.vino-bodega {
    color: var(--color-crema);
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-style: italic;
}

.vino-tipo {
    display: inline-block;
    background: var(--color-dorado);
    color: var(--color-marron-fondo);
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    margin: 0.5rem 0;
    font-weight: bold;
}

.vino-rating {
    color: #ffc107;
    margin: 0.5rem 0;
    text-shadow: 0 0 5px rgba(0,0,0,0.3);
}

.vino-rating span {
    color: var(--color-crema);
    margin-left: 0.5rem;
}

.vino-descripcion {
    color: var(--color-crema);
    font-size: 0.9rem;
    margin: 0.5rem 0;
    line-height: 1.4;
}

.vino-precio {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--color-dorado);
    margin-top: 1rem;
    border-top: 1px solid var(--color-dorado);
    padding-top: 1rem;
}
/* ===== PARTE 3: MARIDAJE, NEWSLETTER, FOOTER Y RESPONSIVE ===== */

/* SECCIÓN MARIDAJE */
.maridaje {
    padding: 5rem 0;
    background-color: var(--color-marron-claro);
    position: relative;
}

.maridaje-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.maridaje-item {
    text-align: center;
    padding: 2rem;
    background: rgba(62, 39, 35, 0.8);
    border-radius: 15px;
    transition: var(--transicion);
    border: 1px solid var(--color-dorado);
    backdrop-filter: blur(5px);
}

.maridaje-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--sombra);
    border-color: var(--color-crema);
}

.maridaje-img {
    width: 80px;
    height: 80px;
    background: var(--color-dorado);
    color: var(--color-marron-fondo);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
}

.maridaje-item h3 {
    color: var(--color-dorado);
    margin-bottom: 1rem;
}

.maridaje-item p {
    color: var(--color-crema);
    margin-bottom: 0.5rem;
}

.maridaje-item p:first-of-type {
    font-weight: bold;
    color: var(--color-crema);
}

/* SECCIÓN NEWSLETTER */
.newsletter {
    padding: 5rem 0;
    background: linear-gradient(rgba(62, 39, 35, 0.95), rgba(93, 46, 46, 0.95)), 
                url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    color: var(--color-crema);
    text-align: center;
    border-top: 3px solid var(--color-dorado);
    border-bottom: 3px solid var(--color-dorado);
}

.newsletter h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--color-dorado);
}

.newsletter p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.form-newsletter {
    max-width: 500px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group input {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    transition: var(--transicion);
    background: rgba(255,255,255,0.9);
}

.form-group input:focus {
    outline: 2px solid var(--color-dorado);
    background: white;
}

.btn-submit {
    width: 100%;
    background-color: var(--color-dorado);
    color: var(--color-marron-fondo);
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    border: none;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.btn-submit:hover {
    background-color: transparent;
    color: var(--color-dorado);
    border: 2px solid var(--color-dorado);
}

.form-mensaje {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
    display: none;
}

.form-mensaje.success {
    display: block;
    background: rgba(212, 175, 55, 0.2);
    color: var(--color-dorado);
    border: 1px solid var(--color-dorado);
}

.form-mensaje.error {
    display: block;
    background: rgba(220, 53, 69, 0.2);
    color: #ff6b6b;
    border: 1px solid #ff6b6b;
}

/* FOOTER */
.footer {
    background-color: #2C3E50;
    color: var(--color-crema);
    padding: 3rem 0 1rem;
    border-top: 3px solid var(--color-dorado);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-info h3 {
    color: var(--color-dorado);
    margin-bottom: 1rem;
}

.footer-info p {
    color: var(--color-crema);
    line-height: 1.6;
}

.footer-links h4,
.footer-social h4 {
    color: var(--color-dorado);
    margin-bottom: 1rem;
}

.footer-links ul {
    list-style: none;
}

.footer-links li {
    margin-bottom: 0.5rem;
}

.footer-links a {
    color: var(--color-crema);
    text-decoration: none;
    transition: var(--transicion);
}

.footer-links a:hover {
    color: var(--color-dorado);
    padding-left: 5px;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(212, 175, 55, 0.2);
    color: var(--color-dorado);
    border-radius: 50%;
    transition: var(--transicion);
    border: 1px solid var(--color-dorado);
}

.social-icons a:hover {
    background: var(--color-dorado);
    color: var(--color-marron-fondo);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--color-dorado);
    color: var(--color-crema);
}

.footer-bottom p:last-child {
    margin-top: 0.5rem;
    font-size: 0.9rem;
}

/* ANIMACIONES */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* MEDIA QUERIES (RESPONSIVE) */
@media (max-width: 768px) {
    .hamburger {
        display: block;
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        gap: 0;
        flex-direction: column;
        background-color: var(--color-marron-fondo);
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: var(--sombra);
        padding: 2rem 0;
        border-bottom: 2px solid var(--color-dorado);
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-menu li {
        margin: 1rem 0;
    }

    .nav-menu a {
        color: var(--color-crema);
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .section-title {
        font-size: 2rem;
    }

    .tipos-grid,
    .top-grid,
    .maridaje-grid {
        grid-template-columns: 1fr;
    }

    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .social-icons {
        justify-content: center;
    }
}
