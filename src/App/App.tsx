import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Route, Routes } from 'react-router-dom';

import { Layout } from '~components/Layout';
import { Board } from '~pages/Board/Board';
import { BoardPage } from '~pages/Board/BoardPage';
import { LogIn } from '~pages/LogIn';
import { Main } from '~pages/Main';
import { NotFound } from '~pages/NotFound';
import { SignUp } from '~pages/SignUp';
import { ThemedComponentWrapper } from '~styles/themeMode/ThemedComponentWrapper';

export function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<ThemedComponentWrapper>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Main />} />
						<Route path="board" element={<Board />} />
						<Route path="board/:id" element={<BoardPage />} />
						<Route path="login" element={<LogIn />} />
						<Route path="signup" element={<SignUp />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</ThemedComponentWrapper>
		</DndProvider>
	);
}
