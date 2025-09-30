import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--bg))] transition-opacity duration-500"
      style={{ opacity: progress >= 100 ? 0 : 1 }}
    >
      <div className="text-center">
        <img 
          src="https://lucky-jelly-01a0f7.netlify.app/logo.png" 
          alt="APEX AI"
          className="h-16 mx-auto mb-8"
        />
        <div className="w-full max-w-[300px] h-1 bg-[hsl(var(--stroke))] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] transition-all duration-300 glow-cyan-sm"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-[hsl(var(--text-muted))] text-sm">{progress}%</p>
      </div>
    </div>
  );
};
