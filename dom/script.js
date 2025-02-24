const input = document.querySelector(".input");
const btn = document.querySelector(".add");
const lists = document.querySelector(".lists");

btn.addEventListener("click", () => {
  let list = document.createElement("li");
  list.innerHTML = input.value;
  let btn = document.createElement("button");
  btn.innerHTML = "delete";
  let edit = document.createElement("button");
  edit.innerHTML = "Edit";
  lists.append(edit);
  lists.append(btn);
  lists.append(list);
});
