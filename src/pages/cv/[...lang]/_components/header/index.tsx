import "./style.scss";

export const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-content-start align-items-center p-4">
        <img src="/resume/medaillon.jpg" />
        <div>
          <h1>
            Xavier <span>Jouppe</span>
          </h1>
          <small>Rennes ∙ France</small>
        </div>
      </div>
    </header>
  );
};
