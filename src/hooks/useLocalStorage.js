import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
	if (typeof key !== 'string') {
		throw new Error('Invalid params: key is not a string.');
	}

	const [ storedValue, setStoredValue ] = useState(() => {
		if (window.localStorage.getItem(key)) {
			return JSON.parse(window.localStorage.getItem(key));
		} else {
			window.localStorage.setItem(key, JSON.stringify(initialValue));
			return initialValue;
		}
	});

	const setValue = (value) => {
		//update the stored value state property
		//update localStorage value
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [ storedValue, setValue ];
};
