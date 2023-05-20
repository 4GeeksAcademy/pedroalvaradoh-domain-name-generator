/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our", "your"];
  var adj = ["great", "big", "modern", "powerful"];
  var noun = ["jogger", "racoon"];
  let domainNameArray = [];
  function randomDomainGenerator(pronounP, adjP, nounP) {
    for (var i = 0; i < pronounP.length; i++) {
      for (var e = 0; e < adjP.length; e++) {
        for (var u = 0; u < nounP.length; u++) {
          let randomize =
            "<i>www.</i>" +
            "<strong>" +
            pronounP[i] +
            adjP[e] +
            nounP[u] +
            "</strong>" +
            "<i>.com</i>";

          domainNameArray.push(randomize);
        }
      }
    }
    return domainNameArray.join("<br>");
  }

  document.getElementById("domainId").innerHTML = randomDomainGenerator(
    pronoun,
    adj,
    noun
  );

  // console.log(randomDomainGenerator(pronoun, adj, noun));
};
