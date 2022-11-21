export const breakpoints = {
	breakpoints: {
		values: {
			ss: 0,
			xs: 360,
			sm: 480,
			md: 540,
			lg: 768,
			xl: 1024,
			sl: 1180,
		},
	},
};

declare module '@mui/material/styles' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface BreakpointOverrides {
		ss: true;
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
		sl: true;
	}
 }
