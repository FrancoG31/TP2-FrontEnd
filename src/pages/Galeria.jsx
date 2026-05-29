import { useState } from 'react';
import { itemsGaleria } from '../data/galeria';

export default function Galeria() {
  const [categoriaActiva, setCategoriaActiva] = useState('TODOS');

  const categorias = ['TODOS', ...new Set(itemsGaleria.map((item) => item.categoria))];

  const itemsFiltrados = categoriaActiva === 'TODOS'
    ? itemsGaleria
    : itemsGaleria.filter((item) => item.categoria === categoriaActiva);

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
          {itemsFiltrados.map((item) => (
            <div key={item.id} className="hobby-img-card" style={{ height: 'auto', aspectRatio: '4/3', borderRadius: '6px' }}>
              <img src={item.imagen} alt={item.titulo} style={{ filter: 'brightness(0.9) saturate(0.95)' }} />
              
              {/* CAPA DE DESCRIPCIÓN AL PASAR EL CURSOR */}
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
    </>
  );
}
