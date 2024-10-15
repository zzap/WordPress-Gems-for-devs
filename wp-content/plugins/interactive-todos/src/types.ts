export type Todo = {
	id: string;
	text: string;
	isEditing: boolean;
	completed: boolean;
};

export type Filter = {
	label: string;
	value: string;
	selected: boolean;
};

export type TodosContext = {
	todos: Todo[];
	filters: Filter[];
};
