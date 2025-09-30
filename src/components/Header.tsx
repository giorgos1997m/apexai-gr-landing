import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  locale: 'gr' | 'en';
}

export const Header = ({ locale }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    gr: {
      nav: [
        { label: 'Πώς δουλεύει', href: '#steps' },
        { label: 'Δοκίμασέ το', href: '#try-it' },
        { label: 'Υπηρεσίες', href: '#services' },
        { label: 'Αποτελέσματα', href: '#results' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'Ξεκινήστε 14ήμερη Δοκιμή',
    },
    en: {
      nav: [
        { label: 'How it Works', href: '#steps' },
        { label: 'Try it', href: '#try-it' },
        { label: 'Services', href: '#services' },
        { label: 'Results', href: '#results' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'Start 14-day Trial',
    },
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const currentRoute = locale === 'gr' ? '/' : '/en';
    if (location.pathname === currentRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(currentRoute);
    }
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[hsl(var(--bg))]/80 backdrop-blur-lg border-b border-[hsl(var(--stroke))]' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="#" onClick={handleLogoClick} className="site-logo">
              <img 
                src="https://lucky-jelly-01a0f7.netlify.app/logo.png" 
                alt="APEX AI"
                className="h-[var(--desktop-logo-h)]"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {content[locale].nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent-cyan))] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1 bg-[hsl(var(--card))] rounded-full p-1">
                <button
                  onClick={() => navigate('/')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    locale === 'gr'
                      ? 'bg-[hsl(var(--accent-cyan))] text-[hsl(var(--bg))]'
                      : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]'
                  }`}
                >
                  GR
                </button>
                <button
                  onClick={() => navigate('/en')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    locale === 'en'
                      ? 'bg-[hsl(var(--accent-cyan))] text-[hsl(var(--bg))]'
                      : 'text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text))]'
                  }`}
                >
                  EN
                </button>
              </div>
              
              <Button className="bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] hover:opacity-90 glow-cyan-sm">
                {content[locale].cta}
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[hsl(var(--text))]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[hsl(var(--bg))] lg:hidden overflow-y-auto pt-20">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col gap-6">
              {content[locale].nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-2xl text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent-cyan))] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="mt-8 flex items-center gap-2">
                <button
                  onClick={() => {
                    navigate('/');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    locale === 'gr'
                      ? 'bg-[hsl(var(--accent-cyan))] text-[hsl(var(--bg))]'
                      : 'bg-[hsl(var(--card))] text-[hsl(var(--text-muted))]'
                  }`}
                >
                  GR
                </button>
                <button
                  onClick={() => {
                    navigate('/en');
                    setMobileMenuOpen(false);
                  }}
                  className={`flex-1 px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    locale === 'en'
                      ? 'bg-[hsl(var(--accent-cyan))] text-[hsl(var(--bg))]'
                      : 'bg-[hsl(var(--card))] text-[hsl(var(--text-muted))]'
                  }`}
                >
                  EN
                </button>
              </div>

              <Button className="mt-4 bg-gradient-to-r from-[hsl(var(--accent-cyan))] to-[hsl(var(--accent-blue))] text-[hsl(var(--bg))] hover:opacity-90 glow-cyan-sm w-full">
                {content[locale].cta}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
