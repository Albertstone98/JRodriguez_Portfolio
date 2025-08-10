// Función para aplicar el modo oscuro
function applyDarkMode(isDark) {
    if (isDark) {
        document.body.classList.add("dark-mode");
        document.querySelector("#darkModeToggle i").classList.remove("bi-moon-fill");
        document.querySelector("#darkModeToggle i").classList.add("bi-sun-fill");
    } else {
        document.body.classList.remove("dark-mode");
        document.querySelector("#darkModeToggle i").classList.remove("bi-sun-fill");
        document.querySelector("#darkModeToggle i").classList.add("bi-moon-fill");
    }
}

// Cargar preferencia guardada del modo oscuro
const savedDarkMode = localStorage.getItem('darkMode') === 'true';
applyDarkMode(savedDarkMode);

// Event listener para el botón de modo oscuro
document.getElementById("darkModeToggle").addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem('darkMode', isDark);
    
    let icon = this.querySelector("i");
    icon.classList.toggle("bi-moon-fill");
    icon.classList.toggle("bi-sun-fill");
});

const downloadBtn = document.getElementById('downloadCVScroll');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){ // cuando scrolleás más de 100px
        downloadBtn.classList.remove('d-none');
    } else {
        downloadBtn.classList.add('d-none');
    }
});

downloadBtn.addEventListener('click', () => {
    // Cambiá la ruta del CV según corresponda
    window.location.href = 'CV_Jose_Alberto_Rodriguez.pdf';
});

// Scroll suave para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.offsetTop - navbarHeight - 20; // 20px de margen adicional
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Funciones para el modal de certificados
function abrirCertificado(src) {
    const modal = document.getElementById('certificadoModal');
    const imagen = document.getElementById('certificadoImagen');
    imagen.src = src;
    modal.style.display = 'block';
}

function cerrarCertificado() {
    const modal = document.getElementById('certificadoModal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera de la imagen
document.getElementById('certificadoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarCertificado();
    }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        cerrarCertificado();
    }
});
