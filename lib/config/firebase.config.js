import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD9yfE4W5pUcgbHAKxfGl6DObu5y3eS0Sw',
	authDomain: 'fir-project-2b815.firebaseapp.com',
	projectId: 'fir-project-2b815',
	storageBucket: 'fir-project-2b815.appspot.com',
	messagingSenderId: '18751221548',
	appId: '1:18751221548:web:c9267c5145a8e51dca4689',
	measurementId: 'G-LJQR8RRY5G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
