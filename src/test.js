 function addTask() {
      const input = document.getElementById("new-task2");
      const taskText = input.value.trim();
      if (taskText === "") {
        alert("Enter a Task");
        return;
      }
      
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = taskText;
           li.appendChild(span);
                 document.getElementById("task-list2").appendChild(li);
      input.value = "";

      // Mark complete
      const completeBtn = document.createElement("button");
      completeBtn.textContent = "✔";
      completeBtn.addEventListener("click", () => {
    span.style.textDecoration =
      span.style.textDecoration === "line-through" ? "" : "line-through";
  });

          // edit button
          const editBtn = document.createElement('button');
          editBtn.textContent = "Edit"
             editBtn.addEventListener("click", () => {
  const newText = prompt("Edit task:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
            
  });


          // delete button
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = "Delete"
                    deleteBtn.addEventListener("click", () => {
      li.remove();
  });


    li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(editBtn)
  li.appendChild(deleteBtn)
      



      document.getElementById("task-list2").appendChild(li);
      input.value = "";


   

    
    }
        document.getElementById("add-btn2").addEventListener("click", addTask);

