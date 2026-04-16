import { useEffect } from 'react';
import { Wrench } from 'lucide-react';

export default function MaintenancePage() {
  useEffect(() => {
    const previous = document.title;
    document.title = 'UNICORE — Under maintenance';
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-16 bg-gradient-to-b from-design-bg to-white text-center">
      <img
        src="/unicore-logo.png"
        alt="UNICORE"
        className="h-12 sm:h-14 w-auto object-contain mb-10"
      />
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-unicore-accent/10 text-unicore-accent mb-6">
        <Wrench className="w-7 h-7" aria-hidden />
      </div>
      <h1 className="text-2xl sm:text-3xl font-semibold text-design-dark tracking-tight mb-3">
        We are under maintenance
      </h1>
      <p className="text-design-mid text-base sm:text-lg max-w-md leading-relaxed">
        UNICORE India is temporarily unavailable while we improve the experience. Please check back soon.
      </p>
    </div>
  );
}
