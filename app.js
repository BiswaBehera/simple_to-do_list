// jshint esversion:6

const addForm = document.querySelector(".add");

const list = document.querySelector(".todos");

const generateTemplate = todo => {

    var html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;

};

addForm.addEventListener("submit", e => {

    e.preventDefault();

    var todos = addForm.add.value.trim();
    if(todos.length) {
        generateTemplate(todos);
        addForm.reset();
    }

});
