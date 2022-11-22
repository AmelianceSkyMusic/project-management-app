import { useState } from 'react';

import { IconButton, Typography } from '@mui/material';

import { PopoverMenu } from '~components/PopoverMenu';

export function HeaderLanguage() {

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleUaClick = () => {
		console.log('ua');
		setAnchorEl(null);
	};
	const handleEnClick = () => {
		console.log('en');
		setAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton
				onClick={handleMenuClick}
				sx={{ height: '40px', width: '40px', my: 'auto' }}
			>
				<Typography variant="body1" sx={{ fontWeight: 'regular' }}>UA</Typography>
			</IconButton>
			<PopoverMenu
				anchorEl={anchorEl}
				menuItems={[
					['Українська', handleUaClick],
					['English', handleEnClick],
				]}
				open={!!anchorEl}
				onClose={handleMenuClose}
			/>
		</>
	);
}
