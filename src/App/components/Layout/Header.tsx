import { NavLink } from 'react-router-dom';

import {
	AppBar, Box, Link, Toolbar,
} from '@mui/material';

import { Logo } from '../Logo';

export function Header() {
	return (
		<AppBar position="relative">
			<Toolbar sx={{ gap: 3 }}>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 2 }}>
					<Logo />
				</Box>
				<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
					<Link
						sx={{
							my: 2, color: 'white',
						}}
						underline="hover"
						component={NavLink}
						end
						to="/"
					>
						Main
					</Link>
					<Link
						sx={{
							my: 2, color: 'white', display: 'flex', justifyContent: 'center',
						}}
						underline="hover"
						component={NavLink}
						to="board"
					>
						Board
					</Link>
					<Link
						sx={{
							my: 2, color: 'white', display: 'flex', justifyContent: 'center',
						}}
						underline="hover"
						component={NavLink}
						to="login"
					>
						Log In
					</Link>
					<Link
						sx={{
							my: 2, color: 'white', display: 'flex', justifyContent: 'center',
						}}
						underline="hover"
						component={NavLink}
						to="signin"
					>
						Sign In
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
