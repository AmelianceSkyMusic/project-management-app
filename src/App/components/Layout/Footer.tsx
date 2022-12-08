import {
	Box, Container, Link, LinkProps,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { GitHubIcon } from '~components/svg/GitHubIcon';
import { RSSLogo } from '~components/svg/RSSLogo';

function FooterLink(props: LinkProps) {
	return (
		<Link
			variant="body2"
			fontWeight="700"
			underline="hover"
			target="_blank"
			className="link underlined"
			rel="noreferrer"
			sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}
			{...props}
		/>
	);
}

export function Footer() {
	return (
		<Box component="footer" sx={{ width: '100%', pt: '16px', pb: '16px' }}>
			<Container maxWidth={false} sx={{ maxWidth: '1320px' }}>
				<Grid container spacing={{ ss: 2, xl: 3 }}>
					<Grid
						ss={12}
						sm={6}
						xl={3}
						sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}
						order={{ ss: 5, sm: 4, xl: 1 }}
					>
						<Link href="https://rs.school/react/" target="_blank" rel="noreferrer" sx={{ width: '58px', height: '24px' }}>
							<RSSLogo color="primary" sx={{ width: '58px', height: '24px' }} />
						</Link>
					</Grid>
					<Grid
						ss={12}
						sm={6}
						xl={2}
						sx={{ display: 'flex', justifyContent: { ss: 'start', xl: 'end' }, alignItems: 'center' }}
						order={{ ss: 2, sm: 3, xl: 2 }}
					>
						<FooterLink href="https://github.com/Bittersweet-girl">
							<GitHubIcon />
							Bittersweet-girl
						</FooterLink>
					</Grid>
					<Grid
						ss={12}
						sm={6}
						xl={2}
						sx={{ display: 'flex', justifyContent: { ss: 'start', xl: 'center' }, alignItems: 'center' }}
						order={{ ss: 1, sm: 1, xl: 3 }}
					>
						<FooterLink href="https://github.com/Mazayw">
							<GitHubIcon />
							Mazayw
						</FooterLink>
					</Grid>
					<Grid
						ss={12}
						sm={6}
						xl={2}
						sx={{ display: 'flex', justifyContent: { ss: 'start', xl: 'start' }, alignItems: 'center' }}
						order={{ ss: 3, sm: 5, xl: 4 }}
					>
						<FooterLink href="https://github.com/AmelianceSkyMusic">
							<GitHubIcon />
							AmelianceSkyMusic
						</FooterLink>
					</Grid>
					<Grid
						ss={12}
						sm={6}
						xl={3}
						sx={{ display: 'flex', justifyContent: { ss: 'start', xl: 'end' }, alignItems: 'center' }}
						order={{ ss: 4, sm: 2, xl: 5 }}
					>
						<FooterLink href="https://github.com/AmelianceSkyMusic/project-management-app">
							pam © 2022
						</FooterLink>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
