import { FocusEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
	Avatar, Box, Button, Container,	CssBaseline, Grid, Link, TextField, Typography,
} from '@mui/material';

import { createUser } from '../../components/api/createUser';
import { IUser } from '../../types/api';

export function SignUp() {
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

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!passwordError && !emailError) {
			const data = new FormData(event.currentTarget);
			const newUser: IUser = {
				name: data.get('name') as string,
				login: data.get('email') as string,
				password: data.get('password') as string,
			};
			createUser(newUser);
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
					Sign in
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{ mt: 1 }}
				>
					<TextField
						margin="normal"
						required
						fullWidth
						autoComplete="name"
						id="name"
						label="Name"
						name="name"
					/>
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
						type="password"
						name="password"
						label="Password"
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
						Sign Up
					</Button>
					<Grid container>
						<Grid item>
							<Link variant="body2" component={NavLink} to="../git login">
								Have an account? Log In
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>
	);
}
