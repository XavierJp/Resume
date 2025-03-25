import { NoPrint } from "@components/no-print";
import "./style.scss";

export const Footer = () => {
  const y = new Date().getFullYear();

  return (
    <footer className="p-4">
      <NoPrint>
        <a href="https://github.com/XavierJp/Resume">fait</a> à Rennes 🇫🇷 avec{" "}
        <a href="https://astro.build/">Astro</a> ∙ {y} ©{" "}
      </NoPrint>
    </footer>
  );
};
