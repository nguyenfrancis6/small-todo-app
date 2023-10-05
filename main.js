let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (textInput.value === "") {
    msg.innerHTML = "Task cannot be blank";
  } else {
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = textInput.value;
  data["date"] = dateInput.value;
  data["description"] = textarea.value;
  createTasks();
};

let createTasks = () => {
  tasks.innerHTML += `
  <div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>

    <span class="options">
    <i class="fas fa-edit"></i>
    <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>
  `;
  clearForm();
};

let clearForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

let deleteTask = () => {

}
