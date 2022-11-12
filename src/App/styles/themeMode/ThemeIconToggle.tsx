import { ReactComponent as DarkModel } from '@material-symbols/svg-400/rounded/dark_mode.svg';
import { ReactComponent as LightMode } from '@material-symbols/svg-400/rounded/light_mode.svg';
import { Box, IconButton, SvgIcon } from '@mui/material';

import { useThemeToggle } from './useThemeToggle';

export function ThemeIconToggle() {
	const { themeMode, toggleColorMode } = useThemeToggle();
	return (
		<Box
			sx={{
				backgroundColor: 'primary.dark',
				width: '40px',
				height: '40px',
				zIndex: '100',
				position: 'fixed',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				right: '32px',
				bottom: '32px',
				borderRadius: '50%',
			}}
		>
			<IconButton color="primary" onClick={toggleColorMode}>
				<SvgIcon viewBox="0 0 48 48">{themeMode === 'dark' ? <DarkModel /> : <LightMode /> }</SvgIcon>
			</IconButton>
		</Box>
	);
}
