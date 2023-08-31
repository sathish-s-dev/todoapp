import { useSelector } from 'react-redux';
import { Todo } from './Todo';

import { useRef } from 'react';
import { addTodo } from '../../lib/features/todoSlice';
import { useDispatch } from 'react-redux';

function TodoComponent() {
	const todos = useSelector((state) => state.todoReducer.todos);

	return (
		<div className='flex flex-col items-center max-w-5xl gap-4'>
			<h1 className='text-3xl font-bold shadow-lg'>Todo List</h1>
			<AddTodo />
			{todos.map((todo) => {
				return (
					<>
						<Todo
							key={todo.id}
							todo={todo}
						/>
					</>
				);
			})}
		</div>
	);
}

export default TodoComponent;

function AddTodo() {
	let inputRef = useRef();
	const dispatch = useDispatch();
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				let title = inputRef.current.value;
				dispatch(addTodo({ title }));
				inputRef.current.value = '';
			}}
			className='flex gap-2 items-center w-full justify-center'>
			<input
				type='text'
				className='my-2 w-1/3 px-4 py-2 rounded-md border-gray-700 border accent-green-600'
				ref={inputRef}
			/>
			<input
				type='submit'
				value={'Add Todo'}
				className='my-2 px-6 py-2 rounded-md bg-green-600 text-white'
			/>
		</form>
	);
}
