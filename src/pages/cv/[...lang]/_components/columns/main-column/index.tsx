import { PageBreakForPrint } from "@components/page-break-for-print";
import { Experience } from "./experience";
import "./style.scss";
import { WebProject } from "./web-project";
import type { ResumeType } from "src/content/config";
import { NoPrint } from "@components/no-print";

export const MainColumn = ({ resume }: { resume: ResumeType }) => {
  return (
    <div className="main-column p-4">
      <div className="block-group">
        <h2>{resume.experiences.title}</h2>
        {resume.experiences.data.map(
          ({ title, period, company, location, description, achievements }) => (
            <div className="block">
              <Experience
                title={title}
                period={period}
                company={company}
                location={location}
                description={description}
                achievements={achievements}
              />
            </div>
          )
        )}
      </div>
      <NoPrint>
        <div className="block-group">
          <h2>{resume.projects.title}</h2>
          {resume.projects.data.map((projet) => (
            <div className="block">
              <WebProject {...projet} />
            </div>
          ))}
        </div>
      </NoPrint>
    </div>
  );
};
