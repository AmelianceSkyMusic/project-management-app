import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Dashboard } from '@material-symbols/svg-400/rounded/dashboard.svg';
import { ReactComponent as Home } from '@material-symbols/svg-400/rounded/home.svg';
import {
	AppBar, Box, IconButton, Link, SvgIcon, Toolbar,
} from '@mui/material';

import { Logo } from '../Logo';

export function Header() {
	const { pathname } = useLocation();
	return (
		<AppBar position="relative">
			<Toolbar sx={{ gap: 3 }}>
				<Box
					component={NavLink}
					end
					to="/"
					sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}
				>
					<Logo />
				</Box>
				<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
					<Link
						sx={{
							my: 2,
							color: 'white',
							display: 'flex',
							justifyContent: 'center',
							'&.active': {
								fontWeight: 700,
							},
						}}
						underline="hover"
						component={NavLink}
						to="login"
					>
						Log In
					</Link>
					<Link
						sx={{
							my: 2,
							color: 'white',
							display: 'flex',
							justifyContent: 'center',
							'&.active': {
								fontWeight: 700,
							},
						}}
						underline="hover"
						component={NavLink}
						to="signup"
					>
						SignUp
					</Link>
					{pathname !== '/'
						? (
							<IconButton
								component={NavLink}
								end
								to="/"
								color="inherit"
								sx={{
									height: '40px', width: '40px', my: 'auto',
								}}
							>
								<SvgIcon>
									<SvgIcon><Home /></SvgIcon>
								</SvgIcon>
							</IconButton>
						)
						: (
							<IconButton
								component={NavLink}
								to="board"
								color="inherit"
								sx={{
									height: '40px', width: '40px', my: 'auto',
								}}
							>
								<SvgIcon>
									<SvgIcon><Dashboard /></SvgIcon>
								</SvgIcon>
							</IconButton>
						)}
				</Box>
			</Toolbar>
		</AppBar>
	);
}
