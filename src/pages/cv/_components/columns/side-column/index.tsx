import "./style.scss";

export const SideColumn = () => {
  return (
    <div className="side-column p-4">
      <div>
        <h2>contact</h2>
        <div className="github flex justify-content-start flex-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.7-4-1.7-.6-1.4-1.4-1.7-1.4-1.7-1.1-.8 0-.8 0-.8 1.3.1 2 1.3 2 1.3 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-6 0-1.3.4-2.3 1.2-3.2-.1-.3-.5-.9-.1-1.8 0 0 1-.4 3.3 1.2 1.5-.4 3.1-.4 4.7 0 2.3-1.6 3.3-1.2 3.3-1.2.4 1 0 1.5-.2 1.8.8.9 1.3 2 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .5.3.9 1 .9 2.2v3.3c0 .3.1.7.7.6 6.6-1.6 10-6.1 10-11.4A12 12 0 0 0 12 0z" />
          </svg>
          <a href="https://github.com/XavierJp">profil github</a>
        </div>
        <div>
          <a href="https://x.jouppe.fr/cv">site personnel</a>
        </div>
      </div>
      <br />

      <div>
        <h2>expertise</h2>

        <p>Gestion d’équipe, management</p>
        <div className="separator" />
        <p>Conception produit et UX</p>
        <div className="separator" />
        <p>
          Développement web
          <br />
          Architecture logicielle
          <br />
          Passage à l’échelle
        </p>
      </div>

      <div>
        <h2>études</h2>
        <div className="flex justify-content-space-between flex-wrap">
          <span>Diplôme d’ingénieur</span>
          <span>CentraleSupélec ECP14</span>
        </div>
        <div className="separator" />
        <div className="flex justify-content-space-between flex-wrap">
          <span>Master 2 d’économie</span>
          <span>Paris Panthéon Sorbonne</span>
        </div>
      </div>
      <br />
    </div>
  );
};
