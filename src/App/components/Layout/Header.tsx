import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as DashboardIcon } from '@material-symbols/svg-400/rounded/dashboard.svg';
import { ReactComponent as HomeIcon } from '@material-symbols/svg-400/rounded/home.svg';
import {
	AppBar, Box, IconButton, Link, Toolbar,
} from '@mui/material';

import { AppLogo } from '~components/svg/AppLogo';
import { Symbol } from '~components/Symbol';

import { HeaderLanguage } from './HeaderLanguage';
import { HeaderMenu } from './HeaderMenu';

export function Header() {
	const { t } = useTranslation();
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
							{t('login')}
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
							{t('signup')}
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
								<Symbol><HomeIcon /></Symbol>
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
								<Symbol><DashboardIcon /></Symbol>
							</IconButton>
						)}
					{pathname !== '/login' && pathname !== '/signup' && <HeaderMenu />}
					<HeaderLanguage />
				</Box>
			</Toolbar>

		</AppBar>
	);
}
