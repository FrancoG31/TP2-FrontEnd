export const equipo = [
  {
    id: 'ximena',
    initials: 'XF',
    nombre: 'Ximena Facal',
    rol: 'FRONTEND DEV',
    crewId: 'CREW-001',
    base: 'Laboratorios Dynamis',
    estado: 'OPERATIVA',
    habilidadesResumen: ['HTML5', 'CSS3 Avanzado', 'JavaScript ES6', 'Figma'],
    foto: 'img/ximena/foto.png',
    profileBadge: 'PORTFOLIO PERSONAL',
    subtitulo: 'DESARROLLADORA EN FORMACIÓN — TECNOLOGÍA & DATOS',
    sobreMi: [
      'Tengo 31 años y soy de Buenos Aires. Me apasiona la tecnología y comencé mis estudios con Python.',
      'Actualmente estoy explorando datos y cloud.',
      'Mi objetivo es crear soluciones útiles y eficientes.'
    ],
    habilidades: {
      tecnologias: [
        { nombre: 'HTML', porcentaje: 88 },
        { nombre: 'CSS', porcentaje: 85 },
        { nombre: 'JavaScript', porcentaje: 78 },
        { nombre: 'Python', porcentaje: 72 }
      ],
      enAprendizaje: [
        { nombre: 'Cloud', porcentaje: 30 },
        { nombre: 'Power BI', porcentaje: 45 },
        { nombre: 'Linux', porcentaje: 25 }
      ]
    },
    hobbies: [
      {
        categoria: '🎶 MÚSICA',
        items: [
          { titulo: 'Linkin Park', imagen: 'img/ximena/linkinpark.png' },
          { titulo: 'Muse', imagen: 'img/ximena/muse.png' },
          { titulo: 'Royal Blood', imagen: 'img/ximena/royalblood.png' },
          { titulo: 'RHCP', imagen: 'img/ximena/rhcp.png' }
        ]
      },
      {
        categoria: '🎬 SERIES',
        items: [
          { titulo: 'Friends', imagen: 'img/ximena/friends.png' },
          { titulo: 'TBBT', imagen: 'img/ximena/tbbt.png' },
          { titulo: 'Hill House', imagen: 'img/ximena/hillhouse.png' }
        ]
      },
      {
        categoria: '📚 LIBROS',
        items: [
          { titulo: 'Harry Potter', imagen: 'img/ximena/harrylibro.png' },
          { titulo: 'LOTR', imagen: 'img/ximena/lotr.png' },
          { titulo: 'Eragon', imagen: 'img/ximena/eragon.png' }
        ]
      },
      {
        categoria: '🎮 GAMING',
        items: [
          { titulo: 'Apex Legends', imagen: 'img/ximena/apex.png' },
          { titulo: 'Phasmophobia', imagen: 'img/ximena/phasmofobia.png' },
          { titulo: 'Hogwarts Legacy', imagen: 'img/ximena/hogwarts.png' }
        ]
      }
    ],
    proyectos: [
      {
        id: 'xime-proj-1',
        titulo: 'ALIMENTOS.NET - PÁGINA WEB',
        codigo: '// PRJ-X01',
        descripcion: 'Dashboard con recetas saludables, consejos nutricionales y guía de alimentación balanceada.',
        tech: ['HTML', 'CSS'],
        imagen: 'img/ximena/proyecto1.webp'
      },
      {
        id: 'xime-proj-2',
        titulo: 'ROPITA.COM - PÁGINA WEB',
        codigo: '// PRJ-X02',
        descripcion: 'E-commerce con carrito de compras, gestión de productos y panel de administración para ventas online.',
        tech: ['CSS', 'JavaScript'],
        imagen: 'img/ximena/proyecto2.webp'
      },
      {
        id: 'xime-proj-3',
        titulo: 'TO DO - APLICACIÓN DE ESCRITORIO',
        codigo: '// PRJ-X03',
        descripcion: 'Aplicación de escritorio para la gestión de tareas y proyectos personales con interfaz minimalista.',
        tech: ['Python'],
        imagen: 'img/ximena/proyecto3.webp'
      },
      {
        id: 'xime-proj-4',
        titulo: 'WEBDESARROLLO.COM - PÁGINA WEB',
        codigo: '// PRJ-X04',
        descripcion: 'Portal informativo sobre desarrollo web con recursos, tutoriales y noticias del sector.',
        tech: ['HTML', 'CSS'],
        imagen: 'img/ximena/proyecto4.webp'
      },
      {
        id: 'xime-proj-5',
        titulo: 'TUSALDO.NET - APP MOVIL',
        codigo: '// PRJ-X05',
        descripcion: 'App móvil para el seguimiento de gastos y presupuestos personales.',
        tech: ['Python'],
        imagen: 'img/ximena/proyecto5.webp'
      }
    ],
    contacto: [
      { tipo: 'github', url: 'https://github.com/ximefacal', label: 'github/ximefacal' },
      { tipo: 'linkedin', url: 'https://www.linkedin.com/in/ximena-facal/', label: 'linkedin/ximena-facal' }
    ]
  },
  {
    id: 'franco',
    initials: 'FG',
    nombre: 'Franco Guarachi',
    rol: 'UI DESIGNER',
    crewId: 'CREW-002',
    base: 'Servidores Subterráneos',
    estado: 'EN LÍNEA',
    habilidadesResumen: ['CSS', 'Figma', 'Git', 'Node.js'],
    foto: 'img/franco/foto.png',
    profileBadge: 'PORTFOLIO PERSONAL',
    subtitulo: 'DESARROLLADOR EN FORMACIÓN',
    sobreMi: [
      '¡Buenas! Tengo 31 años, soy estudiante de Desarrollo de Software y Construcciones Livianas Industrializadas.',
      'Soy freelancer como analista de datos, hice el curso de Google e IBM, normalmente uso Looker y Google Sheets.',
      'Saliendo de la parte tecnológica, doy clases de apoyo en matemáticas para alumnos de secundaria, también en las vacaciones trabajo en la construcción.'
    ],
    habilidades: {
      tecnologias: [
        { nombre: 'HTML', porcentaje: 82 },
        { nombre: 'JavaScript', porcentaje: 75 },
        { nombre: 'Looker', porcentaje: 88 },
        { nombre: 'C#', porcentaje: 71 },
        { nombre: 'Kotlin', porcentaje: 77 }
      ],
      enAprendizaje: [
        { nombre: 'CSS', porcentaje: 48 },
        { nombre: 'Entorno AWS', porcentaje: 20 },
        { nombre: 'React', porcentaje: 32 }
      ]
    },
    hobbies: [
      {
        categoria: '🎶 MÚSICA',
        items: [
          { titulo: 'Nirvana', imagen: 'img/franco/nirvana.png' },
          { titulo: 'Radiohead', imagen: 'img/franco/radiohead.png' },
          { titulo: 'Dua Lipa', imagen: 'img/franco/dualipa.png' },
          { titulo: 'Linkin Park', imagen: 'img/franco/linkinpark.png' }
        ]
      },
      {
        categoria: '🎬 SERIES',
        items: [
          { titulo: 'Doctor House', imagen: 'img/franco/house.png' },
          { titulo: 'Breaking Bad', imagen: 'img/franco/breakingbad.png' },
          { titulo: 'Better Call Saul', imagen: 'img/franco/bettercallsaul.png' },
          { titulo: 'The Boys', imagen: 'img/franco/theboys.png' }
        ]
      },
      {
        categoria: '🎬 PELÍCULAS',
        items: [
          { titulo: 'Fight Club', imagen: 'img/franco/fightclub.png' },
          { titulo: 'Volver al Futuro', imagen: 'img/franco/volveralfuturo.png' },
          { titulo: 'Spiderman', imagen: 'img/franco/spiderman.png' },
          { titulo: 'El Efecto Mariposa', imagen: 'img/franco/elefectomariposa.png' }
        ]
      },
      {
        categoria: '🎮 GAMING',
        items: [
          { titulo: 'Metal Gear Solid V', imagen: 'img/franco/mgsv.png' },
          { titulo: 'Project Zomboid', imagen: 'img/franco/projectzomboid.png' },
          { titulo: 'Kingdom Come Deliverance', imagen: 'img/franco/kindomecomedeliverance.png' },
          { titulo: 'Fallout 4', imagen: 'img/franco/fallout4.png' }
        ]
      }
    ],
    proyectos: [
      {
        id: 'franco-proj-1',
        titulo: 'ANALYTICS PRO - APP MOVIL',
        codigo: '// PRJ-F01',
        descripcion: 'App móvil para el análisis de datos de productos con gráficos interactivos y reportes avanzados en Looker Studio e integración web.',
        tech: ['Kotlin'],
        imagen: 'img/franco/proyecto14.webp'
      },
      {
        id: 'franco-proj-2',
        titulo: 'AUTODASH - DASHBOARD LOOKER',
        codigo: '// PRJ-F02',
        descripcion: 'Dashboard de análisis de datos automotrices con métricas de rendimiento, financieros y de operaciones para toma de decisiones.',
        tech: ['Looker'],
        imagen: 'img/franco/proyecto15.webp'
      },
      {
        id: 'franco-proj-3',
        titulo: 'TUKI - APLICACIÓN DE ESCRITORIO',
        codigo: '// PRJ-F03',
        descripcion: 'Aplicación de escritorio para la gestión de tareas y proyectos personales con interfaz minimalista.',
        tech: ['C#'],
        imagen: 'img/franco/proyecto16.webp'
      },
      {
        id: 'franco-proj-4',
        titulo: 'MASTER KEY - APLICACIÓN DE ESCRITORIO',
        codigo: '// PRJ-F04',
        descripcion: 'Aplicación de escritorio para la gestión de infraestructuras cloud con enfoque en seguridad y rendimiento.',
        tech: ['C#'],
        imagen: 'img/franco/proyecto17.webp'
      },
      {
        id: 'franco-proj-5',
        titulo: 'AJEDREZ CLÁSICO - JUEGO',
        codigo: '// PRJ-F05',
        descripcion: 'Juego de ajedrez clásico con IA implementada en C# y entorno de escritorio.',
        tech: ['C#'],
        imagen: 'img/franco/proyecto18.webp'
      }
    ],
    contacto: [
      { tipo: 'github', url: 'https://github.com/FrancoG31', label: 'github/francoG31' },
      { tipo: 'linkedin', url: 'https://www.linkedin.com/in/franco-guarachi/', label: 'linkedin/franco-guarachi' }
    ]
  },
  {
    id: 'rodrigo',
    initials: 'RP',
    nombre: 'Rodrigo Pinto',
    rol: 'FULLSTACK DEV',
    crewId: 'CREW-003',
    base: 'La Nube Oscura',
    estado: 'CONECTADO',
    habilidadesResumen: ['JS', 'Node', 'SQL', 'Python'],
    foto: 'img/rodrigo/r-batdog.webp',
    profileBadge: 'PORTFOLIO PERSONAL',
    subtitulo: 'DESARROLLADOR FULLSTACK JR',
    sobreMi: [
      'Soy un desarrollador Full Stack Junior con sólidos fundamentos en tecnologías frontend (HTML, CSS, JavaScript) y lenguajes backend de fuerte adopción empresarial (Java, C#).',
      'Mi enfoque es la creación de aplicaciones eficientes, código limpio y BD relacionales (MySQL, SQL Server). Comprometido con arquitecturas escalables.',
      'Actualmente enfocado en dominar React, Spring Boot, Docker y entornos cloud (AWS).'
    ],
    habilidades: {
      tecnologias: [
        { nombre: 'HTML', porcentaje: 95 },
        { nombre: 'CSS', porcentaje: 90 },
        { nombre: 'JavaScript', porcentaje: 86 },
        { nombre: 'React', porcentaje: 84 },
        { nombre: 'Java con Spring', porcentaje: 80 },
        { nombre: '.NET', porcentaje: 74 },
        { nombre: 'MySQL', porcentaje: 82 },
        { nombre: 'SQLite', porcentaje: 78 },
        { nombre: 'SQL Server', porcentaje: 76 }
      ],
      enAprendizaje: [
        { nombre: 'Python', porcentaje: 45 },
        { nombre: 'Node.js con Express', porcentaje: 38 },
        { nombre: 'MongoDB', porcentaje: 28 },
        { nombre: 'Entorno AWS', porcentaje: 22 },
        { nombre: 'Docker', porcentaje: 35 }
      ]
    },
    hobbies: [
      {
        categoria: '🎶 MÚSICA',
        items: [
          { titulo: '— Rayden - Haz de luz —', imagen: 'img/rodrigo/r-hazDeLuz.png' },
          { titulo: '— Nach - Disparos del silencio —', imagen: 'img/rodrigo/r-disparosDeSilencio.png' },
          { titulo: '— Rayden - viviendo en gerundio —', imagen: 'img/rodrigo/r-viviendoEnGerundio.png' }
        ]
      },
      {
        categoria: '🎬 PELÍCULAS',
        items: [
          { titulo: 'Interestelar', imagen: 'img/rodrigo/interstellar.png' },
          { titulo: 'Hombre en Llamas', imagen: 'img/rodrigo/hombreenllamas.png' },
          { titulo: 'Batman: Caballero de la Noche', imagen: 'img/rodrigo/batman.png' }
        ]
      },
      {
        categoria: '🎮 GAMING',
        items: [
          { titulo: '— Dota 2 —', imagen: 'img/rodrigo/r-dota2.png' },
          { titulo: '— Counter Strike 2 —', imagen: 'img/rodrigo/r-cs2.png' },
          { titulo: '— Red Dead Redemption 2 —', imagen: 'img/rodrigo/r-redDeadRedemption.png' }
        ]
      }
    ],
    proyectos: [
      {
        id: 'rod-proj-1',
        titulo: 'DINAMIS - APLICACIÓN DE ESCRITORIO',
        codigo: '// PRJ-R01',
        descripcion: 'Aplicación de escritorio para la gestión de un gimnasio.',
        tech: ['Java', 'Spring', 'MySQL'],
        imagen: 'img/rodrigo/r-dynamislogo.png'
      },
      {
        id: 'rod-proj-2',
        titulo: 'PIPO GAS - PAGINA WEB',
        codigo: '// PRJ-R02',
        descripcion: 'Aplicación web responsiva de control de pedidos y ruteo dinámico de distribución.',
        tech: ['JavaScript', 'HTML', 'CSS', 'SQLite'],
        imagen: 'img/rodrigo/r-pipo.png'
      },
      {
        id: 'rod-proj-3',
        titulo: 'MANCUERNA - APLICACIÓN DE ESCRITORIO',
        codigo: '// PRJ-R03',
        descripcion: 'Aplicación de escritorio para el entrenamiento de fuerza con rutinas personalizadas y seguimiento de progreso.',
        tech: ['C#'],
        imagen: 'img/rodrigo/proyecto11.webp'
      },
      {
        id: 'rod-proj-4',
        titulo: 'PLANIPRO.COM - PÁGINA WEB',
        codigo: '// PRJ-R04',
        descripcion: 'Página web para la gestión de tareas y proyectos personales.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        imagen: 'img/rodrigo/proyecto12.webp'
      },
      {
        id: 'rod-proj-5',
        titulo: 'VUELAVUELA.COM',
        codigo: '// PRJ-R05',
        descripcion: 'Página web para la gestión de viajes con reservas y rutas dinámicas.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        imagen: 'img/rodrigo/proyecto13.webp'
      }
    ],
    contacto: [
      { tipo: 'github', url: 'https://github.com/rodgpinto', label: 'github/rodgpinto' },
      { tipo: 'email', url: 'mailto:rodrigo.guillermo.pinto@gmail.com', label: 'rodrigo.guillermo.pinto@gmail.com' }
    ]
  },
  {
    id: 'mara',
    initials: 'MS',
    nombre: 'Mara Skaarup',
    rol: 'BACKEND DEV',
    crewId: 'CREW-004',
    base: 'Estudio Orbital',
    estado: 'ACTIVA',
    habilidadesResumen: ['Python', 'APIs', 'Git', 'UI/UX'],
    foto: 'img/mara/foto.png',
    profileBadge: 'PORTFOLIO PERSONAL',
    subtitulo: 'DESARROLLADORA EN FORMACIÓN',
    sobreMi: [
      'Soy de San Cayetano, provincia de Buenos Aires y hoy vivo en San Martín, tengo 50 años.',
      'Soy estudiante de programación y Ciencia de Datos, con un fuerte interés en el desarrollo web y en cómo la tecnología puede transformar la forma en que interpretamos el mundo.',
      'Realicé un curso de UX/UI y utilizo herramientas como Figma, combinando estética y usabilidad.',
      'Cuento con experiencia en análisis de datos con Python, aplicando limpieza, visualización y generación de insights.'
    ],
    habilidades: {
      tecnologias: [
        { nombre: 'HTML', porcentaje: 85 },
        { nombre: 'CSS', porcentaje: 80 },
        { nombre: 'Figma', porcentaje: 92 },
        { nombre: 'Diseño UX/UI', porcentaje: 88 },
        { nombre: 'Python', porcentaje: 74 }
      ],
      enAprendizaje: [
        { nombre: 'JavaScript', porcentaje: 42 }
      ]
    },
    hobbies: [
      {
        categoria: '🎬 PELÍCULAS',
        items: [
          { titulo: 'J-Hope IN THE BOX', imagen: 'img/mara/j-hope.png', contain: true },
          { titulo: 'Orgullo y Prejuicio', imagen: 'img/mara/orgulloyprejucio.png', contain: true },
          { titulo: 'BTS: El Regreso', imagen: 'img/mara/btsregreso.png', contain: true }
        ]
      },
      {
        categoria: '🎶 MÚSICA',
        items: [
          { titulo: 'BTS - Bantann Sonyeondan (방탄소년단)', imagen: 'img/mara/bts.png' },
          { titulo: 'J Hope', imagen: 'img/mara/JHope.png' },
          { titulo: 'Luis Miguel', imagen: 'img/mara/LM.png' },
          { titulo: 'Música Clásica', imagen: 'img/mara/Musica Clásica.png' }
        ]
      }
    ],
    proyectos: [
      {
        id: 'mara-proj-1',
        titulo: 'KAIROS - PROYECTO UX/UI',
        codigo: '// PRJ-M01',
        descripcion: 'Proyecto para página web de una artesano.',
        tech: ['UX/UI', 'Figma'],
        imagen: 'img/mara/proyecto1.png',
        contain: true
      },
      {
        id: 'mara-proj-2',
        titulo: 'DYNAMIS - APLICACIÓN MOVIL',
        codigo: '// PRJ-M02',
        descripcion: 'Aplicación móvil para la gestión de un gimnasio.',
        tech: ['Figma', 'UX/UI'],
        imagen: 'img/mara/Dynamis.png',
        contain: true
      },
      {
        id: 'mara-proj-3',
        titulo: 'CAMPUS.NET',
        codigo: '// PRJ-M03',
        descripcion: 'Campus virtual para cursos online, con seguimiento de progreso y analíticas para educadores.',
        tech: ['CSS', 'HTML'],
        imagen: 'img/mara/proyecto6.webp',
        contain: true
      },
      {
        id: 'mara-proj-4',
        titulo: 'PERRITOS.COM - PÁGINA WEB',
        codigo: '// PRJ-M04',
        descripcion: 'Página web para la adopción de perros.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        imagen: 'img/mara/proyecto7.webp',
        contain: true
      },
      {
        id: 'mara-proj-5',
        titulo: 'MILANDING.NET',
        codigo: '// PRJ-M05',
        descripcion: 'Milanding.net es una plataforma web para crear landing pages',
        tech: ['HTML', 'CSS', 'JavaScript'],
        imagen: 'img/mara/proyecto8.webp',
        contain: true
      }
    ],
    contacto: [
      { tipo: 'github', url: 'https://github.com/SkamarluzJH', label: 'github/SkamarluzJH' },
      { tipo: 'linkedin', url: 'https://www.linkedin.com/in/mara-skaarup/', label: 'linkedin/Mara-Skaarup' },
      { tipo: 'behance', url: 'https://www.behance.net/maraskaarup', label: 'Behance/Mara-Skaarup' }
    ]
  }
];
