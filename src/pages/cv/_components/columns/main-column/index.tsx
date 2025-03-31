import type { IExperience, IProject } from "src/types/resume";
import { Experience } from "./experience";
import "./style.scss";
import { WebProject } from "./web-project";

export const MainColumn = ({
  experiences,
  projects,
}: {
  experiences: IExperience[];
  projects: IProject[];
}) => {
  return (
    <div className="main-column p-4">
      <div className="block-group">
        <h2>expériences professionnelles</h2>
        {experiences.map(
          ({ title, period, company, location, description, achievements }) => (
            <Experience
              title={title}
              period={period}
              company={company}
              location={location}
              description={description}
              achievements={achievements}
            />
          )
        )}
      </div>
      <div className="block-group">
        <h2>projets et réalisations</h2>
        {projects.map((projet) => (
          <WebProject
            name={projet.name}
            timespan={projet.timespan}
            tags={projet.tags}
            description={projet.description}
            img={projet.img}
          />
        ))}
      </div>
    </div>
  );
};
