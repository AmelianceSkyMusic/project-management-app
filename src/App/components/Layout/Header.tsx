import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Dashboard } from '@material-symbols/svg-400/rounded/dashboard.svg';
import { ReactComponent as Home } from '@material-symbols/svg-400/rounded/home.svg';
import { ReactComponent as Menu } from '@material-symbols/svg-400/rounded/menu.svg';
import {
	AppBar, Box, IconButton, Link, Toolbar, Typography,
} from '@mui/material';

import { AppLogo } from '~components/svg/AppLogo';
import { Symbol } from '~components/Symbol';

export function Header() {
	const { pathname } = useLocation();
	return (
		<AppBar position={pathname === '/board' ? 'sticky' : 'relative'} sx={{ background: 'transparent', boxShadow: 'none' }}>
			<Toolbar sx={{ gap: 3 }}>
				<Box
					component={NavLink}
					end
					to="/"
					sx={{ flexGrow: 1, display: { ss: 'flex', md: 'flex' }, gap: 2 }}
				>
					<AppLogo />
				</Box>
				<Box sx={{ display: { ss: 'none', md: 'flex' }, gap: 2 }}>
					{pathname !== '/login' && (
						<Link
							sx={{
								my: 2,
								display: 'flex',
								justifyContent: 'center',
								'&.active': {
									fontWeight: 700,
								},
							}}
							underline="hover"
							component={NavLink}
							to="/login"
						>
							Увійти
						</Link>
					)}
					{pathname !== '/signup' && (
						<Link
							sx={{
								my: 2,
								display: 'flex',
								justifyContent: 'center',
								'&.active': {
									fontWeight: 700,
								},
							}}
							underline="hover"
							component={NavLink}
							to="/signup"
						>
							Створити аккаунт
						</Link>
					)}
				</Box>
				<Box sx={{ display: 'flex' }}>
					{pathname !== '/'
						? (
							<IconButton
								component={NavLink}
								end
								to="/"
								sx={{
									height: '40px',
									width: '40px',
									my: 'auto',
								}}
							>
								<Symbol><Home /></Symbol>
							</IconButton>
						)
						: (
							<IconButton
								component={NavLink}
								to="/board"
								sx={{
									height: '40px',
									width: '40px',
									my: 'auto',
								}}
							>
								<Symbol><Dashboard /></Symbol>
							</IconButton>
						)}
					<IconButton
						sx={{
							display: { ss: 'flex', md: 'none' }, height: '40px', width: '40px', my: 'auto',
						}}
					>
						<Symbol><Menu /></Symbol>
					</IconButton>
					<IconButton sx={{ height: '40px', width: '40px', my: 'auto' }}>
						<Typography variant="body1" sx={{ fontWeight: 'regular' }}>UA</Typography>
					</IconButton>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
