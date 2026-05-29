import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { equipo } from '../data/equipo';

// SFX Helper (Desactivado)
const triggerSFX = () => { };

export default function Home() {
  const navigate = useNavigate();
  const [typewriterText, setTypewriterText] = useState('');
  const [stats, setStats] = useState({ tripulantes: 0, tecnologias: 0, mision: 0 });
  const statsRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const phrases = [
      'Construyendo el futuro, una línea a la vez.',
      'React · CSS · React Router.',
      'Trabajo Práctico 2 — Sistema Reactivo.'
    ];
    let pIdx = 0;
    let cIdx = 0;
    let deleting = false;
    let timeoutId = null;

    const type = () => {
      const phrase = phrases[pIdx];
      if (!deleting) {
        setTypewriterText(phrase.slice(0, ++cIdx));
        if (cIdx === phrase.length) {
          deleting = true;
          timeoutId = setTimeout(type, 2000);
          return;
        }
      } else {
        setTypewriterText(phrase.slice(0, --cIdx));
        if (cIdx === 0) {
          deleting = false;
          pIdx = (pIdx + 1) % phrases.length;
        }
      }
      timeoutId = setTimeout(type, deleting ? 38 : 65);
    };

    timeoutId = setTimeout(type, 600);
    return () => clearTimeout(timeoutId);
  }, []);

  // Stats counter animation on intersection
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const targets = { tripulantes: 4, tecnologias: 10, mision: 2 }; // TP2 Misión = 2
    let animationStarted = false;

    const animate = () => {
      const duration = 1200;
      const start = performance.now();

      const step = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        setStats({
          tripulantes: Math.round(ease * targets.tripulantes),
          tecnologias: Math.round(ease * targets.tecnologias),
          mision: Math.round(ease * targets.mision)
        });
        if (t < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted) {
          animationStarted = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleCardClick = (e, id) => {
    triggerSFX(e, 'ACCESS!');
    navigate(`/profile/${id}`);
  };

  const handleScanClick = () => {
    window.dispatchEvent(new Event('trigger-scan'));
  };

  return (
    <>
      {/* SECCIÓN HERO */}
      <section className="hero-section">
        <div className="hero-badge">IFTS N°29 // TP2 // 2026</div>

        <h1 className="hero-title">
          DYNAMIS <span className="title-accent">CREW</span>
        </h1>
        <p className="hero-subtitle">MIGRACIÓN A REACT COMPLETADA — CORE ACTIVO</p>

        <div className="typewriter-wrap">
          <span id="typewriter">{typewriterText}</span>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div className="stat">
            <span className="stat-number">{stats.tripulantes}</span>
            <span className="stat-label">Tripulantes</span>
          </div>
          <div className="stat">
            <span className="stat-number">{stats.tecnologias}</span>
            <span className="stat-label">Tecnologías</span>
          </div>
          <div className="stat">
            <span className="stat-number">{stats.mision}</span>
            <span className="stat-label">Misión</span>
          </div>
        </div>

        <button className="btn-scan" onClick={handleScanClick}>
          ▶ INICIAR ESCANEO
        </button>
      </section>

      {/* SECCIÓN TRIPULANTES */}
      <section className="crew-section" id="crew-section">
        <div className="section-header smash-in" style={{ animationDelay: '0.8s' }}>
          <h2>// TRIPULANTES REGISTRADOS</h2>
          <div className="header-line"></div>
          <span className="header-count">{equipo.length} AGENTES EN LÍNEA</span>
        </div>

        <div className="crew-grid">
          {equipo.map((miembro, i) => (
            <div
              key={miembro.id}
              className="profile-card smash-in"
              style={{ animationDelay: '1.0s' }}
              onClick={(e) => handleCardClick(e, miembro.id)}
            >
              <div className="profile-card-name">{miembro.nombre}</div>
              <div className="profile-card-photo">
                <img src={miembro.foto} alt={miembro.nombre} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN MISIÓN */}
      <section className="mission-section">
        <div className="section-header">
          <h2>// BITÁCORA DE MISIÓN</h2>
          <div className="header-line"></div>
        </div>

        <div className="mission-grid">
          <div className="mission-text">
            <p>
              Somos <span>DYNAMIS CREW</span>, un equipo de estudiantes del IFTS N°29 unidos para desarrollar este proyecto web como parte del <span>Trabajo Práctico 2</span>.
            </p>
            <p>
              Nuestra misión en esta fase: migrar la arquitectura monolítica original a una estructura modular robusta basada en <span>React</span> y <span>React Router</span>, introduciendo una Sidebar lateral como eje de control espacial de la SPA.
            </p>
            <p>
              Stack tecnológico: <span>Vite</span> · <span>React 19</span> · <span>React Router 7</span> · <span>CSS3</span> de alto rendimiento.
            </p>
          </div>

          <div className="terminal-box">
            <div className="term-titlebar">
              <div className="term-dot" style={{ backgroundColor: '#ff5f57' }}></div>
              <div className="term-dot" style={{ backgroundColor: '#ffbd2e' }}></div>
              <div className="term-dot" style={{ backgroundColor: '#28c940' }}></div>
              <span className="term-title-text">dynamis ~ status</span>
            </div>
            <div className="term-body">
              <div>
                <span className="t-prompt">$</span>
                <span className="t-cmd">crew --status</span>
              </div>
              <div className="t-out">▸ EQUIPO: DYNAMIS CREW</div>
              <div className="t-out">▸ INTEGRANTES: 4</div>
              <div className="t-out">▸ FRAMEWORK: REACT + VITE</div>
              <div className="t-out">▸ NAVEGACIÓN: SIDEBAR DASHBOARD (OK)</div>
              <div>
                <span className="t-prompt">$</span>
                <span className="t-cmd">deploy --target react-spa</span>
              </div>
              <div className="t-ok">▸ BUILD COMPONENTES: OK</div>
              <div className="t-ok">▸ RUTAS SPA NÓMADAS: ACTIVAS ✓</div>
              <div>
                <span className="t-prompt">$</span> <span className="t-cursor">▋</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN PREVIEW BITÁCORA */}
      <section className="bitacora-section">
        <div className="section-header">
          <h2>// REGISTRO DE TRABAJO</h2>
          <div className="header-line"></div>
        </div>

        <div className="bitacora-preview">
          <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '.82rem', letterSpacing: '6px', color: 'var(--cyan)' }}>
            // DETALLE DE DESARROLLO
          </h2>
          <p>
            Cada decisión de diseño, dificultad y cambio está documentado en nuestra bitácora del sistema. Transparencia total del proceso de migración.
          </p>
          <button className="btn-outline" onClick={(e) => { triggerSFX(e, 'CLICK!'); navigate('/bitacora'); }}>
            VER BITÁCORA →
          </button>
        </div>
      </section>
    </>
  );
}
