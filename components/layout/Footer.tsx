// components/layout/Footer.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);


  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    } else {
      window.location.href = `/#${id}`;
    }
    closeMenu();
  };


  return (
    <footer className="bg-[var(--primary)] text-[var(--surface)] pt-24 pb-12 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-20">
          <FadeIn className="md:col-span-2">
            <Link href="home" className="font-editorial text-4xl font-semibold tracking-tight text-white mb-6 block">
              Housing Repairs Team
            </Link>
            <p className="text-[var(--border-dark)] max-w-sm mb-6 font-light leading-relaxed">
              Advocating for your right to safe and secure living standards. Professional housing disrepair claims and support.
            </p>

            {/* Social & Contact Items with Authentic Official Brand SVGs */}
            <div className="flex flex-col space-y-3.5 text-sm text-[var(--border-dark)] font-light pt-2">


              {/* WhatsApp Official Glyph */}
              <a href="https://wa.me/447862600023" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                </div>
                <span className="font-medium text-white/90">+44 7862 600023</span>
              </a>


              {/* Instagram Official Glyph */}
              <a href="https://instagram.com/housingrepairsteam.uk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <span className="font-medium text-white/90">@housingrepairsteam</span>
              </a>

              {/* Facebook Official Glyph */}
              <a href="https://www.facebook.com/share/1EzeP87Jbi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </div>
                <span className="font-medium text-white/90">Housing Repairs Team </span>
              </a>



              {/* Email Official Glyph */}
              <a href="mailto:info@housingrepairsteam.co.uk" className="flex items-center gap-3.5 hover:text-white transition-colors group">
                <div className="w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center text-white shadow-md transform group-hover:scale-105 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <span className="font-medium text-white/90">info@housingrepairsteam.co.uk</span>
              </a>

            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h4 className="font-editorial text-xl text-white mb-6 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-4 text-sm text-[var(--border-dark)] font-light">
              <li><Link href="/#services" onClick={(e) => handleAnchorClick(e, "services")}>Damp & Mould</Link></li>
              <li><Link href="/#services" onClick={(e) => handleAnchorClick(e, "services")} className="hover:text-[var(--accent)] transition-colors duration-300">Structural Issues</Link></li>
              <li><Link href="/#services" onClick={(e) => handleAnchorClick(e, "services")} className="hover:text-[var(--accent)] transition-colors duration-300">Plumbing & Heating</Link></li>
              <li><Link href="/#services" onClick={(e) => handleAnchorClick(e, "services")} className="hover:text-[var(--accent)] transition-colors duration-300">Roofing & Gutters</Link></li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h4 className="font-editorial text-xl text-white mb-6 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-4 text-sm text-[var(--border-dark)] font-light">
              <li><Link href="/#about" onClick={(e) => handleAnchorClick(e, "about")} className="hover:text-[var(--accent)] transition-colors duration-300">About Us</Link></li>
              <li><Link href="/#process" onClick={(e) => handleAnchorClick(e, "process")} className="hover:text-[var(--accent)] transition-colors duration-300">The Process</Link></li>
              <li><Link href="/#contact" onClick={(e) => handleAnchorClick(e, "contact")} className="hover:text-[var(--accent)] transition-colors duration-300">Contact</Link></li>
              <li><Link href="/claim" className="hover:text-[var(--accent)] transition-colors duration-300">Start Claim</Link></li>
            </ul>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[var(--foreground-muted)] font-light">
            <p>© {currentYear} Housing Repairs Team. All rights reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
}