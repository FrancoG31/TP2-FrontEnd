import { useState, useEffect } from 'react';
import { itemsGaleria } from '../data/galeria';

export default function Galeria() {
  const [categoriaActiva, setCategoriaActiva] = useState('TODOS');
  // Estado para rastrear el índice de la imagen abierta en el Lightbox (null si está cerrado)
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categorias = ['TODOS', ...new Set(itemsGaleria.map((item) => item.categoria))];

  const itemsFiltrados = categoriaActiva === 'TODOS'
    ? itemsGaleria
    : itemsGaleria.filter((item) => item.categoria === categoriaActiva);

  // Lógica para manejar el teclado (ESC, Flecha Derecha, Flecha Izquierda)
  useEffect(() => {
    if (lightboxIndex === null) return; // Si está cerrado, no escuchar eventos

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % itemsFiltrados.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + itemsFiltrados.length) % itemsFiltrados.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Limpieza del evento al cerrar o desmontar
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, itemsFiltrados]);

  const handlePrev = (e) => {
    e.stopPropagation(); // Evita que se cierre el modal al hacer click en la flecha
    setLightboxIndex((prev) => (prev - 1 + itemsFiltrados.length) % itemsFiltrados.length);
  };

  const handleNext = (e) => {
    e.stopPropagation(); // Evita que se cierre el modal al hacer click en la flecha
    setLightboxIndex((prev) => (prev + 1) % itemsFiltrados.length);
  };

  return (
    <>
      <section className="smash-in">
        <div className="section-header">
          <h2>// GALERÍA DE SISTEMAS</h2>
          <div className="header-line"></div>
          <span className="header-count">{itemsFiltrados.length} REGISTROS VISUALES</span>
        </div>

        <p className="hero-subtitle" style={{ textAlign: 'left', marginBottom: '32px' }}>
          REGISTROS GRÁFICOS DE LA NAVE MISIONAL DYNAMIS Y LOS SISTEMAS DE COMUNICACIÓN NEXUS.
        </p>

        {/* BARRA DE FILTRADO */}
        <div className="nav-links" style={{ marginBottom: '36px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`nav-btn ${categoriaActiva === cat ? 'active' : ''}`}
              onClick={() => setCategoriaActiva(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* REJILLA DE IMÁGENES */}
        <div className="hobby-img-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {itemsFiltrados.map((item, index) => (
            <div 
              key={item.id} 
              className="hobby-img-card" 
              style={{ height: 'auto', aspectRatio: '4/3', borderRadius: '6px' }}
              onClick={() => setLightboxIndex(index)} // Abre el Lightbox en el índice seleccionado
            >
              <img src={item.imagen} alt={item.titulo} style={{ filter: 'brightness(0.9) saturate(0.95)' }} />
              
              <div 
                className="hobby-img-label" 
                style={{ 
                  background: 'linear-gradient(to top, rgba(5, 8, 16, 0.95) 75%, rgba(5, 8, 16, 0.4))', 
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--cyan)' }}>{item.titulo}</span>
                  <span className="log-prefix" style={{ fontSize: '0.55rem', border: '1px solid rgba(0, 245, 255, 0.25)', color: 'var(--cyan)', background: 'rgba(0, 245, 255, 0.05)' }}>{item.categoria}</span>
                </div>
                <p style={{ fontFamily: 'Exo 2, sans-serif', fontSize: '0.72rem', color: 'var(--text-dim)', margin: '4px 0 0', textTransform: 'none', letterSpacing: 'normal', lineHeight: '1.4' }}>
                  {item.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPONENTE INTERACTIVO INTERNO: LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 8, 16, 0.95)',
            backdropFilter: 'blur(8px)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'backdropFadeIn 0.25s ease forwards'
          }}
          onClick={() => setLightboxIndex(null)} 
        >
          {/* Botón Cerrar */}
          <button 
            onClick={() => setLightboxIndex(null)}
            style={{ position: 'absolute', top: '24px', right: '36px', background: 'none', border: 'none', color: 'var(--cyan)', fontFamily: 'Orbitron, sans-serif', fontSize: '1.5rem', cursor: 'pointer', zIndex: 1010 }}
          >
            ✕ <span style={{ fontSize: '0.75rem', letterSpacing: '2px' }}>[ESC]</span>
          </button>

          {}
          <button 
            onClick={handlePrev}
            className="carousel-arrow"
            style={{ position: 'absolute', left: '24px', padding: '16px' }}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          <div 
            style={{ display: 'flex', flexDirection: 'column', maxWidth: '85vw', maxHeight: '80vh', alignItems: 'center', gap: '16px' }}
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={itemsFiltrados[lightboxIndex].imagen} 
              alt={itemsFiltrados[lightboxIndex].titulo} 
              style={{
                maxWidth: '100%',
                maxHeight: '65vh',
                objectFit: 'contain',
                border: '1px solid var(--cyan-border)',
                boxShadow: '0 0 30px rgba(0, 245, 255, 0.2)',
                animation: 'smashIn 0.35s both'
              }}
            />
            
            <div style={{ textAlign: 'center', background: 'var(--bg2)', border: '1px solid var(--cyan-border)', padding: '12px 24px', borderRadius: '4px', width: '100%' }}>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '1rem', fontWeight: 'bold', color: '#fff', marginBottom: '4px' }}>
                {itemsFiltrados[lightboxIndex].titulo}
              </div>
              <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.75rem', color: 'var(--cyan)', letterSpacing: '2px' }}>
                CATEGORÍA: {itemsFiltrados[lightboxIndex].categoria} | REGISTRO {lightboxIndex + 1} DE {itemsFiltrados.length}
              </div>
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="carousel-arrow"
            style={{ position: 'absolute', right: '24px', padding: '16px' }}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      )}
    </>
  );
}