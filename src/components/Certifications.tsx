import { Award } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2 className="sectionTitle">
        <span className="sectionTitleText">Certifications</span>
      </h2>
      <div className="certificationsGrid">
        {portfolioData.certifications.map((cert, index) => (
          <div key={index} className="certificationCard">
            <div className="certIconHeader">
              <div className="certIconContainer">
                <Award size={22} />
              </div>
              <div>
                <span className="certIssuer">{cert.issuer}</span>
                <h3 className="certName">{cert.name}</h3>
              </div>
            </div>
            <p className="certDescription">{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
