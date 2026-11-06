"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Smooth scroll handler to fix repeat anchor clicks (e.g. FAQ issue)
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
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 z-50 group">

            <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--primary)] flex items-center justify-center text-[var(--accent)] transition-transform duration-300 group-hover:scale-105">
              <Image src="/logo.avif" alt="Housing Repairs Team Logo" width={40} height={40} className="object-contain" />
            </div>


            <span className="font-editorial text-2xl font-semibold tracking-tight text-[var(--primary)]">
              Housing Repairs Team
            </span>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--foreground-soft)]">
            <Link href="/#services" onClick={(e) => handleAnchorClick(e, "services")} className="hover:text-[var(--accent)] transition-colors duration-300">Services</Link>
            <Link href="/#process" onClick={(e) => handleAnchorClick(e, "process")} className="hover:text-[var(--accent)] transition-colors duration-300">Our Process</Link>
            <Link href="/#about" onClick={(e) => handleAnchorClick(e, "about")} className="hover:text-[var(--accent)] transition-colors duration-300">About Us</Link>
            <Link href="/#contact" onClick={(e) => handleAnchorClick(e, "contact")} className="hover:text-[var(--accent)] transition-colors duration-300">Contact</Link>
            <Link href="/consultation" className="hover:text-[var(--accent)] transition-colors duration-300 font-semibold text-[var(--primary)]">Free Consultation</Link>
            <Link href="/#faqs" onClick={(e) => handleAnchorClick(e, "faqs")} className="hover:text-[var(--accent)] transition-colors duration-300">FAQs</Link>
          </nav>

          {/* Primary conversion button */}
          <div className="hidden md:block">
            <Button
              href="/claim"
              variant="primary"
              className="bg-[var(--accent)] hover:bg-[#8F7455] text-white shadow-md shadow-[var(--accent)]/20"
            >
              Start a Claim
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-[var(--foreground)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-0 left-0 h-screen w-full bg-[var(--surface)] z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="flex flex-col gap-6 text-xl font-editorial text-[var(--primary)]">
          <Link href="/#services" onClick={(e) => handleAnchorClick(e, "services")}>Services</Link>
          <Link href="/#process" onClick={(e) => handleAnchorClick(e, "process")}>Our Process</Link>
          <Link href="/#about" onClick={(e) => handleAnchorClick(e, "about")}>About Us</Link>
          <Link href="/#contact" onClick={(e) => handleAnchorClick(e, "contact")}>Contact</Link>
          <Link href="/consultation" onClick={closeMenu} className="text-[var(--accent)]">Free Consultation</Link>
          <Link href="/#faqs" onClick={(e) => handleAnchorClick(e, "faqs")}>FAQs</Link>
        </nav>

        {/* Mobile conversion button */}
        <div className="mt-auto mb-10 flex flex-col gap-4">
          <Button
            href="/claim"
            variant="primary"
            className="w-full bg-[var(--accent)] hover:bg-[#8F7455] text-white shadow-md shadow-[var(--accent)]/20"
          >
            Start a Claim
          </Button>
        </div>
      </div>
    </header>
  );
}