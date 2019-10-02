import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
	const [ darkMode, setDarkMode ] = useLocalStorage('dark');

	useEffect(
		() => {
			if (darkMode) {
				document.querySelector('body').classList.add('dark-mode');
			} else {
				document.querySelector('body').classList.remove('dark-mode');
			}
		},
		[ darkMode ]
	);

	return [ darkMode, setDarkMode ];
};
