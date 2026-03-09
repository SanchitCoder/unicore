import { useEffect, useRef, ReactNode } from 'react';
import { animate } from 'animejs';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    animate(el, {
      opacity: { to: 1, from: 0 },
      translateY: { to: 0, from: 12 },
      duration: 280,
      ease: 'out-cubic',
    });
  }, []);

  return (
    <div ref={ref} className="min-h-full w-full">
      {children}
    </div>
  );
}
