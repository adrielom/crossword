import React from 'react';
import './App.css';
import Grid from './components/Grid';
import { Provider } from 'react-redux';

import store from './store';
import Controls from './components/Controls';

function App() {
	return (
		<Provider store={store}>
			<Grid />
			<Controls className='relativeClass' />
		</Provider>
	);
}

export default App;
