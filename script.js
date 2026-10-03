let todos = [];

$(document).ready(function() {

    $("#addButton").click(function() {
        addTask();
    });

});


function addTask() {

    let taskInput = $("#taskInput");

    let task = taskInput.val().trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    let newTodo = {
        id: todos.length + 1,
        task: task,
        completed: false
    };

    todos.push(newTodo);

    displayTasks();

    taskInput.val("");
}


function displayTasks() {

    let taskList = $("#taskList");

    taskList.html("");

    for (let i = 0; i < todos.length; i++) {

        let li = $("<li>");

        li.html(`
            <span>${todos[i].task}</span>

            <button onclick="completeTask(${todos[i].id})">
                ${todos[i].completed ? "Undo" : "Complete"}
            </button>

            <button onclick="editTask(${todos[i].id})">
                Edit
            </button>

            <button onclick="deleteTask(${todos[i].id})">
                Delete
            </button>
        `);

        if (todos[i].completed) {
            li.css("text-decoration", "line-through");
        }

        taskList.append(li);
    }
}


function completeTask(id) {

    for (let i = 0; i < todos.length; i++) {

        if (todos[i].id === id) {
            todos[i].completed = !todos[i].completed;
            break;
        }
    }

    displayTasks();
}


function editTask(id) {

    for (let i = 0; i < todos.length; i++) {

        if (todos[i].id === id) {

            let newTask = prompt(
                "Edit your task:",
                todos[i].task
            );

            if (newTask !== null && newTask.trim() !== "") {
                todos[i].task = newTask.trim();
            }

            break;
        }
    }

    displayTasks();
}


function deleteTask(id) {

    for (let i = 0; i < todos.length; i++) {

        if (todos[i].id === id) {
            todos.splice(i, 1);
            break;
        }
    }

    displayTasks();
}