import { LightAndDarkSwitch } from "@components/light-and-dark-switch";
import "./style.scss";
import { NoPrint } from "@components/no-print";

export const Summary = () => {
  return (
    <NoPrint>
      <div className="summary p-4 flex justify-content-space-between align-items-center">
        <div>Actuellement en recherche d’emploi, à Rennes, Paris ou Nantes</div>
        <LightAndDarkSwitch />
      </div>
    </NoPrint>
  );
};
