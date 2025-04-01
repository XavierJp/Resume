import { NoPrint } from "@components/no-print";
import "./style.scss";

export const LightAndDarkSwitch = () => (
  <NoPrint>
    <label
      className="light-and-dark-switch"
      aria-hidden="true"
      htmlFor="color-mode"
      tabIndex={0}
      dangerouslySetInnerHTML={{
        __html: `
      <input id="color-mode" type="checkbox" name="color-mode" onclick="toggleLightDarkMode()"></input>
      <div class="slider"></div>
      <script>
        function toggleLightDarkMode() {if(document.getElementById('color-mode').checked) { document.body.style.colorScheme = 'dark' } else { document.body.style.colorScheme = 'light' }}
        
        (function () {
          if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.getElementById('color-mode').checked = true;
          }
        })();
      </script>
      `,
      }}
    ></label>
  </NoPrint>
);
