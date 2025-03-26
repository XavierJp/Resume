import "./style.scss";

export const MainColumn = () => {
  return (
    <div className="main-column p-4">
      <div className="block-group">
        <h2>expériences professionnelles</h2>
        <div className="block">
          <h3 className="flex justify-content-space-between">
            <span>Intrapreneur</span>
            <span>2020 ∙ 2025</span>
          </h3>
          <div className="flex justify-content-space-between">
            <i>Direction Intérministérielle du Numérique</i>
            <i>Paris ∙ Rennes</i>
          </div>
          <p>
            Gestion d’une équipe de 6 prestataires et d’un budget annuel de 350
            000 euros, dédiés à la construction du produit Annuaire des
            Entreprises.
            <ul>
              <li>
                Organisation de l’équipe et priorisation de la feuille de route
                et des évolutions techniques.
              </li>
              <li>
                Augmentation du volume de visite jusqu’à 450 000 visites
                mensuelles.
              </li>
              <li>
                Augmentation de 150% des principales mesures d’usage et
                d’impact.
              </li>
            </ul>
          </p>
        </div>
        <div className="block">
          <h3 className="flex justify-content-space-between">
            <span>Product Manager</span>
            <span>2018 ∙ 2020</span>
          </h3>
          <div className="flex justify-content-space-between">
            <i>Skillup</i>
            <i>Paris</i>
          </div>
          <p>
            Gestion d’une équipe de 6 prestataires et d’un budget annuel de 350
            000 euros, dédiés à la construction du produit Annuaire des
            Entreprises.
          </p>
        </div>
        <div className="block">
          <h3 className="flex justify-content-space-between">
            <span>Ingénieur recherche en machine learning</span>
            <span>2016 ∙ 2018</span>
          </h3>
          <div className="flex justify-content-space-between">
            <i>SmartAdServer</i>
            <i>Paris</i>
          </div>
          <p>
            Gestion d’une équipe de 6 prestataires et d’un budget annuel de 350
            000 euros, dédiés à la construction du produit Annuaire des.
          </p>
        </div>
      </div>
      <div className="block-group">
        <h2>projets et réalisations</h2>

        <div className="block">
          <h3 className="flex justify-content-space-between">
            <span>Annuaire des Entreprises</span>
            <span>2020 ∙ 2025</span>
          </h3>
          <div className="flex justify-content-space-between gap-3">
            <img src="/resume/sites/annuaire.png" />
            <div className="flex flex-column align-items-end">
              <div className="tags flex flex-row justify-content-end gap-1">
                <small>service public</small>
                <small>next.js</small>
                <small>ansible</small>
                <small>redis</small>
                <small>elasticsearch</small>
                <small>react</small>
                <small>python</small>
                <small>fastAPI</small>
                <small>Node.js</small>
                <small>OVH</small>
              </div>
              <small>
                <i>description</i>
              </small>
            </div>
          </div>
        </div>
        <div className="block">
          <h3 className="flex justify-content-space-between">
            <span>CuiCuiAsso</span>
            <span>2024</span>
          </h3>
          <div className="flex justify-content-space-between gap-3">
            <img src="/resume/sites/cuicui.png" />
            <div className="flex flex-column align-items-end">
              <div className="tags flex flex-row justify-content-end gap-1">
                <small>site vitrine</small>
                <small>11ty</small>
                <small>Cloudflare</small>
              </div>
              <small>
                <i>description</i>
              </small>
            </div>
          </div>
        </div>
        <div className="block">
          <h3 className="flex justify-content-space-between">
            <span>Api.gouv.fr</span>
            <span>2020</span>
          </h3>
          <div className="flex justify-content-space-between gap-3">
            <img src="/resume/sites/apigouv.png" />
            <div className="flex flex-column align-items-end">
              <div className="tags flex flex-row justify-content-end gap-1">
                <small>service public</small>
                <small>refonte visuelle</small>
                <small>next.js</small>
                <small>react</small>
                <small>Node.js</small>
                <small>OVH</small>
              </div>
              <small>
                <i>
                  Refonte visuelle du catalogue des API du secteur public en
                  France. Migration d’un site vitrine en Jekyll vers React.
                </i>
              </small>
            </div>
          </div>
        </div>
        <div className="block">
          <h3 className="flex justify-content-space-between">
            <span>ManakinProduction</span>
            <span>2018</span>
          </h3>
          <div className="flex justify-content-space-between gap-3">
            <img src="/resume/sites/manakin.png" />
            <div className="flex flex-column align-items-end">
              <div className="tags flex flex-row justify-content-end gap-1">
                <small>Site vitrine</small>
                <small>Gatsby</small>
                <small>React</small>
                <small>Netlify</small>
                <small>Contentful</small>
                <small>Jamstack</small>
                <small>Brutalist design</small>
              </div>
              <small>
                <i>
                  Conception d’un site vitrine pour Manakin production.
                  Structure de production de projets artistiques dans le
                  spectacle vivant.
                </i>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
