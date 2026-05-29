export const bitacoraData = [
  {
    categoria: 'DECISIONES DE DISEÑO',
    prefijo: 'DISEÑO',
    catLabel: 'Diseño',
    entradas: [
      {
        fecha: '01-04-2026',
        titulo: 'ARQUITECTURA SPA',
        cuerpo: 'Se decidió implementar una Single Page Application en Vanilla JS puro. Los componentes se renderizan dinámicamente sobre el elemento #root, evitando recargas de página y preparando la base para una futura migración a React.'
      },
      {
        fecha: '01-04-2026',
        titulo: 'ESTÉTICA CYBERPUNK / SCI-FI',
        cuerpo: 'Definición de la identidad visual del proyecto: fondo oscuro con grilla de líneas sutiles, tipografías Orbitron y Share Tech Mono, paleta de cian (#00f5ff) y verde neón (#39ff14) como acentos principales. La estética HUD/terminal refuerza la temática del equipo.'
      },
      {
        fecha: '02-04-2026',
        titulo: 'TIPOGRAFÍAS GOOGLE FONTS',
        cuerpo: 'Selección de Orbitron (700/900) para títulos y elementos de interfaz, Share Tech Mono para datos y etiquetas monospaciadas, y Exo 2 (300/400/600) para el cuerpo de texto. La combinación logra contraste entre lo "mecánico" y lo legible.'
      },
      {
        fecha: '04-04-2026',
        titulo: 'ESTRUCTURA BASE DEL PROYECTO',
        cuerpo: 'Definición de la arquitectura de carpetas: HTML en la raíz, estilos en /css, lógica en /js, recursos en /img con subcarpetas por integrante. Creación de index.html como shell de la SPA y main.js como único archivo JS de la portada.'
      },
      {
        fecha: '06-04-2026',
        titulo: 'CURSOR PERSONALIZADO',
        cuerpo: 'Implementación de cursor doble: un dot fijo en la posición exacta del mouse y un ring con transición suave que crece de 34px a 54px al pasar sobre elementos interactivos (a, button, .crew-card). Controlado con mousemove y mouseover delegado.'
      },
      {
        fecha: '06-04-2026',
        titulo: 'SISTEMA DE EFECTOS VISUALES',
        cuerpo: 'Incorporación del overlay de escaneo (scan-overlay con scan-line animada), efecto typewriter con ciclo de escritura/borrado, contadores animados con easing cúbico sobre IntersectionObserver, y efecto SFX de texto flotante al interactuar con las tarjetas.'
      },
      {
        fecha: '20-04-2026',
        titulo: 'PERFILES INDIVIDUALES',
        cuerpo: 'Creación de las cuatro páginas de perfil (ximena.html, franco.html, rodrigo.html, mara.html), secciones de habilidades, galería de hobbies categorizada por tipo, y sección de contacto.'
      },
      {
        fecha: '20-04-2026',
        titulo: 'GRID DE PERFILES EN PORTADA',
        cuerpo: 'Diseño de tarjetas de tripulantes con foto a pantalla completa y nombre superpuesto. El grid de dos columnas permite escalar fácilmente sin romper el layout. Cada tarjeta aplica un efecto smash-in escalonado según su índice.'
      },
      {
        fecha: '26-04-2026',
        titulo: 'NAVEGACIÓN ENTRE PERFILES',
        cuerpo: 'Decisión de agregar botones de navegación secuencial entre los perfiles individuales (Ximena → Franco → Rodrigo → Mara) sin pasar por la portada. Facilita la revisión de todos los integrantes en orden y mejora la experiencia de navegación.'
      },
      {
        fecha: '03-05-2026',
        titulo: 'PRIMER DEPLOY EN VERCEL',
        cuerpo: 'Deploy inicial del proyecto. Build exitoso, todos los assets cargando correctamente. Configuración de dominio de producción y verificación de rutas relativas entre páginas.'
      }
    ]
  },
  {
    categoria: 'DIFICULTADES Y SOLUCIONES',
    prefijo: 'ERROR',
    catLabel: 'Dificultad',
    entradas: [
      {
        fecha: '27-04-2026',
        titulo: 'BOTÓN INTEGRANTES DESDE BITÁCORA',
        problema: 'Al estar en la sección bitácora de la SPA y pulsar "INTEGRANTES" en el nav, la función scrollToIntegrantes() no encontraba el elemento #crew-section (que solo existe en la vista home) y no hacía nada.',
        solucion: 'Se agregó una verificación: si #crew-section existe, hace scroll; si no, redirige directamente a ximena.html como punto de entrada al listado de perfiles.'
      },
      {
        fecha: '27-04-2026',
        titulo: 'ENLACE DE BITÁCORA DESDE PERFILES INDIVIDUALES',
        problema: 'Los perfiles individuales son páginas HTML estáticas separadas que no tienen acceso al router de la SPA. El botón BITÁCORA en el nav usaba window.location.href=\'index.html#bitacora\', un anchor que no disparaba ningún comportamiento en main.js.',
        solucion: 'Se cambió el href a index.html?page=bitacora y se agregó detección del parámetro en window.onload dentro de main.js, que lo lee con URLSearchParams y llama a navigate(\'bitacora\') si corresponde.'
      },
      {
        fecha: '28-04-2026',
        titulo: 'CENTRADO VERTICAL EN CARDS DE HABILIDADES',
        problema: 'Las cards de "TECNOLOGÍAS" y "EN APRENDIZAJE" tenían alturas distintas según la cantidad de skill-tags. Esto hacía que el contenido del card con menos tags quedara pegado arriba en lugar de centrarse.',
        solucion: 'Se aplicó display: flex, flex-direction: column y justify-content: center a .crew-card, y se eliminó el margin-bottom de .card-skills para que el flexbox tome el control del espaciado interno.'
      }
    ]
  },
  {
    categoria: 'CAMBIOS IMPORTANTES',
    prefijo: 'UPDATE',
    catLabel: 'Cambios Recientes',
    entradas: [
      {
        fecha: '27-05-2026',
        titulo: 'MIGRACIÓN DE ARQUITECTURA A REACT',
        cuerpo: 'Migración exitosa de la arquitectura SPA Vanilla a React + React Router. Reemplazo del menú de navegación superior por una Sidebar fija en formato Dashboard, con ruteo jerárquico dinámico, renderizado modular y conservación del 100% de la estética retro-futurista.'
      }
    ]
  }
];
