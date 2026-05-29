import { useParams, Link, useNavigate } from 'react-router-dom';
import { equipo } from '../data/equipo';
import { useEffect } from 'react';
import Carrousel from '../components/Carrousel';

// SVGs for Contact Links
const SVGIcons = {
  github: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.2 11.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.6 2.2 3.5 1.6.1-.7.4-1.2.7-1.5-2.7-.3-5.6-1.3-5.6-6a4.7 4.7 0 011.2-3.2 4.3 4.3 0 01.1-3.1s1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.4 1 .2 2.1.1 3.1a4.7 4.7 0 011.2 3.2c0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M4.98 3.5C4.98 5 3.9 6 2.5 6S0 5 0 3.5 1.08 1 2.5 1 4.98 2 4.98 3.5zM.5 8h4V24h-4zM8.5 8h3.6v2.2h.1c.5-.9 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.1c0-1.7 0-3.8-2.3-3.8s-2.6 1.8-2.6 3.7V24h-4z" />
    </svg>
  ),
  behance: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M9.17 12.18c.3-.32.46-.75.46-1.28 0-.52-.14-.94-.43-1.24-.28-.3-.7-.45-1.24-.45H4.5v3.5h3.5c.57 0 1.02-.18 1.17-.53zM9.5 15c-.3-.33-.75-.5-1.36-.5H4.5v3.75H8.1c.63 0 1.1-.17 1.42-.52.32-.34.48-.78.48-1.32 0-.57-.17-1.08-.5-1.41zM14.5 10.75h3.75c-.06-.65-.27-1.15-.62-1.5-.36-.35-.83-.52-1.43-.52-.64 0-1.14.18-1.5.55-.36.36-.57.86-.2 1.47zM22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-8.25 8h5.5v1.25h-5.5V8zM11.5 16.3c0 .73-.16 1.36-.48 1.87-.32.52-.77.9-1.34 1.14-.57.25-1.22.37-1.96.37H2.75V6.32H7.5c1.1 0 1.97.28 2.6.85.62.57.93 1.35.93 2.33 0 .65-.15 1.2-.45 1.65-.3.45-.72.78-1.27.98.72.18 1.27.55 1.65 1.1.38.56.57 1.24.54 2.07zm8.8-3.8H14.4c.04.8.28 1.4.72 1.8.44.4 1 .6 1.7.6.5 0 .96-.1 1.37-.32.4-.22.67-.53.8-.94h2.1c-.3.94-.83 1.67-1.6 2.18-.76.52-1.68.78-2.74.78-1.38 0-2.47-.42-3.27-1.26-.8-.84-1.2-2-1.2-3.46 0-1.4.4-2.53 1.22-3.4.82-.85 1.9-1.28 3.23-1.28 1.38 0 2.45.47 3.22 1.4.77.93 1.1 2.18.95 3.9z" />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
};

