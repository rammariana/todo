const d = document;
export let all, add, complete, articleChores, articleBtn;
export function paintToDo() {
  const $section = d.querySelector(".container");
  let section = d.createElement("section"),
    h1 = d.createElement("h1"),
    choreContainer = d.createElement("article"),
    owner = d.createElement("p");

  (articleChores = d.createElement("article")),
    (all = d.createElement("div")),
    (add = d.createElement("div")),
    (complete = d.createElement("div")),
    //SETTING TEXCONTENT
    (h1.textContent = "Things to Do");
  all.textContent = "All";
  add.textContent = "Add";
  complete.textContent = "Complete";
  owner.classList.add("owner");
  owner.textContent = "| Developed by Mariana Ramírez |";

  //
  articleBtn = d.createElement("article");
  articleBtn.classList.add("article-btn-delete");

  //SETTING IDS
  all.id = "all";
  add.id = "add";
  complete.id = "complete";

  //ADDING CLASES
  articleChores.classList.add("article-chores");
  choreContainer.classList.add("chore-container");
  section.classList.add("section");
  //

  choreContainer.appendChild(all);
  choreContainer.appendChild(add);
  choreContainer.appendChild(complete);

  section.appendChild(h1);
  section.appendChild(choreContainer);
  section.appendChild(articleChores);
  section.appendChild(articleBtn);
  section.appendChild(owner);

  $section.appendChild(section);
}

/*

*/
