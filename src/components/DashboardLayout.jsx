import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Cursor from './Cursor';
import ScanOverlay from './ScanOverlay';

export default function DashboardLayout() {
  const location = useLocation();
  const [scanKey, setScanKey] = useState(0);

  useEffect(() => {
    const handleTriggerScan = () => {
      setScanKey((prev) => prev + 1);
    };
    window.addEventListener('trigger-scan', handleTriggerScan);
    return () => window.removeEventListener('trigger-scan', handleTriggerScan);
  }, []);

  return (
    <div className="app-container">
      {/* Cursor dual cyberpunk */}
      <Cursor />

      {/* Overlay de escaneo en transiciones de ruta y gatillos manuales */}
      <ScanOverlay trigger={`${location.pathname}-${scanKey}`} />

      {/* Sidebar fija o colapsable */}
      <Sidebar />

      {/* Panel de Contenido Central */}
      <main className="main-content">
        <div className="content-container" key={location.pathname}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
