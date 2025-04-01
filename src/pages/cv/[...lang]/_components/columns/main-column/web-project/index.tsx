import "./style.scss";

type IProps = {
  name: string;
  timespan: string;
  tags: string[];
  description: string;
  img: string;
};

export const WebProject = (props: IProps) => {
  return (
    <div className="block">
      <h3 className="flex justify-content-space-between">
        <span>{props.name}</span>
        <span>{props.timespan}</span>
      </h3>
      <div className="flex justify-content-space-between gap-3">
        <img src={props.img} />
        <div className="flex flex-column align-items-end">
          <div className="tags flex flex-row justify-content-end gap-1">
            {props.tags.map((t) => (
              <small>{t}</small>
            ))}
          </div>
          <small>
            <i>{props.description}</i>
          </small>
        </div>
      </div>
    </div>
  );
};
