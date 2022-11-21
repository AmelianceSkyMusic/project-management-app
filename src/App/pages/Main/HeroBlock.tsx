import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import heroImg from '~assets/images/hero.png';

export function HeroBlock() {
	return (
		<Grid
			component="section"
			container
			spacing={{ ss: 5, xl: 3 }}
			sx={{
				display: 'flex', flexDirection: { ss: 'column', xl: 'row' }, justifyContent: 'center', height: '100vh', mt: '-64px',
			}}
		>
			<Grid
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: 6,
					justifyContent: { ss: 'end', xl: 'center' },
				}}
				ss={12}
				xl={6}
				order={{ ss: 2, xl: 1 }}
			>
				<Typography
					variant="h1"
					sx={{
						fontSize: {
							ss: '42px', sm: '64px', xl: '88px',
						},
					}}
				>
					Project
					<br />
					Management
					<br />
					App
				</Typography>
				<Typography
					variant="h5"
					component="p"
				>
					Супер топовий додаток. Кращий від будь яких трелло і т. д. і т. п.
				</Typography>
			</Grid>
			<Grid
				sx={{
					display: 'flex',
					justifyContent: { ss: 'center', sm: 'end', xl: 'center' },
					alignItems: { xl: 'center' },
				}}
				ss={12}
				xl={6}
				order={{ ss: 1, xl: 2 }}
			>
				<Box
					sx={{
						position: { ss: 'relative', xl: 'static' },
						top: {
							ss: 0, sm: '50px', lg: '100px', xl: '-200px',
						},
						right: {
							ss: 0, sm: '50px', lg: '100px', xl: 0,
						},
						backgroundImage: `url(${heroImg})`,
						width: '155px',
						height: '200px',
						backgroundRepeat: 'no-repeat',
					}}
				/>
			</Grid>
		</Grid>
	);
}
