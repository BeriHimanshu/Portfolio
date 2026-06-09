import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { portfolioData } from '@/data/portfolio';
import './Contact.css';

const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
  Mail: Mail,
  Linkedin: LinkedinIcon,
  Github: GithubIcon,
};

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="contact">
      <div className="contactContainer">
        <h2 className="contactHeading">Get In Touch</h2>
        <p className="contactSub">
          I&apos;m currently looking for new opportunities in Data Science and Machine Learning.
          Feel free to reach out via any of the channels below!
        </p>
        <div className="contactLinksGroup">
          {portfolioData.socialLinks.map((link) => {
            const IconComponent = iconMap[link.icon];
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contactLinkCard"
              >
                {IconComponent ? <IconComponent size={18} /> : null}
                <span>{link.platform}</span>
              </a>
            );
          })}
        </div>
      </div>
      <footer className="footer">
        <p>
          © {currentYear} {portfolioData.name}. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
