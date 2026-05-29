export const estructuraApp = {
  nombre: 'App.jsx',
  tipo: 'Enrutador / Principal',
  descripcion: 'Punto de entrada principal que inicializa el enrutador BrowserRouter y define las rutas de la SPA.',
  ruta: 'src/App.jsx',
  hijos: [
    {
      nombre: 'DashboardLayout.jsx',
      tipo: 'Layout',
      descripcion: 'Plantilla de estructura general. Organiza la sidebar y el contenedor del contenido principal de la aplicación.',
      ruta: 'src/components/DashboardLayout.jsx',
      hijos: [
        {
          nombre: 'Sidebar.jsx',
          tipo: 'Componente UI',
          descripcion: 'Barra lateral de navegación principal. Contiene los enlaces a todas las terminales y a los perfiles de la tripulación.',
          ruta: 'src/components/Sidebar.jsx',
          hijos: []
        },
        {
          nombre: 'Outlet (React Router)',
          tipo: 'Enrutado Dinámico',
          descripcion: 'Componente contenedor que renderiza la página correspondiente según la ruta URL activa.',
          ruta: 'react-router-dom',
          hijos: [
            {
              nombre: 'Home.jsx',
              tipo: 'Página',
              descripcion: 'Pantalla de inicio principal (Panel de control). Muestra estadísticas clave de la tripulación, estado del TP2 y gatillo de escaneo visual.',
              ruta: 'src/pages/Home.jsx',
              hijos: []
            },
            {
              nombre: 'Bitacora.jsx',
              tipo: 'Página',
              descripcion: 'Muestra la bitácora de la misión, categorizada por terminales, problemas técnicos encontrados y sus soluciones.',
              ruta: 'src/pages/Bitacora.jsx',
              hijos: []
            },
            {
              nombre: 'Profile.jsx',
              tipo: 'Página',
              descripcion: 'Página de detalles de perfil de cada tripulante (Skills, Hobbies, Proyectos, Links). Carga datos dinámicos mediante equipo.js.',
              ruta: 'src/pages/Profile.jsx',
              hijos: []
            },
            {
              nombre: 'Galeria.jsx',
              tipo: 'Página',
              descripcion: 'Galería de imágenes futuristas del TP2. Permite previsualizar arte sci-fi interactivo.',
              ruta: 'src/pages/Galeria.jsx',
              hijos: []
            },
            {
              nombre: 'ExploradorDatos.jsx',
              tipo: 'Página',
              descripcion: 'Permite explorar, filtrar y analizar la telemetría en tiempo real de los sistemas del crucero espacial.',
              ruta: 'src/pages/ExploradorDatos.jsx',
              hijos: []
            },
            {
              nombre: 'ArbolComponentes.jsx',
              tipo: 'Página',
              descripcion: 'Representación técnica e interactiva de la jerarquía de componentes del TP2 de React.',
              ruta: 'src/pages/ArbolComponentes.jsx',
              hijos: []
            }
          ]
        }
      ]
    }
  ]
};
