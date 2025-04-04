import { NoPrint } from "@components/no-print";
import type { ProjectItem } from "src/content/config";
import "./style.scss";

export const WebProject = ({
  name,
  timespan,
  img,
  description,
  tags,
  links,
}: ProjectItem) => {
  return (
    <>
      <div className="default-flex-container">
        <span>
          <h3>{links?.href ? <a href={links.href}>{name}</a> : <>{name}</>}</h3>
        </span>
        {links?.github && (
          <span style={{ flexGrow: 1 }}>
            <NoPrint>
              <small>
                (<a href={links.github}>Github</a>)
              </small>
            </NoPrint>
          </span>
        )}
        <strong>{timespan}</strong>
      </div>
      <div className="default-flex-container web-project-content">
        <img src={img} />
        <div>
          <div className="tags">
            {tags.map((t) => (
              <small>{t}</small>
            ))}
          </div>
          <small>
            <i>{description}</i>
          </small>
        </div>
      </div>
    </>
  );
};
