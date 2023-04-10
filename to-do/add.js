import { add, all, articleBtn, articleChores, complete } from "./to-do.js";

const d = document;
export let btnAdd, messageAdded, inputText;

export function varAdd() {
  add, articleChores, all, complete, articleBtn;
  articleChores.textContent = "";
  articleBtn.textContent = "";

  add.classList.add("selected");
  complete.classList.remove("selected");
  all.classList.remove("selected");

  inputText = d.createElement("input");
  //
  inputText.type = "text";
  inputText.id = "input";
  inputText.placeholder = "Add work...";
  inputText.autocomplete = "off";

  inputText.classList.add("input-text");
  //
  btnAdd = d.createElement("button");
  btnAdd.textContent = "Add";

  btnAdd.id = "add-btn";
  //

  articleChores.appendChild(inputText);
  articleChores.appendChild(btnAdd);
}
