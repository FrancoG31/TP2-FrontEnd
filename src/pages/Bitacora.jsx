import { bitacoraData } from '../data/bitacora';

export default function Bitacora() {
  const todasLasEntradas = bitacoraData.flatMap((cat) =>
    cat.entradas.map((entry) => ({
      ...entry,
      categoria: cat.categoria,
      catLabel: cat.catLabel
    }))
  );

  const totalEntradas = todasLasEntradas.length;

  return (
    <section className="bitacora-page">
      <div className="section-header">
        <h2>// BITÁCORA DE MISIÓN</h2>
        <div className="header-line"></div>
        <span className="header-count">{totalEntradas} REGISTROS ACTIVOS</span>
      </div>

      <div className="log-list">
        {todasLasEntradas.map((entry, i) => {
          const delay = i * 0.07;
          return (
            <div
              key={entry.titulo + i}
              className="log-entry smash-in"
              style={{ animationDelay: `${delay}s` }}
            >
              <div className="log-entry-header">
                <span className="log-cat-label">// {entry.catLabel}</span>
                <span className="log-date">{entry.fecha}</span>
              </div>
              <div className="log-title">{entry.titulo}</div>
              
              {entry.problema ? (
                <>
                  <div className="log-problem">
                    <span className="log-label">PROBLEMA:</span> {entry.problema}
                  </div>
                  <div className="log-solution">
                    <span className="log-label">SOLUCIÓN:</span> {entry.solucion}
                  </div>
                </>
              ) : (
                <p className="log-body">{entry.cuerpo}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
