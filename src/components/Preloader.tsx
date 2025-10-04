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
      <div className="loading-brand">
        <img 
          src="https://lucky-jelly-01a0f7.netlify.app/logo.png" 
          alt="APEX AI"
          className="loading-logo"
        />
        <div className="loading-bar">
          <div 
            className="fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="loading-percent text-[hsl(var(--text-muted))]">{progress}%</p>
      </div>
    </div>
  );
};
