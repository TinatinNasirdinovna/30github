const input = document.querySelector(".input");
const btn = document.querySelector(".add");
const lists = document.querySelector(".lists");

btn.addEventListener("click", () => {
  let list = document.createElement("li");
  list.innerHTML = input.value;
  lists.append(list);
});
