import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface FooterProps {
  locale: 'gr' | 'en';
}

export const Footer = ({ locale }: FooterProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const content = {
    gr: {
      tagline: 'Αυτοματισμοί AI για επαγγελματίες που θέλουν να εστιάσουν στην επιχείρησή τους',
      navigation: 'Πλοήγηση',
      contact: 'Επικοινωνία',
      follow: 'Ακολουθήστε μας',
      nav: [
        { label: 'Πώς δουλεύει', href: '#steps' },
        { label: 'Υπηρεσίες', href: '#services' },
        { label: 'Αποτελέσματα', href: '#results' },
        { label: 'FAQ', href: '#faq' },
      ],
      email: 'hello@apexai.gr',
      phone: '+30 210 123 4567',
      address: 'Αθήνα, Ελλάδα',
    },
    en: {
      tagline: 'AI automations for professionals who want to focus on their business',
      navigation: 'Navigation',
      contact: 'Contact',
      follow: 'Follow Us',
      nav: [
        { label: 'How it Works', href: '#steps' },
        { label: 'Services', href: '#services' },
        { label: 'Results', href: '#results' },
        { label: 'FAQ', href: '#faq' },
      ],
      email: 'hello@apexai.gr',
      phone: '+30 210 123 4567',
      address: 'Athens, Greece',
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
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[hsl(var(--bg-secondary))] border-t border-[hsl(var(--stroke))] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <a href="#" onClick={handleLogoClick} className="inline-block mb-4">
              <img 
                src="https://lucky-jelly-01a0f7.netlify.app/logo.png" 
                alt="APEX AI"
                className="h-12"
              />
            </a>
            <p className="text-[hsl(var(--text-muted))]">{content[locale].tagline}</p>
          </div>

          <div>
            <h4 className="font-bold text-[hsl(var(--text))] mb-4">{content[locale].navigation}</h4>
            <ul className="space-y-2">
              {content[locale].nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent-cyan))] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[hsl(var(--text))] mb-4">{content[locale].contact}</h4>
            <ul className="space-y-2 text-[hsl(var(--text-muted))] mb-6">
              <li>{content[locale].email}</li>
              <li>{content[locale].phone}</li>
              <li>{content[locale].address}</li>
            </ul>
            
            <h4 className="font-bold text-[hsl(var(--text))] mb-4">{content[locale].follow}</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/apexai_gr/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent-cyan))] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent-cyan))] transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent-cyan))] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--accent-cyan))] transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[hsl(var(--stroke))] pt-8 text-center text-[hsl(var(--text-muted))] text-sm">
          © 2025 APEX AI. {locale === 'gr' ? 'Όλα τα δικαιώματα κατοχυρωμένα.' : 'All rights reserved.'}
        </div>
      </div>
    </footer>
  );
};
