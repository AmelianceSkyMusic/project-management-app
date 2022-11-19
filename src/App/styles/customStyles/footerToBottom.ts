export const footerToBottom = {
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					height: '100%',
				},
				body: {
					height: '100%',
				},
				'#root': {
					minHeight: '100%',
					display: 'flex',
					flexDirection: 'column',
				},
				footer: {
					marginTop: 'auto',
				},
			},
		},
	},
};
