/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  document.getElementById("run").addEventListener("click", () => {
    const name = document.getElementById("hero-name").value;
    const alterEgo = document.getElementById("hero-alter-ego").value;
    const powers = document.getElementById("hero-powers").value;
    if (name && alterEgo && powers) {
      addHero(name, alterEgo, powers);
    }
  });

  function addHero(name, alterEgo, abilities) {
    abilities = abilities.split(";");
    const heroObject = JSON.stringify({
      name: name,
      alterEgo: alterEgo,
      abilities: abilities
    });

    let url = "http://localhost:3000/heroes";
    fetch(url, {
      method: "POST",
      body: heroObject,
      headers: new Headers({
        "Content-type": "application/json"
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(errors => {
        //server returns any errors
        console.table(errors);
      });
  }
})();
