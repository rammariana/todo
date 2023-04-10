import { inputText } from "./add.js";
import { articleChores } from "./to-do.js";

const d = document;
export let inputValue = [];

export function addBtn() {
  let messageAdded = d.createElement("p");
  messageAdded.textContent = "Is added...";
  messageAdded.classList.add("none");
  messageAdded.classList.add("last");

  articleChores.appendChild(messageAdded);

  if (inputText.value) {
    inputValue.push(inputText.value);
    //console.log(inputText.value, inputValue);
    setTimeout(() => {
      inputText.value = "";
      messageAdded.classList.remove("none");
    }, 500);

    setTimeout(() => {
      messageAdded.classList.add("none");
    }, 3000);
  }
}
