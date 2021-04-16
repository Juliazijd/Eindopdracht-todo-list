const taskInput = document.querySelector('form');
const taskList = document.getElementById('task-list');

const getTask = async () => {
    const url = 'http://localhost:3000/';
    const task = {description: document.querySelector('#add-task-input').value, done: false};
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(task),
        headers: { 
            "Content-Type": "application/json", 
        },
    });
    const json = await res.json();
    return json;
}
const deleteTask = event => event.target.parentNode.remove();
const scratchTask = event => event.target.nextSibling.classList.toggle('scratch');
const addTask = task => {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");
  let deleteButton = document.createElement("button");
  
  checkBox.type = "checkbox";
  checkBox.className = "checkbox";
  deleteButton.innerText = "🗑";
  deleteButton.className = "delete";
  label.innerText = task.description;
  label.className = "task";

  deleteButton.addEventListener("click", deleteTask);
  checkBox.addEventListener("change", scratchTask)
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  taskList.append(listItem);
}
taskInput.addEventListener('submit', event => {
	event.preventDefault();
    getTask().then(addTask);
});