import { useState } from 'react';
import { sistemasNave } from '../data/exploradorDatos';

export default function ExploradorDatos() {
  const [buscar, setBuscar] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('TODOS');

  // Filtrado de sistemas
  const sistemasFiltrados = sistemasNave.filter((sys) => {
    const coincideNombre = sys.nombre.toLowerCase().includes(buscar.toLowerCase()) || 
                          sys.categoria.toLowerCase().includes(buscar.toLowerCase());
    const coincideEstado = filtroEstado === 'TODOS' 
      ? true 
      : filtroEstado === 'OTROS'
        ? !['OPERATIVO', 'STANDBY', 'CRÍTICO', 'DESCONECTADO'].includes(sys.estado)
        : sys.estado === filtroEstado;
    return coincideNombre && coincideEstado;
  });

  // Estadísticas calculadas
  const totalSistemas = sistemasNave.length;
  const totalCriticos = sistemasNave.filter(sys => sys.estado === 'CRÍTICO').length;
  const consumoTotal = sistemasNave.reduce((acc, sys) => acc + sys.consumo, 0);

  return (
    <>
      <section className="smash-in">
        <div className="section-header">
          <h2>// EXPLORADOR DE TELEMETRÍA</h2>
          <div className="header-line"></div>
          <span className="header-count">{sistemasFiltrados.length} SISTEMAS REGISTRADOS</span>
        </div>

        <p className="hero-subtitle" style={{ textAlign: 'left', marginBottom: '32px' }}>
          MONITOR DE ESTADO, TELEMETRÍA Y CONTROL DE CONSUMO DE ENERGÍA DEL CORE DYNAMIS.
        </p>

        {/* TARJETAS DE MÉTRICAS RÁPIDAS */}
        <div className="hero-stats" style={{ justifyContent: 'flex-start', gap: '32px', margin: '0 0 36px 0', flexWrap: 'wrap' }}>
          <div className="stat" style={{ background: 'var(--bg2)', border: '1px solid var(--cyan-border)', padding: '16px 28px', borderRadius: '4px', minWidth: '180px' }}>
            <span className="stat-number" style={{ fontSize: '2rem' }}>{totalSistemas}</span>
            <span className="stat-label" style={{ color: 'var(--text)' }}>TOTAL SISTEMAS</span>
          </div>
          <div className="stat" style={{ background: 'var(--bg2)', border: `1px solid ${totalCriticos > 0 ? 'var(--red)' : 'var(--cyan-border)'}`, padding: '16px 28px', borderRadius: '4px', minWidth: '180px' }}>
            <span className="stat-number" style={{ fontSize: '2rem', color: totalCriticos > 0 ? 'var(--red)' : 'var(--cyan)', textShadow: totalCriticos > 0 ? '0 0 16px var(--red)' : 'none' }}>{totalCriticos}</span>
            <span className="stat-label" style={{ color: totalCriticos > 0 ? 'var(--red)' : 'var(--text)' }}>NÚCLEOS EN ALERTA</span>
          </div>
          <div className="stat" style={{ background: 'var(--bg2)', border: '1px solid var(--cyan-border)', padding: '16px 28px', borderRadius: '4px', minWidth: '180px' }}>
            <span className="stat-number" style={{ fontSize: '2rem', color: 'var(--green)', textShadow: '0 0 16px rgba(57, 255, 20, 0.4)' }}>{consumoTotal} <span style={{ fontSize: '1rem', color: 'var(--text-dim)' }}>MW</span></span>
            <span className="stat-label" style={{ color: 'var(--text)' }}>CONSUMO GLOBAL</span>
          </div>
        </div>

        {/* CONTROLES DE BÚSQUEDA Y FILTRADO */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <input
              type="text"
              placeholder="Buscar sistema o categoría..."
              value={buscar}
              onChange={(e) => setBuscar(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--bg2)',
                border: '1px solid var(--cyan-border)',
                borderRadius: '4px',
                padding: '12px 16px',
                color: 'var(--text)',
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '0.85rem',
                outline: 'none',
                letterSpacing: '1px'
              }}
            />
            {buscar && (
              <button 
                onClick={() => setBuscar('')} 
                style={{ 
                  position: 'absolute', 
                  right: '12px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--text-dim)', 
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                ✕
              </button>
            )}
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['TODOS', 'OPERATIVO', 'STANDBY', 'CRÍTICO', 'DESCONECTADO', 'OTROS'].map((est) => (
              <button
                key={est}
                onClick={() => setFiltroEstado(est)}
                className={`nav-btn ${filtroEstado === est ? 'active' : ''}`}
                style={{
                  fontSize: '0.65rem',
                  padding: '6px 12px',
                  borderColor: est === 'CRÍTICO' && filtroEstado === est 
                    ? 'var(--red)' 
                    : est === 'OTROS' && filtroEstado === est 
                      ? '#ff9f1c' 
                      : '',
                  backgroundColor: est === 'CRÍTICO' && filtroEstado === est 
                    ? 'rgba(255, 45, 85, 0.1)' 
                    : est === 'OTROS' && filtroEstado === est 
                      ? 'rgba(255, 159, 28, 0.1)' 
                      : ''
                }}
              >
                {est}
              </button>
            ))}
          </div>
        </div>

        {/* TABLA DE TELEMETRÍA */}
        <div className="terminal-box" style={{ overflowX: 'auto', background: 'var(--bg2)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--cyan-border)', background: 'rgba(5, 8, 16, 0.4)' }}>
                <th style={{ padding: '16px 20px', fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '2px' }}>SISTEMA</th>
                <th style={{ padding: '16px 20px', fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '2px' }}>CATEGORÍA</th>
                <th style={{ padding: '16px 20px', fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '2px' }}>ESTADO</th>
                <th style={{ padding: '16px 20px', fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '2px' }}>RENDIMIENTO</th>
                <th style={{ padding: '16px 20px', fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '2px' }}>CONSUMO</th>
                <th style={{ padding: '16px 20px', fontFamily: 'Orbitron, sans-serif', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '2px' }}>ALERTA</th>
              </tr>
            </thead>
            <tbody>
              {sistemasFiltrados.length > 0 ? (
                sistemasFiltrados.map((sys) => {
                  let colorEstado = 'var(--text-dim)';
                  if (sys.estado === 'OPERATIVO') colorEstado = 'var(--green)';
                  else if (sys.estado === 'STANDBY') colorEstado = 'var(--yellow)';
                  else if (sys.estado === 'CRÍTICO') colorEstado = 'var(--red)';
                  else if (!['OPERATIVO', 'STANDBY', 'CRÍTICO', 'DESCONECTADO'].includes(sys.estado)) {
                    colorEstado = '#ff9f1c'; // Naranja de advertencia
                  }

                  let colorAlerta = 'var(--text-dim)';
                  if (sys.nivelAlerta === 'MEDIO') colorAlerta = 'var(--yellow)';
                  if (sys.nivelAlerta === 'ALTO') colorAlerta = 'var(--red)';

                  return (
                    <tr 
                      key={sys.id} 
                      style={{ 
                        borderBottom: '1px solid rgba(0, 245, 255, 0.05)', 
                        transition: 'background 0.2s',
                        fontFamily: 'Share Tech Mono, monospace',
                        fontSize: '0.8rem'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 245, 255, 0.02)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                    >
                      <td style={{ padding: '16px 20px', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>{sys.nombre}</td>
                      <td style={{ padding: '16px 20px', color: 'var(--text-dim)', letterSpacing: '1px' }}>{sys.categoria}</td>
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{ 
                          color: colorEstado, 
                          fontWeight: 'bold',
                          letterSpacing: '1px'
                        }}>
                          ● {sys.estado}
                        </span>
                      </td>
                      <td style={{ padding: '16px 20px', width: '200px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div style={{ flex: 1, height: '6px', background: 'rgba(0, 245, 255, 0.05)', border: '1px solid rgba(0, 245, 255, 0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: `${sys.rendimiento}%`, height: '100%', background: colorEstado === 'var(--text-dim)' ? 'var(--text-dim)' : `linear-gradient(90deg, var(--cyan), ${colorEstado})`, borderRadius: '3px' }}></div>
                          </div>
                          <span style={{ minWidth: '35px', textAlign: 'right', fontWeight: 'bold', color: colorEstado }}>{sys.rendimiento}%</span>
                        </div>
                      </td>
                      <td style={{ padding: '16px 20px', color: sys.consumo > 300 ? 'var(--yellow)' : 'var(--text)', fontWeight: 'bold' }}>{sys.consumo} MW</td>
                      <td style={{ padding: '16px 20px', color: colorAlerta, fontWeight: 'bold', letterSpacing: '1px' }}>{sys.nivelAlerta}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" style={{ padding: '32px 20px', textAlign: 'center', color: 'var(--text-dim)', fontFamily: 'Share Tech Mono, monospace' }}>
                    NO SE ENCONTRARON SISTEMAS QUE COINCIDAN CON LOS CRITERIOS.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
