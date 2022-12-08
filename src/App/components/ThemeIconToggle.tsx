import { ReactComponent as DarkMode } from '@material-symbols/svg-400/rounded/dark_mode.svg';
import { ReactComponent as LightMode } from '@material-symbols/svg-400/rounded/light_mode.svg';
import { Fab } from '@mui/material';

import { Symbol } from '~components/Symbol';
import { useThemeToggle } from '~styles/themeMode/useThemeToggle';

export function ThemeIconToggle() {
	const { themeMode, toggleColorMode } = useThemeToggle();
	return (
		<Fab
			color="primary"
			onClick={toggleColorMode}
			sx={{
				position: 'fixed',
				right: '32px',
				bottom: '32px',
				boxShadow: 16,
			}}
		>
			<Symbol>{themeMode === 'dark' ? <DarkMode /> : <LightMode />}</Symbol>
		</Fab>
	);
}
