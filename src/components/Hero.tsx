'use client';

import { Mail, Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { portfolioData } from '@/data/portfolio';
import './Hero.css';

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  Mail: Mail,
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
};

export default function Hero() {
  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="heroGlow" />
      <div className="heroContent">
        <h1 className="name">
          {(() => {
            const parts = portfolioData.name.trim().split(' ');
            const last = parts.pop();
            const first = parts.join(' ');
            return (
              <>
                {first} <span className="nameItalic">{last}</span>
              </>
            );
          })()}
        </h1>
        <p className="tagline">{portfolioData.tagline}</p>

        {/* Social Icons */}
        <div className="socialGroup">
          {portfolioData.socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon];
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="socialIconLink"
                aria-label={link.platform}
              >
                {IconComponent ? <IconComponent size={20} /> : null}
              </a>
            );
          })}
        </div>

        {/* Call to Actions */}
        <div className="ctaGroup">
          <a
            href={portfolioData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resumeButton"
            download="Himanshu_Resume.pdf"
          >
            <Download size={18} />
            Download Resume
          </a>
          <button onClick={handleContactClick} className="contactButton">
            Get In Touch
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
