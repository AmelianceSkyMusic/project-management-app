import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { RSSLogo } from '~components/svg/RSSLogo';

export function AboutSchoolBlock() {
	return (
		<Grid container component="section" spacing={{ ss: 2, lg: 3 }}>
			<Grid xs={12}>
				<RSSLogo />
			</Grid>
			<Grid xs={12}>
				<Typography variant="h4">
					RS School
				</Typography>
				<Typography variant="h5">
					is free-of-charge and community-based education program
					conducted by The Rolling Scopes developer community since 2013.
				</Typography>
			</Grid>
			<Grid xs={12}>
				<Typography variant="body1">
					Everyone can study at RS School, regardless of age, professional employment,
					or place of residence.
				</Typography>
				<Typography variant="body1">
					The mentors and trainers of our school are front-end
					and javascript developers from different companies and countries.
				</Typography>
			</Grid>
		</Grid>
	);
}
