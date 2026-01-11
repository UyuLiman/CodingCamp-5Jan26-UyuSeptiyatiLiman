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
            item: todoInput.value,
            date: todoDate.value
        };
        todo.push(newTodo);

        console.log('Todo item added:', todos);

    console.log(todoInput.value);
    console.log(todoDate.value);
}

//Fuction to Remove All Todo Items
function removeAllTodo() { }

//Function to Filter Todo Items
function filterTodo() { }