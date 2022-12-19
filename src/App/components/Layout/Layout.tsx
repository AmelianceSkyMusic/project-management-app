import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { ThemeIconToggle } from '~components/ThemeIconToggle';

import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {

	return (
		<>
			<Header />
			<Box
				component="main"
				sx={{
					overflow: 'hidden',
				}}
			>
				<Container
					maxWidth={false}
					sx={{
						maxWidth: '1320px', display: 'flex', flexDirection: 'column', gap: 12,
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
