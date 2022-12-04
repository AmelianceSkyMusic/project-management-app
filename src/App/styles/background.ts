import { PaletteMode } from '@mui/material';

export function setBackground(mode: PaletteMode) {
	return {
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					'#root': {
						background: mode === 'light' ? 'linear-gradient(225.8deg, #FFD39F 11.51%, #FFA1A1 102.05%)' : 'black',
					},
				},
			},
		},
	};
}
