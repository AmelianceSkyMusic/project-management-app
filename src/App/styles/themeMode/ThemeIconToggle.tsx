/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, IconButton } from '@mui/material';

import { useThemeToggle } from './useThemeToggle';

export function ThemeIconToggle() {
	const { themeMode, toggleColorMode } = useThemeToggle();
	return (
		<Box
			sx={{ backgroundColor: 'primary.dark' }}
			css={css`
				width: 48px;
				height: 48px;
				z-index: 100;
				position: fixed;
				display: flex;
				justify-content: center;
				align-items: center;
				right: 32px;
				bottom: 32px;
				border-radius: 50%;
			`}
		>
			<IconButton
				className="material-symbols-rounded"
				onClick={toggleColorMode}
			>
				{themeMode === 'dark' ? 'brightness_4' : 'brightness_7' }
			</IconButton>
		</Box>
	);
}
