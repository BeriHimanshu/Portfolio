import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { portfolioData } from '@/data/portfolio';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="sectionTitle">
        <span className="sectionTitleText">Projects</span>
      </h2>
      <div className="projectsGrid">
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="projectCard">
            <div>
              <div className="projectHeader">
                <div className="projectTitleGroup">
                  <span className="projectRole">{project.role}</span>
                  <h3 className="projectTitle">{project.title}</h3>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="githubIconLink"
                  aria-label="GitHub Repository"
                >
                  <GithubIcon size={22} />
                </a>
              </div>
              <p className="projectSummary">{project.summary}</p>
            </div>
            <div className="projectFooter">
              <div className="projectTags">
                {project.techTags.map((tag) => (
                  <span key={tag} className="techTag">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="viewCodeLink"
              >
                <span>View Repository</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
