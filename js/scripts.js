const todo = document.querySelector("#todo");
const button = document.querySelector("#btn");
const todolist = document.querySelector("#todolist");
const chkbox = document.querySelector("#chkbox");
const body = document.querySelector("body");
const container = document.querySelector("#container");
isDark = false;

chkbox.addEventListener("change", () => {
  if (isDark) {
    body.style.background = "white";
    body.style.color = "black";
    button.style.background = "#232323";
    container.classList.remove("dark");
    isDark = false;
  } else {
    body.style.background = "#232323";
    body.style.color = "white";
    button.style.background = "#2196f3";
    container.classList.add("dark");
    isDark = true;
  }
});

button.addEventListener("click", () => {
  let id = Math.floor(Math.random() * 10);
  console.log(id);
  console.log(todo.value);
  const li = document.createElement("li");
  const text = document.createTextNode(todo.value);
  li.appendChild(text);
  li.setAttribute("id", `li-${id}`);
  li.setAttribute("draggable", "true");
  li.addEventListener("dragstart", drag);

  todolist.appendChild(li);
  todo.value = "";
});
const allowDrop = (ev) => {
  ev.preventDefault();
};

const drag = (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.dropEffect = "copy";
};

const drop = (ev) => {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
};
