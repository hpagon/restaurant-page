import initial from "./initial.js";
import menu from "./menu.js";
import about from "./about.js";
import "./style.css";

class Controller {
  #buttons = document.querySelectorAll("header nav button");
  #content = document.querySelector("#content");
  #disabledButton = this.#buttons[0];

  constructor() {
    for (const button of this.#buttons) {
      button.addEventListener("click", (e) => {
        this.clear();
        this.unfreeze();
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
    this.freeze(this.#disabledButton);
  }
  //clears the content div
  clear() {
    this.#content.children[0].remove();
  }
  //disables click on button
  freeze(button) {
    button.setAttribute("disabled", true);
    this.#disabledButton = button;
  }
  //allow clicking funtionality on button again
  unfreeze() {
    this.#disabledButton.removeAttribute("disabled");
  }
}

const main = new Controller();
