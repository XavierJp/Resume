import "./style.scss";

export const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-content-start align-items-center m-4">
        <img src="/src/assets/medaillon.jpg" />
        <h1>
          Xavier <strong>Jouppe</strong>
        </h1>
      </div>
    </header>
  );
};
