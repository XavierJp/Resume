import "./style.scss";

export const Footer = () => {
  const y = new Date().getFullYear();

  return <footer className="p-4">fait à Rennes 🇫🇷 ∙ {y} © </footer>;
};
