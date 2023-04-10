import { choreDeleted } from "./checked.js";
import { templateComplete } from "./complete.js";

const d = document;

export function deleteAll(e) {
  choreDeleted.splice(0, choreDeleted.length);
  templateComplete.textContent = "";
  console.log(choreDeleted);
}
