import type { IExperience } from "src/types/resume";

export const Experience = ({
  title,
  period,
  company,
  location,
  description,
  achievements,
}: IExperience) => (
  <>
    <h3 className="default-flex-container">
      <span>{title}</span>
      <span>{period}</span>
    </h3>
    <div className="default-flex-container">
      <i>{company}</i>
      <i>{location}</i>
    </div>
    <p>
      {description}
      {achievements.length > 0 && (
        <ul>
          {achievements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </p>
  </>
);
