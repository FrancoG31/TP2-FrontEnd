import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function ApiModule() {
  const limit = 12; 
  const [offset, setOffset] = useState(0);
  
  // Consumo de API
  const { data, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

  const handleNext = () => {
    if (data && data.next) setOffset(prev => prev + limit);
  };

  const handlePrev = () => {
    if (offset > 0) setOffset(prev => prev - limit);
  };

  const paginaActual = Math.floor(offset / limit) + 1;
  const totalPaginas = data ? Math.ceil(data.count / limit) : 0;

  return (
    <section className="smash-in">
      <div className="section-header">
        <h2>// CONEXIÓN A BASE DE DATOS EXTERNA</h2>
        <div className="header-line"></div>
        <span className="header-count">POKEAPI v2</span>
      </div>

      <p className="hero-subtitle" style={{ textAlign: 'left', marginBottom: '32px' }}>
        EXTRAYENDO REGISTROS BIOLÓGICOS DE SERVIDORES REMOTOS. IMPLEMENTANDO PAGINACIÓN ASÍNCRONA Y MANEJO DE ESTADOS.
      </p>

      {loading && (
        <div className="terminal-box" style={{ padding: '40px', textAlign: 'center', borderColor: 'var(--yellow)' }}>
          <span className="t-cursor" style={{ fontSize: '2rem', color: 'var(--yellow)' }}>[ ESTABLECIENDO CONEXIÓN... ]</span>
        </div>
      )}

      {error && (
        <div className="terminal-box" style={{ padding: '40px', textAlign: 'center', borderColor: 'var(--red)' }}>
          <span style={{ fontSize: '1.2rem', color: 'var(--red)', fontFamily: 'Orbitron, sans-serif' }}>[ FALLO DE SISTEMA ]</span>
          <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>{error}</p>
        </div>
      )}

      {!loading && !error && data && (
        <>
          <div className="crew-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
            {data.results.map((item, index) => {
              const id = item.url.split('/').filter(Boolean).pop();
              const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

              return (
                <div key={item.name} className="hobby-card" style={{ animationDelay: `${index * 0.05}s`, animation: 'smashIn 0.4s both' }}>
                  <div className="hobby-card-title" style={{ fontSize: '0.7rem', color: 'var(--cyan)' }}>
                    SYS-ID: {id.padStart(3, '0')}
                  </div>
                  <div className="hobby-card-img" style={{ background: 'var(--bg2)', padding: '20px', minHeight: '180px' }}>
                    <img 
                      src={imageUrl} 
                      alt={item.name} 
                      style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(0,245,255,0.2))' }} 
                    />
                  </div>
                  <div style={{ padding: '12px', textAlign: 'center', fontFamily: 'Orbitron, sans-serif', fontSize: '0.8rem', color: '#fff', textTransform: 'uppercase', borderTop: '1px solid var(--cyan-border)' }}>
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', padding: '20px', background: 'var(--bg2)', border: '1px solid var(--cyan-border)', borderRadius: '4px' }}>
            <button 
              className="btn-outline" 
              onClick={handlePrev} 
              disabled={offset === 0}
              style={{ padding: '10px 24px', opacity: offset === 0 ? 0.3 : 1, pointerEvents: offset === 0 ? 'none' : 'auto' }}
            >
              ← ANTERIOR
            </button>
            
            <span style={{ fontFamily: 'Share Tech Mono, monospace', color: 'var(--cyan)', letterSpacing: '2px' }}>
              PÁGINA {paginaActual} DE {totalPaginas}
            </span>

            <button 
              className="btn-outline" 
              onClick={handleNext}
              disabled={!data.next}
              style={{ padding: '10px 24px', opacity: !data.next ? 0.3 : 1, pointerEvents: !data.next ? 'none' : 'auto' }}
            >
              SIGUIENTE →
            </button>
          </div>
        </>
      )}
    </section>
  );
}