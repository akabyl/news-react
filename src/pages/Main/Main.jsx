import { useEffect, useState } from 'react'
import { NewsBanner } from '../../components/NewsBanner'
import { getNews } from '../../api/apiNews'

import styles from './styles.module.css';
import { NewsList } from '../../components/NewsList'


export const Main = () => {
	const [news, setNews] = useState([])
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const responce = await getNews()
				const data = responce.news;
				setNews(data); 
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchNews()
	}, [])
	return (
		<main className={styles.main}>
			{news.length > 0 ? <NewsBanner item={news[0]} /> : null}
			<NewsList news={news} />
		</main>
	);
};
