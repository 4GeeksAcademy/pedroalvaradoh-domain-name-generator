/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("domainId").innerHTML = domainNameArray;

  var pronoun = ["the", "our", "your"];
  var adj = ["great", "big", "modern", "powerful"];
  var noun = ["jogger", "racoon"];
  let domainNameArray = [];

  function randomDomainGenerator(pronounP, adjP, nounP) {
    for (var i = 0; i < pronounP.length; i++) {
      for (var e = 0; e < adjP.length; e++) {
        for (var u = 0; u < nounP.length; u++) {
          let randomize = pronounP[i] + adjP[e] + nounP[u] + ".com";
          domainNameArray.push(randomize);
        }
      }
    }
    return domainNameArray;
  }
  randomDomainGenerator(pronoun, adj, noun);
  console.log(domainNameArray);
};
