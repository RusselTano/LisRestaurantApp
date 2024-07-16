const riceNoodleButton = document.querySelector(".rice-noodle-button");
const menuButton = document.querySelector(".menu-button");

let arraySize;

if (riceNoodleButton) {
  riceNoodleButton.addEventListener("click", () => {
    if (document.getElementById("A").checked) {
      arraySize = 2;
    } else if (document.getElementById("B").checked) {
      arraySize = 3;
    } else if (document.getElementById("C").checked) {
      arraySize = 4;
    } else {
      console.log("Aucune option sélectionnée");
      return;
    }
    // Stocker arraySize dans localStorage
    window.location.href = "rice-noodle.html";
    localStorage.setItem("arraySize", arraySize);
    console.log(arraySize);
    // console.log(arraySize);
  });
}
// const newArray = new Array(arraySize).fill(null);
// console.log(arraySize);
let combo = [];
if (menuButton) {
  const arraySize = localStorage.getItem("arraySize");

  combo = new Array(arraySize);
  // if (arraySize) {
  //   const newArray = new Array(parseInt(arraySize)).fill(null);
  //   console.log(newArray);
  // } else {
  //   console.log("arraySize n'est pas défini");
  // }
  menuButton.addEventListener("click", () => {
    if (document.getElementById("rice").checked) {
      combo.push("rice");
    }
    window.location.href = "menu.html";
  });
}
console.log(combo);

