import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconButton, Typography } from '@mui/material';

import { PopoverMenu } from '~components/PopoverMenu';

export function HeaderLanguage() {
	const { i18n, t } = useTranslation();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleUaClick = () => {
		i18n.changeLanguage('ua');
		setAnchorEl(null);
	};
	const handleEnClick = () => {
		i18n.changeLanguage('en');
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
				<Typography variant="body1" sx={{ fontWeight: 'regular' }}>{t('lang')}</Typography>
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
