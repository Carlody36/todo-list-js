import "./style.css";

// Load tasks from localStorage or initialize empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("new-task2");
const addBtn = document.getElementById("add-btn2");
const taskList = document.getElementById("task-list2");

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a new task
addBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (text === "") return;

  tasks.push({
    id: Date.now(), // unique id
    text: text,
    completed: false,
  });

  taskInput.value = "";
  saveTasks();
  render();
});

// Render all tasks
function render() {
  taskList.innerHTML = ""; // Clear the current list

  tasks.forEach((task) => {
    const li = document.createElement("li");

    // Task text
    const span = document.createElement("span");
    span.textContent = task.text;
    span.style.textDecoration = task.completed ? "line-through" : "none";
    li.appendChild(span);

    // Complete button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.addEventListener("click", () => {
      task.completed = !task.completed;
      saveTasks();
      render();
    });
    li.appendChild(completeBtn);

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      const newText = prompt("Edit task:", task.text);
      if (newText !== null && newText.trim() !== "") {
        task.text = newText.trim();
        saveTasks();
        render();
      }
    });
    li.appendChild(editBtn);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((t) => t.id !== task.id);
      saveTasks();
      render();
    });
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  });
}

// Initial render
render();
