import type { PropsWithChildren } from "react";
import "./style.scss";

export const BreakPointContainer = ({ children }: PropsWithChildren) => (
  <div id="break-point-container">{children}</div>
);
