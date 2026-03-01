/* ===== VARIABLES GLOBALES ===== */
:root {
    --color-vino: #722f37;
    --color-vino-oscuro: #4a1e24;
    --color-crema: #f8f0e3;
    --color-dorado: #c6a15b;
    --color-gris: #333333;
    --color-gris-claro: #666666;
    --color-fondo: #ffffff;
    --sombra: 0 5px 15px rgba(0,0,0,0.1);
    --transicion: all 0.3s ease;
}

/* ===== RESET Y ESTILOS BASE ===== */
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
    color: var(--color-gris);
    background-color: var(--color-fondo);
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* ===== TÍTULOS ===== */
.section-title {
    font-size: 2.5rem;
    text-align: center;
    color: var(--color-vino);
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 1rem;
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
}

.section-subtitle {
    text-align: center;
    color: var(--color-gris-claro);
    font-size: 1.2rem;
    margin-bottom: 3rem;
}

/* ===== HEADER Y NAVEGACIÓN ===== */
.header {
    background-color: var(--color-fondo);
    box-shadow: var(--sombra);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
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
    color: var(--color-vino);
}

.logo i {
    font-size: 2rem;
}

.nav-menu {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: var(--color-gris);
    font-weight: 500;
    transition: var(--transicion);
}

.nav-menu a:hover {
    color: var(--color-vino);
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
    background-color: var(--color-gris);
    transition: var(--transicion);
}

/* ===== HERO SECTION ===== */
.hero {
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), 
                url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
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
    background-color: var(--color-vino);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: var(--transicion);
    border: 2px solid transparent;
    animation: fadeInUp 1s ease 0.4s both;
}

.btn:hover {
    background-color: transparent;
    border-color: var(--color-vino);
    color: white;
}

/* ===== SECCIÓN TIPOS DE VINO ===== */
.tipos {
    padding: 5rem 0;
    background-color: var(--color-crema);
}

.tipos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.tipo-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: var(--sombra);
    transition: var(--transicion);
    text-align: center;
}

.tipo-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(114, 47, 55, 0.2);
}

.tipo-icon {
    width: 80px;
    height: 80px;
    background: var(--color-vino);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
}

.tipo-card h3 {
    color: var(--color-vino);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.tipo-card p {
    color: var(--color-gris-claro);
    margin-bottom: 1rem;
}

.variedades {
    list-style: none;
    text-align: left;
    padding: 1rem;
    background: var(--color-crema);
    border-radius: 5px;
    font-size: 0.9rem;
}

.variedades li {
    margin-bottom: 0.5rem;
    color: var(--color-gris);
}

/* ===== SECCIÓN TOP VINOS ===== */
.top-vinos {
    padding: 5rem 0;
    background: linear-gradient(135deg, var(--color-vino) 0%, var(--color-vino-oscuro) 100%);
    color: white;
}

.top-vinos .section-title,
.top-vinos .section-subtitle {
    color: white;
}

.top-vinos .section-title::after {
    background: white;
}

.top-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.vino-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--sombra);
    transition: var(--transicion);
    color: var(--color-gris);
}

.vino-card:hover {
    transform: translateY(-5px);
}

.vino-info {
    padding: 1.5rem;
}

.vino-info h3 {
    color: var(--color-vino);
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
}

.vino-bodega {
    color: var(--color-dorado);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.vino-tipo {
    display: inline-block;
    background: var(--color-crema);
    padding: 0.3rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    margin: 0.5rem 0;
}

.vino-rating {
    color: #ffc107;
    margin: 0.5rem 0;
}

.vino-rating span {
    color: var(--color-gris-claro);
    margin-left: 0.5rem;
}

.vino-descripcion {
    color: var(--color-gris-claro);
    font-size: 0.9rem;
    margin: 0.5rem 0;
}

.vino-precio {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--color-vino);
    margin-top: 1rem;
}

/* ===== SECCIÓN MARIDAJE ===== */
.maridaje {
    padding: 5rem 0;
    background: white;
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
    background: var(--color-crema);
    border-radius: 10px;
    transition: var(--transicion);
}

.maridaje-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--sombra);
}

.maridaje-img {
    width: 80px;
    height: 80px;
    background: var(--color-vino);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
}

.maridaje-item h3 {
    color: var(--color-vino);
    margin-bottom: 1rem;
}

.maridaje-item p {
    color: var(--color-gris-claro);
    margin-bottom: 0.5rem;
}

.maridaje-item p:first-of-type {
    font-weight: bold;
    color: var(--color-dorado);
}

/* ===== SECCIÓN NEWSLETTER ===== */
.newsletter {
    padding: 5rem 0;
    background: linear-gradient(rgba(114, 47, 55, 0.9), rgba(74, 30, 36, 0.9)), 
                url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
}

.newsletter h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
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
}

.form-group input:focus {
    outline: 2px solid var(--color-dorado);
}

.btn-submit {
    width: 100%;
    background-color: var(--color-dorado);
    color: var(--color-gris);
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    border: none;
}

.btn-submit:hover {
    background-color: transparent;
    color: white;
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
    background: rgba(255,255,255,0.2);
    color: white;
}

.form-mensaje.error {
    display: block;
    background: rgba(220, 53, 69, 0.2);
    color: #ff6b6b;
}

/* ===== FOOTER ===== */
.footer {
    background-color: #1a1a1a;
    color: white;
    padding: 3rem 0 1rem;
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
    color: #999;
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
    color: #999;
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
    background: #333;
    color: white;
    border-radius: 50%;
    transition: var(--transicion);
}

.social-icons a:hover {
    background: var(--color-dorado);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid #333;
    color: #999;
}

.footer-bottom p:last-child {
    margin-top: 0.5rem;
    font-size: 0.9rem;
}

/* ===== ANIMACIONES ===== */
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

/* ===== MEDIA QUERIES (RESPONSIVE) ===== */
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
        background-color: white;
        width: 100%;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        padding: 2rem 0;
    }

    .nav-menu.active {
        left: 0;
    }

    .nav-menu li {
        margin: 1rem 0;
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
