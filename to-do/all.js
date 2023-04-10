import { inputValue } from "./add-btn.js";
import { add, all, articleBtn, articleChores, complete } from "./to-do.js";

const d = document;
export let template;

export function varAll() {
  articleChores, add, all, inputValue, articleBtn;
  articleChores.textContent = "";
  articleBtn.textContent = "";
  add.classList.remove("selected");
  complete.classList.remove("selected");
  all.classList.add("selected");

  template = d.createElement("section");
  template.classList.add("chore-added");

  //
  inputValue.forEach((e) => {
    template.innerHTML += `<p id="${e}" class="all-chores">${e}</p>`;
    articleChores.appendChild(template);
  });
  if (inputValue.length === 0) {
    articleChores.textContent = "You have not added new tasks";
  }
}
