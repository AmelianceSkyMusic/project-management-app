import lodashMerge from 'lodash/merge';

import { MuiButton } from './MuiButton';
import { MuiTextField } from './MuiTextField';

export const components = lodashMerge(
	MuiButton,
	MuiTextField,
);
