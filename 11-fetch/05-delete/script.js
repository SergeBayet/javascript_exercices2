/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here

  document.getElementById("run").addEventListener("click", () => {
    let heroId = document.getElementById("hero-id").value;
    deleteHero(heroId);
  });

  function deleteHero(id) {
    const heroObject = JSON.stringify({
      id: id
    });

    let url = "http://localhost:3000/heroes/" + id;
    fetch(url, {
      method: "DELETE",
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
