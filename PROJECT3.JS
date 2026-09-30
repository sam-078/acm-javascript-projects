   //ALGORITHM: To-Do List Tracker


// 1. SETUP: Load from LocalStorage or use a default list
let todoList = JSON.parse(localStorage.getItem('todoList')) || [
  { name: 'Finish homework', dueDate: '2026-10-01' },
  { name: 'Buy groceries', dueDate: '2026-10-02' }
];

// 4. INITIALIZATION
renderTodoList();


// 2. RENDER FUNCTION
function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    let name = todoObject.name;
    let dueDate = todoObject.dueDate;

    
    let html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

  
  document.querySelector('.js-todo-container').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach(function(deleteButton, index) {
      deleteButton.addEventListener('click', function() {
        todoList.splice(index, 1);
        
        saveToStorage();
        renderTodoList();
      });
    });
}


// 3. ADD TASK LOGIC
document.querySelector('.js-add-todo-button').addEventListener('click', function() {
  let nameInput = document.querySelector('.js-name-input');
  let dateInput = document.querySelector('.js-due-date-input');

  let name = nameInput.value;
  let dueDate = dateInput.value;

  if (name === '') {
    return;
  }

  todoList.push({
    name: name,
    dueDate: dueDate
  });

  nameInput.value = '';
  dateInput.value = '';

  saveToStorage();
  renderTodoList();
});


function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}