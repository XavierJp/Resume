import type { IExperience } from "src/types/resume";

export const Experience = ({
  title,
  period,
  company,
  location,
  description,
  achievements,
}: IExperience) => (
  <div className="block">
    <h3 className="flex justify-content-space-between">
      <span>{title}</span>
      <span>{period}</span>
    </h3>
    <div className="flex justify-content-space-between">
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
  </div>
);
