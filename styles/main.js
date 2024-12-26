const addTodo = document.querySelector('#todo-new');
const addCont = document.querySelector('#add-container');

function add() {
    const todo = document.querySelector('#todo');
    let add = todo.cloneNode(true);

    add.classList.remove("none");
    addCont.appendChild(add);
}

function showmodul {
    const modul = document.querySelector('#modul');
    add.classList.remove("none");
}
