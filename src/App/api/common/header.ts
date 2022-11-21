export const header = (token = '') => ({
	headers: {
		Authorization: `Bearer ${token}`,
		Accept: 'application/json',
	},
});
