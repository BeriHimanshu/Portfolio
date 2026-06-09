import { portfolioData } from '@/data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="sectionTitle">
        <span className="sectionTitleText">Skills</span>
      </h2>
      <div className="skillsGrid">
        {portfolioData.skills.map((categoryObj) => (
          <div key={categoryObj.category} className="skillCategoryCard">
            <h3 className="categoryTitle">{categoryObj.category}</h3>
            <div className="chipsContainer">
              {categoryObj.skills.map((skill) => (
                <span key={skill} className="skillChip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
