import "./style.scss";

export const LanguageSwitcher = ({ lang }: { lang: string }) => (
  <div id="language-switcher">
    <a href="/cv/fr" className={lang === "fr" ? "active" : ""}>
      <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <rect width="8" height="18" fill="#0055A4" />
        <rect x="8" width="8" height="18" fill="#FFFFFF" />
        <rect x="16" width="8" height="18" fill="#EF4135" />
      </svg>
    </a>
    <a href="/cv/en" className={lang === "en" ? "active" : ""}>
      <svg viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="18" fill="#012169" />
        <path d="M0 0 L24 18 M24 0 L0 18" stroke="#FFFFFF" stroke-width="3" />
        <path d="M0 0 L24 18 M24 0 L0 18" stroke="#C8102E" stroke-width="1.5" />
        <path d="M12 0 V18 M0 9 H24" stroke="#FFFFFF" stroke-width="5" />
        <path d="M12 0 V18 M0 9 H24" stroke="#C8102E" stroke-width="3" />
      </svg>
    </a>
  </div>
);
