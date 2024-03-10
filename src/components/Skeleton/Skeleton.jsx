import styles from './styles.module.css';

export const Skeleton = ({ count = 1, type = 'banner' }) => {
	return (
		<>
			{count > 1 ? (
				<ul className={styles.list}>
					{[...Array(count)].map((_, id) => (
						<li
							key={id}
							className={type === 'banner' ? styles.banner : styles.item}
						></li>
					))}
				</ul>
			) : (
				<li className={type === 'banner' ? styles.banner : styles.item}></li>
			)}
		</>
	);
};
