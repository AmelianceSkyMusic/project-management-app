import Grid from '@mui/material/Unstable_Grid2';

import Rajab from '~assets/images/rajab.jpg';

import { Card } from './Card';

export function AboutUsBlock() {
	return (
		<Grid component="section" container spacing={{ ss: 3 }}>
			<Grid ss={12} lg={4}>
				<Card
					heading="Наталя"
					description="Teach It Forward According to this principle, students study at school for free,"
					img="https://avatars.githubusercontent.com/u/95941412?v=4"
					alt="Bittersweet-girl"
				/>
			</Grid>
			<Grid ss={12} lg={4}>
				<Card
					heading="Ігор"
					description="Open Source Philosophy Our platform and education materials are publicly available on GitHub and YouTube"
					img="https://mazayw.github.io/rs-lang/img/Mazayw.jpg"
					alt="Mazayw"
				/>
			</Grid>
			<Grid ss={12} lg={4}>
				<Card
					heading="Раджаб"
					description="According to this principle, students study at school for free, but we request that they return as mentors to pass on their knowledge to the next generation of students."
					img={Rajab}
					alt="AmelianceSkyMusic"
				/>
			</Grid>
		</Grid>
	);
}
