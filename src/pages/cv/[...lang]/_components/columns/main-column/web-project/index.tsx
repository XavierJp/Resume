import { NoPrint } from "@components/no-print";
import type { ProjectItem } from "src/content/config";

export const WebProject = ({
  name,
  timespan,
  img,
  description,
  tags,
  links,
}: ProjectItem) => {
  return (
    <div className="block">
      <div className="flex justify-content-space-between">
        <span>
          <h3>{links?.href ? <a href={links.href}>{name}</a> : <>{name}</>}</h3>
        </span>
        <strong>{timespan}</strong>
      </div>
      <div className="flex justify-content-space-between gap-3">
        <img src={img} />
        <div className="flex flex-column align-items-end">
          <div className="tags flex flex-row justify-content-end gap-1">
            {tags.map((t) => (
              <small>{t}</small>
            ))}
          </div>
          {links?.github && (
            <NoPrint>
              <small>
                <a href={links.github}>Github</a>
              </small>
            </NoPrint>
          )}
          <small>
            <i>{description}</i>
          </small>
        </div>
      </div>
    </div>
  );
};
