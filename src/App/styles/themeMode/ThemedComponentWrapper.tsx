import React, {
	createContext,
	useMemo,
	useState,
} from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import lodashMerge from 'lodash/merge';

import { getCustomPalette } from '../customPalette/getCustomPalette';
import { customStyles } from '../customStyles';

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
	const theme = useMemo(() => createTheme(lodashMerge(
		customStyles, // Custom styles object
		getCustomPalette(mode), // Should be last! Change theme mode
	)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
