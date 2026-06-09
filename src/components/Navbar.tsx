'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="logo">
          {portfolioData.name}
        </a>

        {/* Desktop Links */}
        <div className="navLinks">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleScroll(e, section.id)}
              className="navLink"
            >
              {section.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="menuButton"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        <div className={`mobileMenu ${isOpen ? 'open' : ''}`}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleScroll(e, section.id)}
              className="navLink"
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
