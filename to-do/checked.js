import { inputValue } from "./add-btn.js";
import { template } from "./all.js";

const d = document;
export let choreDeleted = [];

export function checked(el) {
  let aa = el;
  template.removeChild(aa);
  choreDeleted.push(aa.id);
  inputValue.splice(inputValue.indexOf(aa.id), 1);

  //console.log(inputValue, choreDeleted);
}
