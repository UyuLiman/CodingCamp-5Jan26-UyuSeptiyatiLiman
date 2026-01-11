//Temporary Storage for Todo Items
let todos = [];

//Function to Add Todo Item
function addTodo() { 
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    if (todoInput.value === '' || todoDate.value === '') {
        alert('Please enter both todo item and due date.');
    } else {
        const newTodo = {
            task: todoInput.value,
            date: todoDate.value
        };
        todos.push(newTodo);

        console.log('Todo Added:', todos);
    }
}

//Fuction to Remove All Todo Items
function removeAllTodo() { }

//Function to Filter Todo Items
function filterTodo() { }