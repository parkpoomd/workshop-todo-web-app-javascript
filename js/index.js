const addTodoForm = document.querySelector('#add-todo-form');
const todoList = document.querySelector('.todos');
const search = document.querySelector('#search');

// add html
const generateTemplate = todo => {
    const html = `
        <li>
            <input type="checkbox">${todo}
            <button class="btn-delete-todo"></button>
        </li>
    `;

    todoList.innerHTML += html;
};

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

// filter todos
const filterTodos = (filter) => {
    // const todos = Array.from(todoList.children);
    // const result = todos.filter(todo => {
    //     return !todo.textContent.toLowerCase().includes(filter);
    // });
    // result.forEach(todo => {
    //     todo.classList.add('filtered');
    // });

    Array.from(todoList.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(filter))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(todoList.children)
        .filter(todo => todo.textContent.toLowerCase().includes(filter))
        .forEach(todo => todo.classList.remove('filtered'));
};

// keyup event
search.addEventListener('keyup', () => {
    const filter = search.value.trim().toLowerCase();
    filterTodos(filter);
});
