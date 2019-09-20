/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let url = "http://localhost:3000/heroes";
  fetch(url)
    .then(response => response.json())
    .then(data => {
      display(data);
    })
    .catch(() => {
      //server returns any errors
    });
  function display(data) {
    if ("content" in document.createElement("template")) {
      // On prépare une ligne pour le tableau
      let template = document.querySelector("#tpl-hero");

      // On clone la ligne et on l'insère dans le tableau
      let target = document.querySelector("#target");
      for (el in data) {
        let clone = document.importNode(template.content, true);

        let nameElement = clone.querySelector(".name");
        nameElement.innerHTML = data[el].name;
        let alterEgoElement = clone.querySelector(".alter-ego");
        alterEgoElement.innerHTML = data[el].alterEgo;
        let powersElement = clone.querySelector(".powers");
        let html = "";

        for (ability of data[el].abilities) {
          html += ability + "<br/>";
        }
        powersElement.innerHTML = html;
        target.appendChild(clone);
      }
    }
  }
})();
