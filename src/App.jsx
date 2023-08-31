import './App.css';
import TodoComponent from './components/TodoComponent';

// import Footer from './components/Footer';
// // import Header from './components/Header';
// import Main from './components/Main';
// import useFetch from './components/useFetch';
// import Functional_components from './components/functional_components';
// import Header from './components/ErrorBoundary';

function App() {
	// const { data, isloading, error } = useFetch(
	// 	'https://jsonplaceholder.typicode.com/users'
	// );
	// const [data, error] = useFetch(
	// 	'https://64b965d779b7c9def6c0fc17.mockapi.io/products'
	// );
	// console.log(data);

	return (
		<div className='App'>
			{/* <Header
				name='doggo'
				age='4'
			/>
			<Main />
			<Footer />
			<Functional_components />
			{data ? (
				data.map((user) => {
					return (
						<div
							className='card'
							key={user.id}>
							<h2>{user.name}</h2>
							<p>{user.createdAt}</p>
						</div>
					);
				})
			) : (
				<h1>{error}</h1>
			)} */}
			<TodoComponent />
		</div>
	);
}

export default App;
