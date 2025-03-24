import "./style.scss";

export const LightAndDarkSwitch = () => (
  <label
    className="light-and-dark-switch"
    aria-hidden="true"
    htmlFor="color-mode"
    dangerouslySetInnerHTML={{
      __html: `
      <input id="color-mode" type="checkbox" name="color-mode" onclick="toggleLightDarkMode()"></input>
      <div class="slider"></div>
      <script>function toggleLightDarkMode() {document.body.classList.toggle('dark')}</script>
      `,
    }}
  ></label>
);
