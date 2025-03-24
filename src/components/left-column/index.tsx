import "./style.scss";

export const LeftColumn = () => {
  return (
    <div className="left-column p-4">
      <div>
        <h2>expertise</h2>
        <p>Produit</p>
        <div className="separator" />
        <p>Développement</p>
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
