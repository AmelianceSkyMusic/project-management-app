import { useContext, useEffect } from 'react';

import { useTheme } from '@mui/material/styles';

import { ColorModeContext } from './ThemedComponent';

export function useThemeToggle() {
	const theme = useTheme();

	const colorMode = useContext(ColorModeContext);

	localStorage.setItem('projectManagementApp', JSON.stringify({ themeMode: theme.palette.mode }));

	return { themeMode: theme.palette.mode, toggleColorMode: colorMode.toggleColorMode };
}
