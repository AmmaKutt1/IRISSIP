// Get necessary elements from the DOM
const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task to the list
function addTask(event) {
  event.preventDefault();
  
  // Get the task input value
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    // Create a new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-button">Delete</button>
    `;
    
    // Add event listener to the delete button
    const deleteButton = listItem.querySelector('.delete-button');
    deleteButton.addEventListener('click', deleteTask);
    
    // Append the new list item to the task list
    taskList.appendChild(listItem);
    
    // Clear the task input
    taskInput.value = '';
  }
}

// Delete a task from the list
function deleteTask() {
  const listItem = this.parentNode;
  
  // Add the "deleted" class for animation
  listItem.classList.add('deleted');
  
  // Remove the list item after the animation ends
  listItem.addEventListener('animationend', function() {
    listItem.remove();
  });
}

// Add event listener to the form submit event
form.addEventListener('submit', addTask);
