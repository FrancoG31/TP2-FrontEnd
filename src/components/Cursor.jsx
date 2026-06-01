import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e) => {
      const interactive = e.target.closest('a, button, .crew-card, .carousel-arrow, .nav-btn, .sidebar-link');
      
      if (ringRef.current) {
        if (interactive) {
          ringRef.current.style.width = '54px';
          ringRef.current.style.height = '54px';
          ringRef.current.style.opacity = '0.9';
        } else {
          ringRef.current.style.width = '34px';
          ringRef.current.style.height = '34px';
          ringRef.current.style.opacity = '0.55';
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []); 
  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-ring" ref={ringRef}></div>
    </>
  );
}