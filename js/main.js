const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input_item");
const listEl = document.querySelector(".list");

const todos = [];

const renderArr = function (array, item) {
  item.innerHTML = "";
  array.forEach(function (obj) {
    const newItem = document.createElement("li");
    newItem.classList.add("list_item");

    const checkBoxValue = document.createElement("div");
    checkBoxValue.classList.add("check_box_value");

    const checkBoxInput = document.createElement("input");
    checkBoxInput.classList.add("check_input");
    checkBoxInput.type = "checkbox";
    checkBoxInput.dataset.id = obj.id;
    checkBoxValue.appendChild(checkBoxInput);

    // if (obj.isCompleted) {
    //   newText.style.textDecoration = "line-through";
    //   checkBoxInput.checked = true;
    // }

    const newText = document.createElement("p");
    newText.textContent = obj.title;
    newText.style.marginTop = "14px";
    newText.style.marginLeft = "10px";
    checkBoxValue.appendChild(newText);
    newItem.appendChild(checkBoxValue);

    const buttonsGroup = document.createElement("div");
    const deletedBtn = document.createElement("button");
    deletedBtn.textContent = "delete";
    deletedBtn.type = "button";
    deletedBtn.classList.add("delete_btn");
    deletedBtn.dataset.id = obj.id;
    buttonsGroup.appendChild(deletedBtn);

    const editedBtn = document.createElement("button");
    editedBtn.textContent = "edit";
    editedBtn.type = "button";
    editedBtn.classList.add("edit_btn");
    editedBtn.dataset.id = obj.id;
    buttonsGroup.appendChild(editedBtn);
    newItem.appendChild(buttonsGroup);
    item.appendChild(newItem);
  });
};

formEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  todos.push({
    id: todos[todos.length - 1]?.id + 1 || 1,
    title: inputEl.value,
    isCompleted: false,
  });
  formEl.reset();
  renderArr(todos, listEl);
  console.log(todos);
});

listEl.addEventListener("click", function (evt) {
  if (evt.target.matches(".delete_btn")) {
    const deletedBtnId = Number(evt.target.dataset.id);
    listEl.innerHTML = "";
    console.log(deletedBtnId);
    const findIndex = todos.findIndex((todo) => todo.id === deletedBtnId);
    todos.splice(findIndex, 1);
    console.log(todos);
    renderArr(todos, listEl);
  }

  //   if (evt.target.matches(".check_input")) {
  //     const checkBtnId = Number(evt.target.dataset.id);
  //     listEl.innerHTML = "";
  //     console.log(checkBtnId);
  //     const findElement = todos.find((todo) => todo.id == checkBtnId);
  //     findElement.isCompleted == !findElement.isCompleted;
  //     renderArr(todos, listEl);
  //   }
});
