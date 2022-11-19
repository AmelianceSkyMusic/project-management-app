import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import heroImg from '~assets/images/hero.png';

export function HeroBlock() {
	return (
		<Grid
			container
			spacing={{ sm: 3, xs: 2 }}
			sx={{
				display: 'flex', alignItems: 'center', height: '100vh', mt: '-64px',
			}}
		>
			<Grid
				xs={6}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 6,
					justifyContent: 'center',
				}}
			>
				<Typography
					variant="h1"
				>
					Project Management App
				</Typography>
				<Typography
					variant="h5"
					component="p"
				>
					Супер топовий додаток. Кращий від будь яких трелло і т. д. і т. п.
				</Typography>
			</Grid>
			<Grid
				xs={6}
				sx={{
					position: 'relative',
					display: 'flex',
					justifyContent: 'end',
				}}
			>
				<Box
					sx={{
						backgroundImage: `url(${heroImg})`,
						width: 500,
						height: 500,
						backgroundRepeat: 'no-repeat',
					}}
				/>
			</Grid>
		</Grid>
	);
}
