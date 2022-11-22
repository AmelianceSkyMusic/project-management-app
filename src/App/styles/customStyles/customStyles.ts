import lodashMerge from 'lodash/merge';

import { breakpoints } from './breakpoints';
import { components } from './components';
import { footerToBottom } from './footerToBottom';
import { typography } from './typography';

export const customStyles = lodashMerge(
	breakpoints,
	components,
	typography,
	footerToBottom,
);
