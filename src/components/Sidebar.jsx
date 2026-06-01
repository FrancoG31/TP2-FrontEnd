import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { equipo } from '../data/equipo';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* HEADER MÓVIL (Solo visible en pantallas pequeñas) */}
      <div className="mobile-header">
        <Link to="/" className="nav-logo" onClick={closeSidebar}>
          DYNAMIS
        </Link>
        <button className="hamburger-btn" onClick={toggleSidebar} aria-label="Toggle Menu">
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </button>
      </div>

      {/* OVERLAY DEL MENU MÓVIL (Cierra al hacer click fuera) */}
      {isOpen && <div className="sidebar-backdrop" onClick={closeSidebar}></div>}

      {/* SIDEBAR FIXED */}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <Link to="/" className="nav-logo" onClick={closeSidebar}>
              <div className="sidebar-logo-container">
                <img src="/img/logo.png" alt="Dynamis Logo" className="sidebar-logo" />
              </div>
              DYNAMIS
            </Link>
          </div>

          <nav className="sidebar-nav">
            <div className="sidebar-group">
              <div className="sidebar-group-title">// TERMINAL PRINCIPAL</div>
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                onClick={closeSidebar}
              >
                <span className="link-bullet">▶</span> INICIO
              </NavLink>
              <NavLink 
                to="/bitacora" 
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                onClick={closeSidebar}
              >
                <span className="link-bullet">▶</span> BITÁCORA
              </NavLink>
              <NavLink 
                to="/galeria" 
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                onClick={closeSidebar}
              >
                <span className="link-bullet">▶</span> GALERÍA
              </NavLink>
              <NavLink 
                to="/explorador-datos" 
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                onClick={closeSidebar}
              >
                <span className="link-bullet">▶</span> EXPLORADOR DE DATOS
              </NavLink>
              <NavLink 
                to="/api" 
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                onClick={closeSidebar}
              >
                <span className="link-bullet">▶</span> BASE DE DATOS EXTERNA
              </NavLink>
              <NavLink 
                to="/arbol-componentes" 
                className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                onClick={closeSidebar}
              >
                <span className="link-bullet">▶</span> ARBOL DE COMPONENTES
              </NavLink>
            </div>

            <div className="sidebar-group">
              <div className="sidebar-group-title">// TRIPULACIÓN (CREW)</div>
              {equipo.map((miembro) => (
                <NavLink
                  key={miembro.id}
                  to={`/profile/${miembro.id}`}
                  className={({ isActive }) => `sidebar-link sub-link ${isActive ? 'active' : ''}`}
                  onClick={closeSidebar}
                >
                  <span className="link-bullet">▸</span> {miembro.nombre}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="nav-status">
            <div className="status-dot"></div>
            <span>SISTEMA NÓMADA ACTIVO</span>
          </div>
          <div className="sidebar-version">
            IFTS N°29 // TP2 // 2026
          </div>
        </div>
      </aside>
    </>
  );
}
