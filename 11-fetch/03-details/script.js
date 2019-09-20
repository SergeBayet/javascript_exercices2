/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  document.getElementById("run").addEventListener("click", () => {
    let id = document.getElementById("hero-id").value;
    if (id) {
      console.log(id);
      getHeroDetails(id);
    }
  });
  function getHeroDetails(id) {
    let url = "http://localhost:3000/heroes?id=" + id;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        display(data[0]);
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

        let clone = document.importNode(template.content, true);

        let nameElement = clone.querySelector(".name");
        nameElement.innerHTML = data.name;
        let alterEgoElement = clone.querySelector(".alter-ego");
        alterEgoElement.innerHTML = data.alterEgo;
        let powersElement = clone.querySelector(".powers");
        let html = "";

        for (ability of data.abilities) {
          html += ability + "<br/>";
        }
        powersElement.innerHTML = html;
        target.innerHTML = "";
        target.appendChild(clone);
      }
    }
  }
})();
