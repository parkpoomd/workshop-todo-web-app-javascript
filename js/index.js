const addTodoForm = document.querySelector('#add-todo-form');
const todoList = document.querySelector('.todos');

// add html
const generateTemplate = todo => {
    const html = `
        <li>
            <input type="checkbox">${todo}
            <button class="btn-delete-todo"></button>
        </li>
    `;

    todoList.innerHTML += html;
}

// add todo
addTodoForm.addEventListener('submit', event => {
    event.preventDefault();

    const todo = addTodoForm['add-todo-input'].value.trim();

    if (todo) {
        generateTemplate(todo);
        addTodoForm.reset();
    }
});

// delete todo
todoList.addEventListener('click', event => {
    if (event.target.classList.contains('btn-delete-todo')) {
        event.target.parentElement.remove();
    }
});

// checkbox event
todoList.addEventListener('change', event => {
    if (event.target.checked) {
        event.target.parentElement.classList.add('done');
    } else {
        event.target.parentElement.classList.remove('done');
    }
});
