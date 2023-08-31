import { useState, useEffect } from 'react';

function useFetch(url) {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			let res = await fetch(url);
			if (res.ok) {
				await res.json().then((user) => setData([...user]));
				setIsLoading(false);
			} else {
				setIsLoading(false);
				console.log('error');
				setError('error');
			}
		};
		fetchData();
	}, []);

	return [data, isLoading, error];
}

export default useFetch;
