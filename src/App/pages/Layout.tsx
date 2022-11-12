import { NavLink, Outlet } from 'react-router-dom';

import { ThemeIconToggle } from '../styles/themeMode/ThemeIconToggle';

export function Layout() {

	return (
		<>
			<header className="header">
				<NavLink end to="/">
					Main
				</NavLink>
				<NavLink to="/form">
					Board
				</NavLink>
				<NavLink to="/login">
					Log In
				</NavLink>
				<NavLink to="/signin">
					Sign In
				</NavLink>
			</header>
			<ThemeIconToggle />
			<Outlet />
			<footer className="footer">
				<a
					href="https://github.com/AmelianceSkyMusic/project-management-app"
					target="_blank"
					className="link underlined"
					rel="noreferrer"
				>
					project-management-app © 2022
				</a>
			</footer>
		</>
	);
}
