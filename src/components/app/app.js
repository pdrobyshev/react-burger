import React, { useEffect, useState } from 'react';

import AppHeader from '../app-header/app-header';
import PageContent from '../page-content/page-content';
import Error from '../error/error';
import Loader from '../loader/loader';

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		setIsLoading(true);

		fetch(API_URL)
			.then((res) => {
				if (!res.ok) {
					setHasError(true);
					return Promise.reject(`Что-то пошло не так :( Статус ${res.status}`);
				}

				return res.json();
			})
			.then((res) => {
				setData(res.data);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	let content = <PageContent ingredients={data} />;
	if (hasError) {
		content = <Error />;
	} else if (isLoading) {
		content = <Loader />;
	}

	return (
		<>
			<AppHeader />
			{content}
		</>
	);
};

export default App;
