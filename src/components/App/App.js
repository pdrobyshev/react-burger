import React from 'react';

import styles from './App.module.scss';
import AppHeader from '../AppHeader/AppHeader';
import MainContent from '../MainContent/MainContent';

const App = () => {
	return (
		<div className={styles.app}>
			<AppHeader />
			<MainContent />
		</div>
	);
};

export default App;
