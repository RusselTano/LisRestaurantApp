const utils = {
  pageContent(title, content, btn) {
    document.querySelector(".header").innerHTML = title;
    document.querySelector("main").innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },
};
let arraySize = 0;
let combo = [];

const page = {
  main() {
    utils.pageContent(
      `<img class="profile" src="./Avatar-Profile.png" alt="Lis Image">
      <p>Which combo do you like</p>`,
      ` <div class="container__choice">
        <div class="input-box">
          <input type="radio" name="combo" id="A" tabindex="1">
          <label for="A">A</label>
        </div>
        <div class="input-box">
          <input type="radio" name="combo" id="B">
          <label for="B">B</label>
        </div>
        <div class="input-box">
          <input type="radio" name="combo" id="C">
          <label for="C">C</label>
        </div>
      </div>`,
      ` <button type="button" class="rice-noodle-button">Next</button>`
    );

    document
      .querySelector(".rice-noodle-button")
      .addEventListener("click", () => {
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
        combo = new Array(arraySize).fill(null);
        page.riceNoodle();
      });
  },

  riceNoodle() {
    console.log(arraySize);
    utils.pageContent(
      `<img class="profile" src="./Avatar-Profile.png" alt="Lis Image">
      <p>Rice Or Noodle</p>`,
      `
      <div class="container__choice">
        <div class="input-box">
          <input type="radio" name="item" id="rice">
          <label for="rice">rice</label>
        </div>
        <div class="input-box">
          <input type="radio" name="item" id="noodle">
          <label for="noodle">noodle</label>
        </div>
      </div>`,
      `<button type="button" class="back">prev</button>
      <button type="button" class="menu-button">Next</button>`
    );

    document.querySelector(".menu-button").addEventListener("click", () => {
      if (document.getElementById("rice").checked) {
        combo.push("rice");
      } else if (document.getElementById("noodle").checked) {
        combo[0] = "noodle";
      } else {
        console.log("Aucune option sélectionnée");
        return;
      }
      page.menu();
    });
    document
      .querySelector(".back")
      .addEventListener("click", () => page.main());
  },

  menu() {
    console.log(combo);
    utils.pageContent(
      `<img class="profile" src="./Avatar-Profile.png" alt="Lis Image">
      <h1>Bienvenu sur le menu</h1>`,
      null,
      `<button type="button" class="back">prev</button>`
    );

    document
      .querySelector(".back")
      .addEventListener("click", () => page.riceNoodle());
  },
};

page.main();
