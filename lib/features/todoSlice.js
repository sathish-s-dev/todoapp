import { createSlice, nanoid } from '@reduxjs/toolkit';
import data from '../../todo.json';
const initialState = {
	todos: [...data],
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			let todo = {
				id: nanoid(),
				title: action.payload.title,
				status: 'active',
			};
			console.log(todo);
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			console.log(state, action);
			state.todos = state.todos.filter((t) => t.id !== action.payload);
			console.log(state);
		},
	},
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
