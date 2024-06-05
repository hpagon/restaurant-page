import initial from "./initial.js";
import menu from "./menu.js";
import about from "./about.js";
import "./style.css";

class Controller {
  #buttons = document.querySelectorAll("header nav button");
  #content = document.querySelector("#content");

  constructor() {
    for (const button of this.#buttons) {
      button.addEventListener("click", (e) => {
        this.clear();
        this.freeze(e.target);
        switch (e.target.innerHTML) {
          case "Home":
            initial();
            break;
          case "Menu":
            menu();
            break;
          case "About":
            about();
            break;
        }
      });
    }
    initial();
  }
  //clears the content div
  clear() {
    this.#content.children[0].remove();
  }
  //disables click on button
  freeze(button) {
    button.setAttribute("disabled", "disabled");
  }
}

const main = new Controller();
