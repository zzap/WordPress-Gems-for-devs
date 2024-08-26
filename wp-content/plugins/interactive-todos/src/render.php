<?php 
    $_todo_context = array(
        'todos' => [],
        "filters" => [
            ["label" => 'All', 'value' => 'all', 'selected' => true],
            ["label" => 'Active', 'value' => 'active', 'selected' => false],
            ["label" => 'Complete', 'value' => 'complete', 'selected' => false]
        ]
    );

?>


<div <?php echo wp_interactivity_data_wp_context( $_todo_context ); ?> data-wp-interactive="ahsan/todo-list">
    <div class="todoapp" >
        <header class="header">
            <input class="new-todo" placeholder="What needs to be done?" data-wp-on--keydown="actions.addTodo" autofocus>
        </header>
        <!-- This section should be hidden by default and shown when there are todos -->
        <section data-wp-class--hidden="!context.todos.length" class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" data-wp-on--input="actions.toggleAllTodo">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
                <template data-wp-each--todo="state.filterTodos">
                    <li data-wp-key="context.todo.id" data-wp-class--editing="context.todo.isEditing" data-wp-class--completed="context.todo.completed">
                        <div class="view">
                            <input class="toggle" type="checkbox" data-wp-on--input="actions.toggleTodo" data-wp-bind--data-id="context.todo.id" data-wp-bind--checked="context.todo.completed">
                            <label data-wp-bind--data-id="context.todo.id" data-wp-on--dblclick="actions.editTodo" data-wp-text="context.todo.text"></label>
                            <button data-wp-bind--data-id="context.todo.id" data-wp-on--click="actions.removeTodo" class="destroy"></button>
                        </div>
                        <input autofocus="" class="edit" data-wp-on--keydown="actions.doneEdtingViaEnterKey" data-wp-bind--data-id="context.todo.id" data-wp-on--blur="actions.doneEdtingViaBlurEvent" data-wp-bind--value="context.todo.text">
                    </li>
                </template>
            </ul>
        </section>
        <!-- This footer should be hidden by default and shown when there are todos -->
        <footer data-wp-class--hidden="!context.todos.length" class="footer">
            <span class="todo-count">
                <strong data-wp-text="state.incompleteTodos.length"></strong> 
                <span data-wp-text="state.itemsText"></span>
            </span>
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
                <template data-wp-each--filter="context.filters">
                    <li data-wp-key="context.filter.value">
                        <a data-wp-bind--data-filter-id="context.filter.value" data-wp-on--click="actions.selectFilter" data-wp-class--selected="context.filter.selected" data-wp-text="context.filter.label"></a>
                    </li>
                </template>
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button data-wp-on--click="actions.clearCompleteTodo" data-wp-class--hidden="!state.completedTodos.length" class="clear-completed">Clear completed</button>
        </footer>
    </div>
    <footer class="info">
        <p>Double-click to edit a todo</p>
        <!-- Change this out with your name and url ↓ -->
        <p>Created by <a href="https://github.com/ahsanshaheen199">Ahsan Habib Shaheen</a></p>
    </footer>
</div>
