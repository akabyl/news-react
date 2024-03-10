import { useEffect, useState } from 'react'
import { NewsBanner } from '../../components/NewsBanner'
import { getNews } from '../../api/apiNews'

import styles from './styles.module.css';
import { NewsList } from '../../components/NewsList'
import { Skeleton } from '../../components/Skeleton/Skeleton'


export const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		const fetchNews = async () => {
			try {
				setIsLoading(true);
				const responce = await getNews()
				const data = responce.news;
				setNews(data); 
				setIsLoading(false);
			} catch (error) {
				console.log(error.message);
			}
		}
		fetchNews()
	}, [])
	return (
		<main className={styles.main}>
			{news.length > 0 && !isLoading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton type='banner' count={1} />
			)}
			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton type='item' count={10} />
			)}
		</main>
	);
};
