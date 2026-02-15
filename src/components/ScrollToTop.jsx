import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Използваме Lenis, но добавяме и конзолен лог, за да видим дали изобщо "чува" скрола
  useLenis(({ scroll }) => {
    console.log("Текущ скрол:", scroll); // Ако искаш, махни коментара, за да видиш в конзолата
    if (scroll > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ако не е видим, не рендерираме нищо
  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        zIndex: 999999,
        backgroundColor: '#cd2122', // Директно червено, за да го видим
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        cursor: 'pointer'
      }}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;