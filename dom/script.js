const input = document.querySelector(".input");
const btn = document.querySelector(".add");
const lists = document.querySelector(".lists");

btn.addEventListener("click", () => {
  let list = document.createElement("li");
  list.innerHTML = input.value;
  list.className = "list";
  let btn = document.createElement("button");
  btn.innerHTML = "delete";
  let edit = document.createElement("button");
  edit.innerHTML = "Edit";
  lists.append(list);
  list.append(edit);
  list.append(btn);
});
