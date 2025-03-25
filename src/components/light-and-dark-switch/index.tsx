import { NoPrint } from "@components/no-print";
import "./style.scss";

export const LightAndDarkSwitch = () => (
  <NoPrint>
    <label
      className="light-and-dark-switch"
      aria-hidden="true"
      htmlFor="color-mode"
      dangerouslySetInnerHTML={{
        __html: `
      <input id="color-mode" type="checkbox" name="color-mode" onclick="toggleLightDarkMode()"></input>
      <div class="slider"></div>
      <script>function toggleLightDarkMode() {if(document.getElementById('color-mode').checked) { document.body.classList.add('dark') } else { document.body.classList.remove('dark') }}</script>
      `,
      }}
    ></label>
  </NoPrint>
);
