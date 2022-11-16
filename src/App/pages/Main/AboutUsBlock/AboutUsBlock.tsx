import Grid from '@mui/material/Unstable_Grid2';

import { Card } from './Card';

export function AboutUsBlock() {
	return (
		<Grid container spacing={{ sm: 3, xs: 2 }}>
			<Grid xs={4} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
				<Card
					heading="Ігор"
					description="Open Source Philosophy Our platform and education materials are publicly available on GitHub and YouTube"
					img="https://mazayw.github.io/rs-lang/img/Mazayw.jpg"
					alt="Mazayw"
				/>
			</Grid>
			<Grid xs={4} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
				<Card
					heading="Пані Наталя"
					description="Teach It Forward According to this principle, students study at school for free,"
					img="https://avatars.githubusercontent.com/u/95941412?v=4"
					alt="Bittersweet-girl"
				/>
			</Grid>
			<Grid xs={4} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
				<Card
					heading="Ameliance SkyMusic"
					description="According to this principle, students study at school for free, but we request that they return as mentors to pass on their knowledge to the next generation of students."
					img="https://avatars.githubusercontent.com/u/38717657?v=4"
					alt="AmelianceSkyMusic"
				/>
			</Grid>
		</Grid>
	);
}
