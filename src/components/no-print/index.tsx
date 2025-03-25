import type { PropsWithChildren } from "react";

export const NoPrint = ({ children }: PropsWithChildren) => (
  <div className="no-print">{children}</div>
);
