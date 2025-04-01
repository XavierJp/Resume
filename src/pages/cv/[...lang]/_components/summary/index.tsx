import { LightAndDarkSwitch } from "@components/light-and-dark-switch";
import "./style.scss";
import { NoPrint } from "@components/no-print";
import { LanguageSwitcher } from "@components/language-switcher";
import type { ResumeType } from "src/content/config";

export const Summary = ({
  lang,
  resume,
}: {
  lang: string;
  resume: ResumeType;
}) => {
  return (
    <NoPrint>
      <div className="summary p-4 flex justify-content-space-between align-items-center gap-4">
        <div>{resume.intro}</div>
        <div
          tabIndex={0}
          className="print-button"
          title="Imprimer le CV"
          dangerouslySetInnerHTML={{
            __html: `
          <div onclick="window.print();">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path fill="currentColor" d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
        </div>`,
          }}
        />
        <LightAndDarkSwitch />
        <LanguageSwitcher lang={lang} />
      </div>
    </NoPrint>
  );
};
