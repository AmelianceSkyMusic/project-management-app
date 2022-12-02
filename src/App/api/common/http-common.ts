import axios from 'axios';

import { SETTINGS } from '../../settings';

export default axios.create({
	baseURL: SETTINGS.URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODdiZjY4YjMzNWMyMWE0OTIxNDM0MiIsImxvZ2luIjoibmF0YXNoYUBnbWFpbC5jb20iLCJpYXQiOjE2Njk5NzU3NjAsImV4cCI6MTY3MDAxODk2MH0.fGmAiknM-wxuz9-4Ag93hyojC7O1ATg2nGxhOobSugI',
	},
});
