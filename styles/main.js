// Modul import
const modul = document.querySelector('#modul-cont');
const icon = document.querySelector('#ico');

// Counter
function updateCount() {
    const todoItems = document.querySelectorAll('#to-do-list .todo');
    document.querySelector('.todo-count').textContent = todoItems.length;

    const inprogressItems = document.querySelectorAll('#in-progress .todo');
    document.querySelector('.in-count').textContent = inprogressItems.length;

    const stuckItems = document.querySelectorAll('#stuck .todo');
    document.querySelector('.stuck-count').textContent = stuckItems.length;

    const doneItems = document.querySelectorAll('#done .todo');
    document.querySelector('.done-count').textContent = doneItems.length;
}

// Show Modul
function showmodul() {
    modul.style.display = 'flex';
}

// Hide Modul
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

// Card value
const titleval = document.querySelector('#title-val');
const prival = document.querySelector('#priority-value');
const descval = document.querySelector('#desc');

// To Do Categories
const addTodo = document.querySelector('#todo-new');
const addCont = document.querySelector('#add-container');
const addinProgress = document.querySelector('#inprogress-container');
const addStuck = document.querySelector('#stuck-container');
const addDone = document.querySelector('#done-container');


// To Do List Card
function add() {
    const todo = document.querySelector('.todo');
    const warTitle = document.querySelector('#warTitle')
    const warDesc = document.querySelector('#warDesc')
    let add = todo.cloneNode(true);             // Cloning div i guess

    add.classList.remove("none");


    // Checks status then add
    if (stat.value == "todo") {
        addCont.appendChild(add);
    } if (stat.value == "inprogress") {
        addinProgress.appendChild(add);
    } if (stat.value == "stuck") {
        addStuck.appendChild(add);
    } if (stat.value == "done") {
        addDone.appendChild(add);
    }

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

    titleval.textContent = title.value      // Title value
    prival.textContent = priority.value     // Priority Value
    descval.textContent = desc.value        // Description Value
    modul.style.display = 'none';           // Hide modul


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


// Input import
const header = document.querySelector('#headerTxt');
const lower = document.querySelector('#lowerTxt');
const editTask = document.querySelector('#editTask');
const crtTask = document.querySelector('#crtTask');


// Edit Modul
function showedit(button) {
    const todoItem = button.closest('.todo');
    currentTodoItem = todoItem;

    // Getting selected todo content
    const titleEdit = todoItem.querySelector('.title-edit').textContent;
    const descEdit = todoItem.querySelector('.todo-desc').textContent;
    const priorityEdit = todoItem.querySelector('#priority-value').textContent;

    // Changing input value
    document.getElementById('title').value = titleEdit;
    document.getElementById('description').value = descEdit;
    document.getElementById('priority').value = priorityEdit;

    // Changing content
    modul.style.display = 'flex';
    header.textContent = 'Edit task info'
    lower.textContent = 'Edit info about your task'
    crtTask.style.display = 'none';
    editTask.style.display = 'flex';
    icon.src = "styles/img/edit.png";

}


// Edit Confirm button
function editSub() {
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


    if (currentTodoItem) {

        // Add new values
        const newTitle = document.getElementById('title').value;
        const newDesc = document.getElementById('description').value;
        const newPri = document.getElementById('priority').value;

        // Current input values
        currentTodoItem.querySelector('.title-edit').textContent = newTitle;
        currentTodoItem.querySelector('.todo-desc').textContent = newDesc;
        currentTodoItem.querySelector('#priority-value').textContent = newPri;


        currentTodoItem = null; // Back to null finish edit
    }


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

    modul.style.display = 'none';           // Hide modul

}

// Delete To Do List
function deleteTodo(button) {
    const deleteParent = button.closest('.todo'); // Button Cloesest class parent
    if (deleteParent) {
        deleteParent.remove();
    }
}

// Close Key bind (ESC)
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        hidemodul();
    }
});


// Updater
const observer = new MutationObserver(updateCount);
observer.observe(addCont, {
    childList: true,
    subtree: true
});
updateCount();


// Dragger function & loop i guess
let dragCont = document.querySelectorAll('.add-cont'); // Container of item
let card = document.querySelectorAll('.todo'); // Item
let dragItem = null;

for (let item of card) {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
}

function dragStart() {
    dragItem = this;
    setTimeout(() => this.style.display = "none", 0); // Hide item
    console.log('dragStart');
}

function dragEnd() {
    setTimeout(() => this.style.display = "flex", 0); // Show item
    dragItem = null;
    console.log('dragEnd');
}

for (let container of dragCont) {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('drop', drop);
}

function drop() {
    if (dragItem) {
        this.append(dragItem); // Append the dragged item to the container
        console.log('drop');
    }
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}
