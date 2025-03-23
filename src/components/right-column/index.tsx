import "./style.scss";

export const RightColumn = () => {
  return (
    <div className="right-column p-4">
      <h2>expériences professionnelles</h2>
      <div className="block">
        <h3 className="flex justify-content-space-between">
          <span>Intrapreneur</span>
          <span>2020 ∙ 2025</span>
        </h3>
        <div className="flex justify-content-space-between">
          <i>Direction Intérministérielle du Numérique</i>
          <i>Paris</i>
        </div>
        <p>
          Gestion d’une équipe de 6 prestataires et d’un budget annuel de 350
          000 euros, dédiés à la construction du produit Annuaire des
          Entreprises.
          <ul>
            <li>
              Organisation de l’équipe et priorisation de la feuille de route et
              des évolutions techniques.
            </li>
            <li>
              Augmentation du volume de visite jusqu’à 450 000 visites
              mensuelles.
            </li>
            <li>
              Augmentation de 150% des principales mesures d’usage et d’impact.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};
