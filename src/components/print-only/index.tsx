import type { PropsWithChildren } from "react";
import "./style.scss";

export const PrintOnly = ({ children }: PropsWithChildren) => (
  <div className="print-only">{children}</div>
);
