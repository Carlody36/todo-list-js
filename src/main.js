import './style.css'
    document.getElementById("add-btn").addEventListener("click", addTask);

    function addTask() {
      const input = document.getElementById("new-task");
      const taskText = input.value.trim();
      if (taskText === "") {
        alert("Please write something first!");
        return;
      }

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = taskText + " ";

      // Mark complete
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✔";
      completeBtn.addEventListener("click", () => {
    span.style.textDecoration =
      span.style.textDecoration === "line-through" ? "" : "line-through";
  });
 // --- Edit Button ---
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", () => {
    const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  // --- Delete Button ---
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Add elements into <li>
  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

      document.getElementById("task-list").appendChild(li);
      input.value = "";
    }

