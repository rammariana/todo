import { choreDeleted } from "./checked.js";
import { templateComplete } from "./complete.js";

const d = document;

export function deletingChore(e) {
  choreDeleted.splice(
    choreDeleted.indexOf(e.previousSibling.previousSibling.textContent),
    1
  );
  templateComplete.removeChild(e.parentNode);
  console.log(choreDeleted);
  console.log(e.previousSibling.previousSibling.textContent);
}
