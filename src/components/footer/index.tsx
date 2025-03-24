import "./style.scss";

export const Footer = () => {
  const y = new Date().getFullYear();

  return (
    <footer className="p-4">
      <a href="https://github.com/XavierJp/Resume">fait</a> à Rennes 🇫🇷 avec{" "}
      <a href="https://astro.build/">Astro</a> ∙ {y} ©{" "}
    </footer>
  );
};
