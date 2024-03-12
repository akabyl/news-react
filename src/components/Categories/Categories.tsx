import { ForwardedRef, forwardRef } from 'react'
import styles from './styles.module.css';
import { CategoriesType } from '../../interfaces'

interface Props {
	categories: CategoriesType[];
	setSelectionCategory: (category: CategoriesType | null) => void;
	selectionCategory: CategoriesType | null;
}

const Categories = forwardRef(
	({ categories, setSelectionCategory, selectionCategory }: Props, ref: ForwardedRef<HTMLDivElement>) => {
		return (
			<div ref={ref} className={styles.categories}>
				<button
					onClick={() => setSelectionCategory(null)}
					className={!selectionCategory ? styles.active : styles.item}
				>
					All
				</button>
				{categories ? (
					categories.map(category => (
						<button
							onClick={() => setSelectionCategory(category)}
							className={
								selectionCategory === category ? styles.active : styles.item
							}
							key={category}
						>
							{category}
						</button>
					))
				) : (
					<span>Загрузка категорий</span>
				)}
			</div>
		);
	}
);

Categories.displayName = 'Categories';

export default Categories;