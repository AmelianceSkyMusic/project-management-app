import { PaletteMode } from '@mui/material';

import { darkPalette } from './darkPalette';
import { lightPalette } from './lightPalette';

export function getCustomPalette(mode: PaletteMode) {
	return {
		palette: {
			mode,
			...(mode === 'light' ? lightPalette : darkPalette),
		},
	};
}
