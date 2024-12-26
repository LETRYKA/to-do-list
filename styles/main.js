// Modul

const modul = document.querySelector('#modul-cont');
const icon = document.querySelector('#ico');


function showmodul() {
    modul.style.display = 'flex';
}

function hidemodul() {
    modul.style.display = 'none';

    // Text Content edit

    header.textContent = 'Create new Task';
    lower.textContent = 'Enter the specific info about your task'
    crtTask.style.display = 'flex';
    editTask.style.display = 'none';
    icon.src = "styles/img/add.png"

    // Reset values

    title.value = '';
    desc.value = '';
    stat.value = 'todo';
    priority.value = 'Low';
}

// Values
const title = document.querySelector('#title');
const desc = document.querySelector('#description');
const stat = document.querySelector('#status');
const priority = document.querySelector('#priority');


const addTodo = document.querySelector('#todo-new');
const addCont = document.querySelector('#add-container');

// Card value

const titleval = document.querySelector('#title-val');
const prival = document.querySelector('#priority-value');
const descval = document.querySelector('#desc');

// Counter

function updateCount() {
    const todoItems = document.querySelectorAll('#to-do-list .todo');
    document.querySelector('.count').textContent = todoItems.length;
}


// To Do List Card

function add() {
    const todo = document.querySelector('.todo');
    const warTitle = document.querySelector('#warTitle')
    const warDesc = document.querySelector('#warDesc')
    let add = todo.cloneNode(true);

    if (!title.value) {                         // Require Title input
        warTitle.style.display = 'flex';
        return;
    } else if (title.value) {
        warTitle.style.display = 'none';
    }

    if (!desc.value) {                         // Require Desc input
        warDesc.style.display = 'flex';
        return;
    } else if (desc.value) {
        warDesc.style.display = 'none';
    }

    add.classList.remove("none");
    addCont.appendChild(add);
    titleval.textContent = title.value      // Title value
    prival.textContent = priority.value     // Priority Value
    descval.textContent = desc.value        // Description Value
    modul.style.display = 'none';


    // Priority Class condition

    if (priority.value == "High") {
        prival.classList.remove('low');
        prival.classList.remove('medium');
        prival.classList.add('high');
    } else if (priority.value == "Medium") {
        prival.classList.remove('low');
        prival.classList.remove('high');
        prival.classList.add('medium');
    } else if (priority.value === "Low") {
        prival.classList.remove('high');
        prival.classList.remove('medium');
        prival.classList.add('low');
    }

    // Clear Data

    title.value = '';
    desc.value = '';
    stat.value = 'todo';
    priority.value = 'Low';
}

// Delete To Do List

function deleteTodo(button) {
    const deleteParent = button.closest('.todo'); // Button Cloesest class parent
    if (deleteParent) {
        deleteParent.remove();
    }
}

const header = document.querySelector('#headerTxt');
const lower = document.querySelector('#lowerTxt');
const editTask = document.querySelector('#editTask');
const crtTask = document.querySelector('#crtTask');

function showedit(button) {

    // Changing content

    modul.style.display = 'flex';
    header.textContent = 'Edit task info'
    lower.textContent = 'Edit info about your task'
    crtTask.style.display = 'none';
    editTask.style.display = 'flex';
    icon.src = "styles/img/edit.png";

    //Value get

    title.value = titleval.textContent;
    priority.value = prival.textContent;
    desc.value = descval.textContent;
}


function editSub() {
    let add = todo.cloneNode(true);

    if (!title.value) {                         // Require Title input
        warTitle.style.display = 'flex';
        return;
    } else if (title.value) {
        warTitle.style.display = 'none';
    }

    if (!desc.value) {                         // Require Desc input
        warDesc.style.display = 'flex';
        return;
    } else if (desc.value) {
        warDesc.style.display = 'none';
    }

    add.classList.remove("none");
    addCont.appendChild(add);
    titleval.textContent = title.value      // Title value
    prival.textContent = priority.value     // Priority Value
    descval.textContent = desc.value        // Description Value
    modul.style.display = 'none';


    // Priority Class condition

    if (priority.value == "High") {
        prival.classList.remove('low');
        prival.classList.remove('medium');
        prival.classList.add('high');
    } else if (priority.value == "Medium") {
        prival.classList.remove('low');
        prival.classList.remove('high');
        prival.classList.add('medium');
    } else if (priority.value === "Low") {
        prival.classList.remove('high');
        prival.classList.remove('medium');
        prival.classList.add('low');
    }

    // Clear Data

    title.value = '';
    desc.value = '';
    stat.value = 'todo';
    priority.value = 'Low';

}

// Delete To Do List

function deleteTodo(button) {
    const deleteParent = button.closest('.todo'); // Button Cloesest class parent
    if (deleteParent) {
        deleteParent.remove();
    }
}

// Updater

const observer = new MutationObserver(updateCount);
observer.observe(addCont, {
    childList: true,
    subtree: true
});
updateCount();
