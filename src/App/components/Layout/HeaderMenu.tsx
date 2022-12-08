import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as MenuIcon } from '@material-symbols/svg-400/rounded/menu.svg';
import { IconButton } from '@mui/material';

import { PopoverMenu } from '~components/PopoverMenu';
import { Symbol } from '~components/Symbol';

export function HeaderMenu() {

	const navigate = useNavigate();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuSigninClick = () => {
		navigate('/singin');
		setAnchorEl(null);
	};
	const handleMenuSignupClick = () => {
		navigate('/signup');
		setAnchorEl(null);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton
				onClick={handleMenuClick}
				sx={{
					display: { ss: 'flex', md: 'none' }, height: '40px', width: '40px', my: 'auto',
				}}
			>
				<Symbol><MenuIcon /></Symbol>
			</IconButton>
			<PopoverMenu
				anchorEl={anchorEl}
				menuItems={[
					['Увійти', handleMenuSigninClick],
					['Створити аккаунт', handleMenuSignupClick],
				]}
				open={!!anchorEl}
				onClose={handleMenuClose}
			/>
		</>
	);
}
