import "./style.scss";

export const LeftColumn = () => {
  return (
    <div className="left-column p-4">
      <div>
        <h2>expertise</h2>
        <p>Gestion d’équipe</p>
        <div className="separator" />
        <p>Conception produit</p>
        <div className="separator" />
        <p>
          Développement web,
          <br />
          Architecture logicielle,
        </p>
      </div>
      <br />

      <div>
        <h2>études</h2>
        <p>
          Diplôme d’ingénieur
          <br />
          CentraleSupélec ECP14
        </p>
        <div className="separator" />
        <p>
          Master 2 d’économie
          <br />
          Paris Panthéon Sorbonne
        </p>
      </div>
    </div>
  );
};
