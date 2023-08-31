import './main.css';
import axios from 'axios';

import { useRef } from 'react';

function Main() {
	class User {
		constructor(name, email, password) {
			this.name = name;
			this.email = email;
			this.password = password;
		}
	}
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	return (
		<main>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const user = new User(
						nameRef.current.value,
						emailRef.current.value,
						passwordRef.current.value
					);
					console.log(user);
					axios.post('http://localhost:3000/users', user);
					emailRef.current.value = '';
					nameRef.current.value = '';
					passwordRef.current.value = '';
				}}>
				<h2>Login</h2>

				<label htmlFor='name'>
					Name:
					<input
						type='text'
						id='name'
						ref={nameRef}
					/>
				</label>
				<label htmlFor='email'>
					Email:
					<input
						type='email'
						id='email'
						ref={emailRef}
					/>
				</label>
				<label htmlFor='password'>
					Password:
					<input
						type='password'
						id='password'
						ref={passwordRef}
					/>
				</label>
				<button type='submit'>Submit</button>
			</form>
		</main>
	);
}

export default Main;
