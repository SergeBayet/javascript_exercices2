/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  // your code here
  let articles;
  document.getElementById("run").addEventListener("click", function() {
    window.lib.getPosts().then(function(tableau) {
      articles = tableau;
      let remaining = articles.length;

      for (el in articles) {
        let id = articles[el].id;
        window.lib.getComments(id).then(function(comments) {
          articles[id].comments = comments;
          remaining--;
          if (remaining == 0) {
            console.table(articles);
          }
        });
      }
    }, null);
  });
})();
