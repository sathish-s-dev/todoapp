/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../lib/features/todoSlice';

export function Todo({ todo }) {
	let dispatch = useDispatch();

	return (
		<div
			className={`${todo.status === 'active' ? 'bg-green-600' : ''}
            ${
							todo.status === 'completed' ? 'line-through bg-green-900' : ''
						} w-1/2 flex  items-center justify-between bg-gray-950 rounded-lg px-4 py-2 my-2`}
			key={todo.id}>
			<h2>{todo.title}</h2>
			<div
				className='hover:cursor-pointer hover:text-red-600 text-xl px-2 py-1 flex items-center justify-center h-10'
				onClick={() => {
					// let current = todos.find((t) => t.id === todo.id);
					// current.status = 'completed';
					// let newtodos = todos.filter((t) => t.id !== todo.id);
					// setTodos([...newtodos, current]);
					dispatch(removeTodo(todo.id));
				}}>
          X
        </div>
		</div>
	);
}
