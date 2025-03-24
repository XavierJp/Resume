import { LightAndDarkSwitch } from "@components/light-and-dark-switch";
import "./style.scss";

export const Summary = () => {
  return (
    <div className="summary p-4 flex justify-content-space-between align-items-center">
      <div>Lorem ipsum</div>
      <LightAndDarkSwitch />
    </div>
  );
};
