import TodoList from "./TodoList.js";

$(document).ready(() => {
    $('#wd-todo').append(`
        <div class="container">
            <h1>Todo example</h1>
            ${TodoList()}
        </div>
    `);
});