import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { ThemeIconToggle } from '../ThemeIconToggle';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {

	return (
		<>
			<Header />
			<Box component="main">
				<Container
					maxWidth={false}
					sx={{
						maxWidth: '1320px', display: 'flex', flexDirection: 'column', gap: 16, pb: 16,
					}}
				>
					<Outlet />
				</Container>
			</Box>
			<Footer />
			<ThemeIconToggle />
		</>
	);
}
