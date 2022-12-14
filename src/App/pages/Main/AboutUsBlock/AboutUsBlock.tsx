import { useTranslation } from 'react-i18next';

import Grid from '@mui/material/Unstable_Grid2';

import Rajab from '~assets/images/rajab.jpg';

import { Card } from './Card';

export function AboutUsBlock() {
	const { t } = useTranslation();

	return (
		<Grid component="section" container spacing={{ ss: 3 }}>
			<Grid ss={12} lg={4}>
				<Card
					heading={t('dev1.name')}
					description={t('dev1.description')}
					img="https://avatars.githubusercontent.com/u/95941412?v=4"
					alt="Bittersweet-girl"
				/>
			</Grid>
			<Grid ss={12} lg={4}>
				<Card
					heading={t('dev2.name')}
					description={t('dev2.description')}
					img="https://mazayw.github.io/rs-lang/img/Mazayw.jpg"
					alt="Mazayw"
				/>
			</Grid>
			<Grid ss={12} lg={4}>
				<Card
					heading={t('dev3.name')}
					description={t('dev3.description')}
					img={Rajab}
					alt="AmelianceSkyMusic"
				/>
			</Grid>
		</Grid>
	);
}
