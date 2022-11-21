/* eslint-disable simple-import-sort/imports */
import { FocusEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Avatar, Box, Button, Container,	CssBaseline, Grid, Link, TextField, Typography,
} from '@mui/material';

import { IUser } from '~/App/types/api';
import { loginUser } from '../../components/api/loginUser';

export function LogIn() {
	const [emailError, setEmailError] = useState('');
	const [passwordError, setPasswordError] = useState('');

	const emailHandler = (e: FocusEvent<HTMLInputElement>) => {
		const { value } = e.target;
		const reg =			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!reg.test(String(value).toLowerCase())) {
			setEmailError('Invalid E-mail');
		} else {
			setEmailError('');
		}
	};

	const passwordHandler = (e: FocusEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (value.length < 8) {
			setPasswordError('Password must be longer than 8 characters');
			if (!value) {
				setPasswordError('Password cannot be empty');
			}
		} else {
			setPasswordError('');
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!passwordError && !emailError) {
			const data = new FormData(event.currentTarget);
			const newUser: IUser = {
				login: data.get('email') as string,
				password: data.get('password') as string,
			};
			const result = await loginUser(newUser);
			localStorage.setItem('user', JSON.stringify(result));
		}
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar
					sx={{
						m: 1,
						bgcolor: 'secondary.main',
						fontSize: 40,
						viewBox: '0 0 24 24',
					}}
				>
					<LockOutlinedIcon inheritViewBox />
				</Avatar>
				<Typography component="h1" variant="h5">
					Log In
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{ mt: 1 }}
				>
					<TextField
						error={!!emailError}
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						helperText={emailError}
						onBlur={emailHandler}
						autoFocus
					/>
					<TextField
						error={!!passwordError}
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						helperText={passwordError}
						onBlur={passwordHandler}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}
					>
						Log In
					</Button>
					<Grid container>
						<Grid item>
							<Link variant="body2" component={NavLink} to="../signup">
								Don&apos;t have an account? Sign Up
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
