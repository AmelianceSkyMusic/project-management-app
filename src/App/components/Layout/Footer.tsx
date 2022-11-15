import { Box, Container, Link } from '@mui/material';

export function Footer() {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: 'primary.main', width: '100%', pt: '16px', pb: '16px',
			}}
		>
			<Container
				maxWidth={false}
				sx={{ maxWidth: '1320px' }}
			>
				<Link
					sx={{ color: 'secondary.contrastText' }}
					underline="hover"
					href="https://github.com/AmelianceSkyMusic/project-management-app"
					target="_blank"
					className="link underlined"
					rel="noreferrer"
				>
					project-management-app © 2022
				</Link>
			</Container>
		</Box>
	);
}
