import {
	Box, Button, Container, Link, LinkProps,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { RSSLogo } from '../RSSLogo';

function FooterLink(props: LinkProps) {
	return (
		<Link
			fontWeight="700"
			underline="hover"
			target="_blank"
			className="link underlined"
			rel="noreferrer"
			{...props}
		/>
	);
}

export function Footer() {
	return (
		<Box component="footer" sx={{ width: '100%', pt: '16px', pb: '16px' }}>
			<Container maxWidth={false} sx={{ maxWidth: '1320px' }}>
				<Grid container spacing={{ sm: 3, xs: 2 }}>
					<Grid xs={3} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
						<Button href="https://rs.school/react/" target="_blank" rel="noreferrer">
							<RSSLogo color="primary" sx={{ width: '68px', height: '24px' }} />
						</Button>
					</Grid>
					<Grid xs={2} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
						<FooterLink href="https://github.com/Bittersweet-girl">
							Nataly Sakhno
						</FooterLink>
					</Grid>
					<Grid xs={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<FooterLink href="https://github.com/Mazayw">
							Mazayw
						</FooterLink>
					</Grid>
					<Grid xs={2} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
						<FooterLink href="https://github.com/AmelianceSkyMusic">
							AmelianceSkyMusic
						</FooterLink>
					</Grid>
					<Grid xs={3} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
						<FooterLink href="https://github.com/AmelianceSkyMusic/project-management-app">
							pma © 2022
						</FooterLink>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
