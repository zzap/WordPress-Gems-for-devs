/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from "@wordpress/interactivity";
import { Todo, TodosContext } from "./types";

const { state } = store("ahsan/todo-list", {
  state: {
    get completedTodos() {
      const { todos } = getContext<TodosContext>();

      return todos.length ? todos.filter((todo) => todo.completed) : [];
    },
    get incompleteTodos() {
      const { todos } = getContext<TodosContext>();

      return todos.length ? todos.filter((todo) => !todo.completed) : [];
    },
    get itemsText() {
      const { todos } = getContext<TodosContext>();

      return todos.length && todos.length > 1 ? "items left" : "item left";
    },
    get filterTodos(): Todo[] {
      const context = getContext<TodosContext>();
      const findSelectedFilter = context?.filters.find(
        (filter) => filter.selected
      );

      if (findSelectedFilter?.value === "active") {
        return state.incompleteTodos;
      } else if (findSelectedFilter?.value === "complete") {
        return state.completedTodos;
      } else {
        return context?.todos ?? [];
      }
    },
  },
  actions: {
    addTodo: (event: KeyboardEvent) => {
      const target = event.target as HTMLInputElement;

      if (event.key === "Enter" && target.value !== "") {
        const context = getContext<TodosContext>();
        context.todos.push({
          id: new Date().getMilliseconds().toString(),
          text: target.value,
          completed: false,
          isEditing: false,
        });
        target.value = "";
      }
    },
    toggleTodo: () => {
      const { ref } = getElement();
      const id = ref.dataset.id;
      const context = getContext<TodosContext>();
      context.todos = context.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
    },
    toggleAllTodo: () => {
      const context = getContext<TodosContext>();
      context.todos = context.todos.map((todo) => ({
        ...todo,
        completed: !todo.completed,
      }));
    },
    editTodo: () => {
      const { ref } = getElement();

      const id = ref.dataset.id;
      const context = getContext<TodosContext>();
      context.todos = context.todos.map((todo) =>
        todo.id === id
          ? { ...todo, isEditing: true }
          : { ...todo, isEditing: false }
      );
    },
    doneEdtingViaBlurEvent: (event: KeyboardEvent) => {
      const target = event.target as HTMLInputElement;
      const { ref } = getElement();
      const id = ref.dataset.id;

      const value = target.value;
      if (value !== "") {
        const context = getContext<TodosContext>();
        context.todos = context.todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: false, text: value } : todo
        );
      }
    },
    doneEdtingViaEnterKey: (event: KeyboardEvent) => {
      const target = event.target as HTMLInputElement;

      const { ref } = getElement();
      const id = ref.dataset.id;
      const value = target.value;
      if (value !== "" && event.key === "Enter") {
        const context = getContext<TodosContext>();
        context.todos = context.todos.map((todo) =>
          todo.id === id ? { ...todo, isEditing: false, text: value } : todo
        );
      }
    },
    selectFilter: () => {
      const context = getContext<TodosContext>();
      const { ref } = getElement();
      const filterId = ref.dataset.filterId as string;
      context.filters = context.filters.map((filter) =>
        filter.value === filterId
          ? { ...filter, selected: true }
          : { ...filter, selected: false }
      );
    },
    clearCompleteTodo: () => {
      const context = getContext<TodosContext>();
      context.todos = context.todos.filter((todo) => !todo.completed);
    },
    removeTodo: () => {
      const { ref } = getElement();
      const id = ref.dataset.id;
      const context = getContext<TodosContext>();
      context.todos = context.todos.filter((todo) => todo.id !== id);
    },
  },
});
