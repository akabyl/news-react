import styles from './styles.module.css';

export const Pagination = ({
	totalPages,
	handleNextPage,
	handlePrevPage,
	handlePageClick,
	currentPage,
}) => {
	return (
		<div className={styles.pagination}>
			<button
				onClick={handlePrevPage}
				disabled={currentPage <= 1}
				className={styles.arrow}
			>
				{'<'}
			</button>
			<div className={styles.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							onClick={() => handlePageClick(index + 1)}
							className={styles.pageNumber}
							disabled={currentPage === index + 1}
							key={index}
						>
							{index + 1}
						</button>
					);
				})}
			</div>
			<button
				onClick={handleNextPage}
				disabled={currentPage >= totalPages}
				className={styles.arrow}
			>
				{'>'}
			</button>
		</div>
	);
};
