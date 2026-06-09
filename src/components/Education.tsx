import { GraduationCap } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education">
      <h2 className="sectionTitle">
        <span className="sectionTitleText">Education</span>
      </h2>
      <div className="educationGrid">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="educationCard">
            <div className="educationIconContainer">
              <GraduationCap size={28} />
            </div>
            <div className="educationInfo">
              <div>
                <h3 className="degreeTitle">{edu.degree}</h3>
                <div className="institutionName">{edu.institution}</div>
              </div>
              <div className="educationMeta">
                <span>{edu.location}</span>
                <span>{edu.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
