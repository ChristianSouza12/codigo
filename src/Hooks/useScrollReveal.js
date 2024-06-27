import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.reveal', {
      delay: 300,
      distance: '20px',
      origin: 'bottom',
      duration: 800,
      reset: true,
    });

    
    return () => sr.destroy();
  }, []);
};

export default useScrollReveal;
