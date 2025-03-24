import "./style.scss";

export const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-content-start align-items-center p-4">
        <img src="/src/assets/medaillon.jpg" />
        <div>
          <h1>
            Xavier <strong>Jouppe</strong>
          </h1>
          <small>Rennes ∙ France</small>
        </div>
      </div>
    </header>
  );
};
