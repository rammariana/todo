import { paintToDo } from "./to-do.js";
import { varAdd } from "./add.js";
import { addBtn } from "./add-btn.js";
import { varAll } from "./all.js";
import { checked } from "./checked.js";
import { varComplete } from "./complete.js";
import { deletingChore } from "./deleting.js";
import { deleteAll } from "./delete-all.js";

const d = document;

document.addEventListener("DOMContentLoaded", (e) => {
  paintToDo();
  varAdd();

  d.addEventListener("click", (e) => {
    if (e.target.matches("#add")) {
      varAdd();
    }
    if (e.target.matches("#all")) {
      varAll();
    }
    if (e.target.matches("#add-btn")) {
      addBtn();
    }
    if (e.target.matches(".all-chores")) {
      checked(e.target);
    }
    if (e.target.matches("#complete")) {
      varComplete();
    }
    if (e.target.matches(".img-delete")) {
      deletingChore(e.target);
    }
    if (e.target.matches(".delete-all-btn")) {
      deleteAll(e.target);
    }
  });
});
