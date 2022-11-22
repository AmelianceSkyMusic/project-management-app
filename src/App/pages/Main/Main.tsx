import { Box } from '@mui/material';

import { AboutSchoolBlock } from './AboutSchoolBlock';
import { AboutUsBlock } from './AboutUsBlock';
import { HeroBlock } from './HeroBlock';

export function Main() {
	return (
		<>
			<HeroBlock />
			<AboutUsBlock />
			<AboutSchoolBlock />
			<Box sx={{ pb: 8 }} />
		</>
	);
}
