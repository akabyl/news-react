import { useEffect, useState } from 'react';
import { NewsBanner } from '../../components/NewsBanner';
import { getCategories, getNews } from '../../api/apiNews';

import styles from './styles.module.css';
import { NewsList } from '../../components/NewsList';
import { Skeleton } from '../../components/Skeleton/Skeleton';
import { Pagination } from '../../components/Pagination';
import { Categories } from '../../components/Categories';

export const Main = () => {
	const [news, setNews] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [categories, setCategories] = useState([]);
	const [selectionCategory, setSelectionCategory] = useState('All');

	const totalPages = 10;
	const pageSize = 10;

	const fetchNews = async currentPage => {
		try {
			setIsLoading(true);
			const response = await getNews({
				page_number: currentPage,
				page_size: pageSize,
				category: selectionCategory === 'All' ? null : selectionCategory,
			});
			setNews(response.news);
			setIsLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	const fetchCategories = async () => {
		try {
			const response = await getCategories();
			setCategories(['All', ...response.categories]);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	useEffect(() => {
		fetchNews(currentPage);
	}, [currentPage, selectionCategory]);

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const handlePageClick = pageNumber => {
		setCurrentPage(pageNumber);
	};

	return (
		<main className={styles.main}>
			<Categories
				categories={categories}
				setSelectionCategory={setSelectionCategory}
				selectionCategory={selectionCategory}
			/>
			{news.length > 0 && !isLoading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton type='banner' count={1} />
			)}
			<Pagination
				totalPages={totalPages}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
			/>
			{!isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton type='item' count={10} />
			)}
			<Pagination
				totalPages={totalPages}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
			/>
		</main>
	);
};
