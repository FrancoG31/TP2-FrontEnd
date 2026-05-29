import { useState, useEffect } from 'react';

export default function ScanOverlay({ trigger }) {
  const [active, setActive] = useState(false);
  const [prevTrigger, setPrevTrigger] = useState(trigger);

  // Sincronización síncrona en la fase de render para eliminar el retraso de useEffect
  if (trigger !== prevTrigger) {
    setPrevTrigger(trigger);
    setActive(true);
  }

  useEffect(() => {
    if (!active) return;
    const timer = setTimeout(() => {
      setActive(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, [active]);

  if (!active) return null;

  return (
    <div id="scan-overlay" className="active">
      <div id="scan-line"></div>
    </div>
  );
}