function getTechIcon(name) {
  const normName = name.toLowerCase();

  if (normName.includes('html')) {
    return (
      <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  if (normName.includes('css')) {
    return (
      <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  }
  if (normName.includes('javascript') || normName.includes('js')) {
    return (
      <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <polyline points="9 8 12 11 9 14" />
        <line x1="13" y1="14" x2="17" y2="14" />
      </svg>
    );
  }
  if (normName.includes('python')) {
    return (
      <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    );
  }
  if (normName.includes('react')) {
    return (
      <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30,12,12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90,12,12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150,12,12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  if (normName.includes('c#') || normName.includes('csharp')) {
    return (
      <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="9" x2="20" y2="9" />
        <line x1="4" y1="15" x2="20" y2="15" />
        <line x1="9" y1="4" x2="9" y2="20" />
        <line x1="15" y1="4" x2="15" y2="20" />
      </svg>
    );
  }
  if (normName.includes('figma') || normName.includes('ux/ui') || normName.includes('diseño') || normName.includes('ux')) {
    return (
      <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    );
  }
  if (normName.includes('sql') || normName.includes('mysql') || normName.includes('sqlite')) {
    return (
      <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  if (normName.includes('looker') || normName.includes('power bi')) {
    return (
      <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    );
  }
  if (normName.includes('cloud') || normName.includes('aws') || normName.includes('linux')) {
    return (
      <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-.7c-.2-1.9-1.8-3.4-3.8-3.4-.9 0-1.8.3-2.5.9-.9-.9-2.1-1.4-3.5-1.4-2.5 0-4.5 2-4.5 4.5 0 .2 0 .4.1.6A4 4 0 004 19h14a4 4 0 000-8z" />
      </svg>
    );
  }

  // Default terminal bracket icon
  return (
    <svg className="tech-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  // Find current member
  const memberIndex = equipo.findIndex((m) => m.id === id);
  const miembro = equipo[memberIndex];

  if (!miembro) {
    return (
      <section className="hero-section" style={{ minHeight: '60vh', justifyContent: 'center' }}>
        <h1 className="hero-title">AGENTE <span className="title-accent">DESCONOCIDO</span></h1>
        <p className="hero-subtitle">CÓDIGO DE IDENTIFICACIÓN INVÁLIDO O INEXISTENTE.</p>
        <Link to="/" className="btn-outline" style={{ marginTop: '24px' }}>VOLVER AL INICIO</Link>
      </section>
    );
  }

  // Split name for neon styling
  const nameParts = miembro.nombre.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(' ');

  // Calculate sequential endless loop navigation
  const prevIndex = memberIndex > 0 ? memberIndex - 1 : equipo.length - 1;
  const nextIndex = memberIndex < equipo.length - 1 ? memberIndex + 1 : 0;
  const prevMember = equipo[prevIndex];
  const nextMember = equipo[nextIndex];

  return (
    <section style={{ animation: 'fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.45s both' }}>
      {/* BOTONES DE NAVEGACIÓN SECUENCIAL (BUCLE FINITO) */}
      <div className="profile-nav-buttons">
        <Link to={`/profile/${prevMember.id}`} className="profile-nav-btn">
          ← {prevMember.nombre.split(' ')[0]}
        </Link>
        <Link to={`/profile/${nextMember.id}`} className="profile-nav-btn">
          {nextMember.nombre.split(' ')[0]} →
        </Link>
      </div>

      {/* HERO / BIO */}
      <div className="profile-hero-layout">
        <div className="profile-about-box">
          <div className="profile-hero-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '32px' }}>
            <div className="hero-badge" style={{ display: 'inline-block', marginBottom: '16px' }}>
              {miembro.profileBadge}
            </div>

            <h1 className="profile-hero-title" style={{ margin: '0 0 8px 0', textAlign: 'center' }}>
              {firstName} <span className="title-accent" style={{ display: 'inline-block' }}>{lastName}</span>
            </h1>
            <p className="profile-hero-subtitle" style={{ margin: 0, textAlign: 'center' }}>{miembro.subtitulo}</p>
          </div>

          <div className="profile-about-label">// REGISTRO BIO</div>
          <div className="profile-about-text">
            {miembro.sobreMi.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ 
                __html: paragraph.replace(/<span>(.*?)<\/span>/g, '<span style="font-family: \'Share Tech Mono\', monospace; color: var(--cyan);">$1</span>') 
              }} />
            ))}
          </div>

          {/* ENLACES DE CONTACTO INTEGRADOS DIRECTAMENTE EN EL CUADRO DE BIO */}
          <div className="profile-about-contact" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '24px' }}>
            {miembro.contacto.map((c) => (
              <a
                key={c.tipo}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                {SVGIcons[c.tipo]}
                <span>{c.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* FOTO */}
        <div className="profile-photo-col">
          <div className="profile-photo-frame">
            <img src={`/${miembro.foto}`} alt={miembro.nombre} />
          </div>
        </div>
      </div>

      {/* SECCIÓN HABILIDADES */}
      <section className="crew-section">
        <div className="section-header">
          <h2>// HABILIDADES Y COMPETENCIAS</h2>
          <div className="header-line"></div>
        </div>
        <div className="skills-container">
          {miembro.habilidades.tecnologias.map((skill) => (
            <div key={skill.nombre} className="skill-row">
              <div className="skill-info">
                <span className="skill-name">
                  {getTechIcon(skill.nombre)}
                  {skill.nombre}
                </span>
                <span className="skill-percentage">{skill.porcentaje}%</span>
              </div>
              <div className="skill-progress-bar">
                <div className="skill-progress-fill" style={{ width: `${skill.porcentaje}%` }}></div>
              </div>
            </div>
          ))}
          {miembro.habilidades.enAprendizaje.map((skill) => (
            <div key={skill.nombre} className="skill-row learning-row">
              <div className="skill-info">
                <span className="skill-name">
                  {getTechIcon(skill.nombre)}
                  {skill.nombre} <span className="skill-learning-tag">// EN APRENDIZAJE</span>
                </span>
                <span className="skill-percentage">{skill.porcentaje}%</span>
              </div>
              <div className="skill-progress-bar">
                <div className="skill-progress-fill learning" style={{ width: `${skill.porcentaje}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN PROYECTOS */}
      <section className="crew-section">
        <div className="section-header">
          <h2>// PROYECTOS</h2>
          <div className="header-line"></div>
        </div>
        <Carrousel proyectos={miembro.proyectos} />
      </section>

      {/* SECCIÓN HOBBIES GENERALES */}
      <section className="crew-section">
        <div className="section-header">
          <h2>// GALERÍA DE HOBBIES</h2>
          <div className="header-line"></div>
        </div>

        {miembro.hobbies.map((category) => (
          <div key={category.categoria} className="hobby-category">
            <div className="hobby-category-title">{category.categoria}</div>
            <div className="hobby-cards-row">
              {category.items.map((item, j) => (
                <div key={item.titulo + j} className="hobby-card">
                  <div className="hobby-card-title">{item.titulo}</div>
                  <div className="hobby-card-img">
                    <img
                      src={`/${item.imagen}`}
                      alt={item.titulo}
                      style={item.contain ? { objectFit: 'contain' } : {}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
