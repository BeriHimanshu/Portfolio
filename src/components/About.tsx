import { portfolioData } from '@/data/portfolio';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="sectionTitle">
        <span className="sectionTitleText">About Me</span>
      </h2>
      <div className="aboutContent">
        <p className="aboutText">{portfolioData.summary}</p>
      </div>
    </section>
  );
}
