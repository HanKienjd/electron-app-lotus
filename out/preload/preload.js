"use strict";
console.log("here");
function actionButton() {
  const button = document.getElementById("button-test");
  button.addEventListener("click", () => {
    console.log("button clicked");
  });
}
actionButton();
