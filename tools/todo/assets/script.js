const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

const savedTasks = localStorage.getItem('tasks');
const tasks = savedTasks ? JSON.parse(savedTasks) : [];

displayTasks();

window.addTask = function () {
    const taskValue = taskInput.value.trim();
    if (taskValue !== '' && tasks.length < 10) {
        tasks.push(taskValue);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        taskInput.value = '';
    }
};

taskList.addEventListener('click', function (e) {
    const element = e.target;
    const listItem = element.closest('li');
    if (listItem) {
        const index = Array.from(listItem.parentNode.children).indexOf(listItem);
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
});

function displayTasks() {
    taskList.innerHTML = '';

    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `${i + 1}. ${tasks[i]}`;
        taskList.appendChild(listItem);
    }
}