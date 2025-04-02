import { PageBreakForPrint } from "@components/page-break-for-print";
import { Experience } from "./experience";
import "./style.scss";
import { WebProject } from "./web-project";
import type { ResumeType } from "src/content/config";

export const MainColumn = ({ resume }: { resume: ResumeType }) => {
  return (
    <div className="main-column p-4">
      <div className="block-group">
        <h2>{resume.experiences.title}</h2>
        {resume.experiences.data.map(
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
      <PageBreakForPrint />
      <div className="block-group">
        <h2>{resume.projects.title}</h2>
        {resume.projects.data.map((projet) => (
          <WebProject {...projet} />
        ))}
      </div>
    </div>
  );
};
