import type { PropsWithChildren } from "react";
import "./style.scss";

export const TwoColumnsLayout = ({ children }: PropsWithChildren) => (
  <div id="two-column-layout">{children}</div>
);
