import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Columns } from '~components/Columns/Columns';
import { Layout } from '~components/Layout';
import { Board } from '~pages/Board/Board';
import { Main } from '~pages/Main';
import { NotFound } from '~pages/NotFound';
import { SignIn } from '~pages/SignIn';
import { SignUp } from '~pages/SignUp';
import { store } from '~store/store';
import { ThemedComponentWrapper } from '~styles/themeMode/ThemedComponentWrapper';

export function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<ThemedComponentWrapper>
				<Provider store={store}>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Main />} />
							<Route path="board" element={<Board />} />
							<Route path="board/:id" element={<Columns />} />
							<Route path="signin" element={<SignIn />} />
							<Route path="signup" element={<SignUp />} />
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</Provider>
			</ThemedComponentWrapper>
		</DndProvider>
	);
}
