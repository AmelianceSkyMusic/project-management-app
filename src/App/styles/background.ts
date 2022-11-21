import { PaletteMode } from '@mui/material';

export function setBackground(mode: PaletteMode) {
	return {
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					'#root': {
						background: mode === 'light' ? 'linear-gradient(230deg,#a1b7ff,#9ff1ff)' : 'black',
					},
				},
			},
		},
	};
}
