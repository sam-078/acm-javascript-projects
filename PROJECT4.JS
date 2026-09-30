   //ALGORITHM: Simple To-Do List

// 1. SETUP
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// 2. EVENT LISTENER
addTaskBtn.onclick = function() {
    
    // 3. ADD TASK LOGIC
    let taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }

    let listItem = document.createElement("li");
    listItem.textContent = taskText;

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.onclick = function() {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);
    taskInput.value = "";
};