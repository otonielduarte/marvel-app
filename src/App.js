import React from 'react';
import './styles/App.scss';
import AppHeader from './components/AppHeader';
import Main from './components/Main';
import Footer from './components/Footer';
import { AppProvider } from './context/context';

function App() {
	return (
		<div className="App">
			<AppProvider>
				<AppHeader />

				<Main />

				<Footer />
				
			</AppProvider>

		</div>
	);
}

export default App;
