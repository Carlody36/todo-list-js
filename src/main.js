import './style.css'
    
    function addTask() {
      const input = document.getElementById("new-task");
      const taskText = input.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = taskText;

      // Mark complete
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✔";
      completeBtn.onclick = () => {
        span.style.textDecoration = span.style.textDecoration === "line-through" ? "" : "line-through";
      };

      // Edit
      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.onclick = () => {
        const newText = prompt("Edit task:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
          span.textContent = newText.trim();
        }
      };

      // Delete
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = () => li.remove();

      li.appendChild(span);
      li.appendChild(completeBtn);
      li.appendChild(editBtn);
      li.appendChild(deleteBtn);

      document.getElementById("task-list").appendChild(li);
      input.value = "";
    }

    document.getElementById("add-btn").addEventListener("click", addTask);
