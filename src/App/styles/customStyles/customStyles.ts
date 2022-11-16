// 71.5
import lodashMerge from 'lodash/merge';

import { components } from './components';
import { footerToBottom } from './footerToBottom';
import { typography } from './typography';

export const customStyles = lodashMerge(
	components,
	typography,
	footerToBottom,
);
