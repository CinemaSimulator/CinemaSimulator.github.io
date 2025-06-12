let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Oculto el menú una vez que selecciono una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        
        // Aplicar animaciones a cada barra de progreso
        for (let i = 0; i < habilidades.length; i++) {
            let clase = habilidades[i].classList[1]; // Obtener la segunda clase (unreal, realidad-virtual, etc.)
            habilidades[i].style.width = "0%"; // Resetear antes de animar
            
            // Usar setTimeout para asegurar que el reset se aplique antes de la animación
            setTimeout(() => {
                habilidades[i].style.width = habilidades[i].querySelector("span").textContent;
            }, 100);
        }
    }
}

// Detectar scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}

// Inicializar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    efectoHabilidades();
});
