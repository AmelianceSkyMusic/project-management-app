import { useContext } from 'react';

import { useTheme } from '@mui/material/styles';

import { ColorModeContext } from './ThemedComponentWrapper';

export function useThemeToggle() {
	const theme = useTheme();

	const colorMode = useContext(ColorModeContext);

	localStorage.setItem('projectManagementApp', JSON.stringify({ themeMode: theme.palette.mode }));

	return { themeMode: theme.palette.mode, toggleColorMode: colorMode.toggleColorMode };
}
