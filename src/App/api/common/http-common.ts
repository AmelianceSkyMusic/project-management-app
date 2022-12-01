import axios from 'axios';

import { SETTINGS } from '../../settings';

export default axios.create({
	baseURL: SETTINGS.URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODdiZjY4YjMzNWMyMWE0OTIxNDM0MiIsImxvZ2luIjoibmF0YXNoYUBnbWFpbC5jb20iLCJpYXQiOjE2Njk4ODg4MjYsImV4cCI6MTY2OTkzMjAyNn0.RdML-pFoT_YLRNrD0TCn4MT_yNEbvhV2nb98DgAYu5o',
	},
});
