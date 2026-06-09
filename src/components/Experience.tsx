import { portfolioData } from '@/data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <h2 className="sectionTitle">
        <span className="sectionTitleText">Experience</span>
      </h2>
      <div className="timeline">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="timelineItem">
            <div className="timelineDot" />
            <div className="timelineCard">
              <div className="timelineHeader">
                <div>
                  <h3 className="roleTitle">{exp.role}</h3>
                  <div className="orgLocation">
                    {exp.organization} — {exp.location}
                  </div>
                </div>
                <span className="durationBadge">{exp.duration}</span>
              </div>
              <ul className="highlightsList">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="highlightItem">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
