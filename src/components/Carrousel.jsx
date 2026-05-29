import React, { useState } from 'react';

// Iconos vectoriales Chevron para las flechas de navegación con estilo cibernético
const PrevIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const NextIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function Carrousel({ proyectos }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!proyectos || proyectos.length === 0) return null;

  const total = proyectos.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Obtener los 3 proyectos visibles cíclicamente
  const visibleProjects = [
    proyectos[currentIndex],
    proyectos[(currentIndex + 1) % total],
    proyectos[(currentIndex + 2) % total]
  ];

  return (
    <div className="carousel-wrapper">
      <button 
        className="carousel-arrow prev" 
        onClick={handlePrev} 
        aria-label="Proyecto Anterior"
      >
        <PrevIcon />
      </button>

      <div className="carousel-track">
        {visibleProjects.map((proj, index) => (
          <div 
            key={proj.id} 
            className="carousel-card-wrapper"
            style={{ animation: 'fadeUp 0.4s ease both' }}
          >
            <div className="hobby-card project-card">
              <div className="hobby-card-title">{proj.titulo}</div>
              <div className="hobby-card-img project-card-img">
                {proj.imagen ? (
                  <>
                    <img
                      src={`/${proj.imagen}`}
                      alt={proj.titulo}
                      style={proj.contain ? { objectFit: 'contain' } : {}}
                    />
                    <div className="project-tags-overlay">
                      {proj.tech.map((t) => (
                        <span key={t} className="project-tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="project-placeholder">
                    <div className="project-code">{proj.codigo}</div>
                    <p className="project-desc">{proj.descripcion}</p>
                    <div className="project-tech-tags">
                      {proj.tech.map((t) => (
                        <span key={t} className="project-tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button 
        className="carousel-arrow next" 
        onClick={handleNext} 
        aria-label="Proyecto Siguiente"
      >
        <NextIcon />
      </button>
    </div>
  );
}
