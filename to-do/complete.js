import { choreDeleted } from "./checked.js";
import { all, articleBtn, articleChores, complete } from "./to-do.js";

const d = document;
export let templateComplete;

export function varComplete() {
  console.log(choreDeleted);
  choreDeleted, complete, articleChores;

  articleChores.textContent = "";
  add.classList.remove("selected");
  all.classList.remove("selected");
  complete.classList.add("selected");

  templateComplete = d.createElement("section");
  templateComplete.classList.add("chore-added");

  //
  choreDeleted.forEach((e) => {
    templateComplete.innerHTML += `<section class="section-complete">
    <p class="icon">✔</p>
    <p class="all-complete">${e}</p>
    <img class="img-delete" src="assets/borrar.png"/>
    </section>`;
    articleChores.appendChild(templateComplete);
  });

  if (articleChores.childNodes.length !== 0) {
    let templateBtn = d.createElement("section");
    templateBtn.innerHTML = `<button class="delete-all-btn">Delete all</button>`;
    articleBtn.appendChild(templateBtn);
  }
  if (choreDeleted.length === 0) {
    articleChores.textContent = "You have not completed any tasks";
  }
}
