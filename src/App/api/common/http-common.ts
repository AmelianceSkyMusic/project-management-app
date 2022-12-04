import axios from 'axios';

import { SETTINGS } from '../../settings';

// const token = localStorage.getItem('token');
export default axios.create({
	baseURL: SETTINGS.URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODdiZjY4YjMzNWMyMWE0OTIxNDM0MiIsImxvZ2luIjoibmF0YXNoYUBnbWFpbC5jb20iLCJpYXQiOjE2NzAxMzgzNjMsImV4cCI6MTY3MDE4MTU2M30.9N4Yw3Ey1apR3jT3Z4lxKcRj3eOm4M2Du6vRCP6VkjY',
	},
});
