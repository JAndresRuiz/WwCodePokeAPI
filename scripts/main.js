window.addEventListener("DOMContentLoaded", function () {
  contentChanger("home");
});

async function contentChanger(option) {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = `<div>
    <h1 class="loader">Loader...</h1>
  </div>`;

  const generatedDynamically = document.querySelectorAll("[id$='generatedDynamically']");
  if(generatedDynamically && generatedDynamically.length){
    generatedDynamically.forEach(element => {
      element.remove();
    });
  }
  try {
    const response = await fetch(`${option}.html`);
    const responsejs = await fetch(`scripts/${option}.js`);
    const responseStyles = await fetch(`style/${option}.css`);
    Promise.all([response.text(), responsejs.text(), responseStyles.text()]).then(([html, js, css]) => {
      mainContainer.innerHTML = html;
      const script = document.createElement("script");
      script.id = option + "-script-generatedDynamically";
      script.innerHTML = js;
      document.body.appendChild(script);
      const style = document.createElement("style");
      style.id = option + "-style-generatedDynamically";
      style.innerHTML = css;
      document.head.appendChild(style);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}
