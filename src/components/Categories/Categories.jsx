import styles from './styles.module.css'

export const Categories = ({categories, setSelectionCategory, selectionCategory}) => {
	
	return (
		<div className={styles.categories}>
			{categories ? categories.map(category => (
				<button
					onClick={() => setSelectionCategory(category)}
					className={
						selectionCategory === category ? styles.active : styles.item
					}
					key={category}
				>
					{category}
				</button>
			)) : <span>Загрузка категорий</span> }
		</div>
	);
};
