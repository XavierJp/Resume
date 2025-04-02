import type { PropsWithChildren } from "react";

export const PageBreakForPrint = ({ children }: PropsWithChildren) => (
  <div style={{ breakAfter: "page" }}>{children}</div>
);
