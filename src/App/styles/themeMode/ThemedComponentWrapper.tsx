import React, {
	createContext,
	useMemo,
	useState,
} from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { themedComponents } from '../themedComponents';
import { typography } from '../typography';

export const ColorModeContext = createContext({ toggleColorMode: () => { /**/ } });

interface IThemedComponentProps {
	children: React.ReactElement;
 }

export function ThemedComponentWrapper({ children }: IThemedComponentProps) {
	const [mode, setMode] = useState<'light' | 'dark'>(() => {
		if (localStorage.getItem('projectManagementApp')) {
			const pma = localStorage.getItem('projectManagementApp') as string;
			return JSON.parse(pma).themeMode;
		}
		return 'light';
	});

	const colorMode = useMemo(() => ({
		toggleColorMode: () => { setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')); },
	}), []);
	const theme = useMemo(() => createTheme({
		palette: { mode }, // change theme
		...themedComponents, // set custom themed components
		...typography,
	}), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
