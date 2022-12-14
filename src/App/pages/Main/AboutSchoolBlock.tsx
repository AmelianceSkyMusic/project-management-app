import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { RSSLogo } from '~components/svg/RSSLogo';

export function AboutSchoolBlock() {
	const { t } = useTranslation();

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
					{t('school.title')}
				</Typography>
			</Grid>
			<Grid xs={12}>
				<Typography variant="body1">
					{t('school.p1')}
				</Typography>
				<Typography variant="body1">
					{t('school.p2')}
				</Typography>
			</Grid>
		</Grid>
	);
}
