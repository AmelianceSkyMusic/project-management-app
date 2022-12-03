import axios from 'axios';

import { SETTINGS } from '../../settings';

export default axios.create({
	baseURL: SETTINGS.URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODdiZjY4YjMzNWMyMWE0OTIxNDM0MiIsImxvZ2luIjoibmF0YXNoYUBnbWFpbC5jb20iLCJpYXQiOjE2NzAwNzU5NTksImV4cCI6MTY3MDExOTE1OX0.VG7CZMRKpYCxMCpxJkvUhLpr1TXnWTKyLNaTSGeSeck',
	},
});
