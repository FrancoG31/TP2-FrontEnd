import { useState } from 'react';
import { estructuraApp } from '../data/arbolComponentes';

// Sub-componente recursivo para renderizar nodos del árbol
function NodoComponente({ nodo }) {
  const [expandido, setExpandido] = useState(true);
  const [mostrarDetalle, setMostrarDetalle] = useState(false);

  const tieneHijos = nodo.hijos && nodo.hijos.length > 0;

  let colorTipo = 'var(--cyan)';
  if (nodo.tipo === 'Layout') colorTipo = 'var(--yellow)';
  if (nodo.tipo === 'Página') colorTipo = 'var(--green)';
  if (nodo.tipo === 'Enrutador / Principal') colorTipo = 'var(--cyan)';

  return (
    <div style={{ marginLeft: '24px', position: 'relative', marginTop: '12px' }}>
      
      {/* LÍNEAS CONECTORAS DEL ÁRBOL EN CSS */}
      <div 
        style={{
          position: 'absolute',
          left: '-14px',
          top: '-12px',
          width: '2px',
          height: tieneHijos && expandido ? 'calc(100% + 12px)' : '24px',
          background: 'var(--cyan-border)'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          left: '-14px',
          top: '12px',
          width: '14px',
          height: '2px',
          background: 'var(--cyan-border)'
        }}
      />

      <div 
        style={{ 
          background: 'var(--bg2)', 
          border: `1px solid ${mostrarDetalle ? 'var(--cyan)' : 'var(--cyan-border)'}`,
          borderRadius: '4px',
          padding: '12px 16px',
          display: 'inline-flex',
          flexDirection: 'column',
          minWidth: '280px',
          maxWidth: '480px',
          transition: 'all 0.2s',
          cursor: 'pointer',
          boxShadow: mostrarDetalle ? '0 0 14px rgba(0, 245, 255, 0.1)' : 'none'
        }}
        onClick={(e) => {
          e.stopPropagation();
          setMostrarDetalle(!mostrarDetalle);
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {tieneHijos && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandido(!expandido);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--cyan)',
                  cursor: 'pointer',
                  fontSize: '0.65rem',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Share Tech Mono, monospace'
                }}
              >
                {expandido ? '▼' : '►'}
              </button>
            )}
            <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '0.82rem', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>
              {nodo.nombre}
            </span>
          </div>

          <span 
            className="log-prefix" 
            style={{ 
              fontSize: '0.55rem', 
              color: colorTipo, 
              borderColor: `${colorTipo}44`, 
              backgroundColor: `${colorTipo}0f`,
              letterSpacing: '1px'
            }}
          >
            {nodo.tipo}
          </span>
        </div>

        {/* DETALLE EXPANDIDO AL HACER CLICK EN EL NODO */}
        {mostrarDetalle && (
          <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px dashed var(--cyan-border)', fontFamily: 'Share Tech Mono, monospace' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text)', lineHeight: '1.4', marginBottom: '8px', textTransform: 'none', fontFamily: 'Exo 2, sans-serif' }}>
              {nodo.descripcion}
            </div>
            <div style={{ fontSize: '0.62rem', color: 'var(--text-dim)', letterSpacing: '1px' }}>
              UBICACIÓN: <span style={{ color: 'var(--cyan)' }}>{nodo.ruta}</span>
            </div>
          </div>
        )}
      </div>

      {/* HIJOS RECURSIVOS */}
      {tieneHijos && expandido && (
        <div style={{ marginTop: '4px' }}>
          {nodo.hijos.map((hijo, idx) => (
            <NodoComponente key={idx} nodo={hijo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ArbolComponentes() {
  return (
    <>
      <section className="smash-in">
        <div className="section-header">
          <h2>// ARBOL DE COMPONENTES</h2>
          <div className="header-line"></div>
          <span className="header-count">ESTRUCTURA SPA</span>
        </div>

        <p className="hero-subtitle" style={{ textAlign: 'left', marginBottom: '32px' }}>
          MAPA DE JERARQUÍA DE COMPONENTES DE LA SPA DYNAMIS NEXUS. HAGA CLICK EN CUALQUIER COMPONENTE PARA VER SU DETALLE.
        </p>

        {/* CONTENEDOR DEL ÁRBOL */}
        <div 
          className="terminal-box" 
          style={{ 
            padding: '24px 24px 36px 4px', 
            background: 'rgba(9, 13, 26, 0.4)', 
            overflowX: 'auto',
            borderStyle: 'dashed'
          }}
        >
          <NodoComponente nodo={estructuraApp} />
        </div>
      </section>
    </>
  );
}
