// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
	webpack: {
		alias: {
			'~assets': path.resolve(__dirname, 'src/assets'),
			'~api': path.resolve(__dirname, 'src/App/api'),
			'~components': path.resolve(__dirname, 'src/App/components'),
			'~hooks': path.resolve(__dirname, 'src/App/hooks'),
			'~pages': path.resolve(__dirname, 'src/App/pages'),
			'~store': path.resolve(__dirname, 'src/App/store'),
			'~styles': path.resolve(__dirname, 'src/App/styles'),
			'~types': path.resolve(__dirname, 'src/App/types'),
			'~app': path.resolve(__dirname, 'src/App'),
			'~': path.resolve(__dirname, 'src'),
		},
	},
};
