import type { ResumeType } from "src/content/config";
import "./style.scss";
import { PrintOnly } from "@components/print-only";

export const SideColumn = ({ resume }: { resume: ResumeType }) => {
  return (
    <div className="side-column p-4">
      <div>
        <h2>{resume.contact.title}</h2>
        <div style={{ display: "none" }}>
          <div>
            <a href="mailto:xx@yyy.fr">xx@yyy.fr</a>
          </div>
          <div>
            <a href="tel:+336xxxxxx">+33 6 xx xx</a>
          </div>
          <div className="separator" />
        </div>

        <div className="icon flex justify-content-start align-items-center flex-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
          >
            <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.7-4-1.7-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8 0-.8 0-.8 1.3.1 2 1.3 2 1.3 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-6 0-1.3.4-2.3 1.2-3.2-.1-.3-.5-.9-.1-1.8 0 0 1-.4 3.3 1.2 1.5-.4 3.1-.4 4.7 0 2.3-1.6 3.3-1.2 3.3-1.2.4 1 0 1.5-.2 1.8.8.9 1.3 2 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .5.3.9 1 .9 2.2v3.3c0 .3.1.7.7.6 6.6-1.6 10-6.1 10-11.4A12 12 0 0 0 12 0z" />
          </svg>
          <a href="https://github.com/XavierJp">Github</a>
        </div>
        <div className="icon flex justify-content-start align-items-center flex-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="16px"
            height="16px"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </svg>
          <a href="https://www.linkedin.com/in/xavier-jouppe-a9030579/">
            Linkedin
          </a>
        </div>
        {resume.contact.data.map(({ label, href }) => (
          <div>
            <a href={href}>{label}</a>
          </div>
        ))}
      </div>
      <br />
      <div>
        <h2>{resume.skills.title}</h2>
        {resume.skills.data.map((skill) =>
          !!skill ? <div>{skill}</div> : <div className="separator" />
        )}
      </div>
      <br />
      <div>
        <h2>{resume.education.title}</h2>
        {resume.education.data.map((education) =>
          !!education ? <div>{education}</div> : <div className="separator" />
        )}
      </div>
      <br />
      <PrintOnly>
        <div>
          <h2>{resume.technos.title}</h2>
          {resume.technos.data.map((techno) =>
            !!techno ? <div>{techno}</div> : <div className="separator" />
          )}
        </div>
        <br />
      </PrintOnly>
    </div>
  );
};
