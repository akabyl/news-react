import { useAppDispatch } from '../../store'
import { setFilters } from '../../store/slices/newsSlice'
import { useGetCategoriesQuery } from '../../store/services/newsApi'
import { IFilters } from '../../interfaces';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import Slider from '../Slider/Slider';

import { useTheme } from '../../context/ThemeContext';

import styles from './styles.module.css';

interface Props {
	filters: IFilters;
}

export const NewsFilters = ({ filters }: Props) => {
	const { isDark } = useTheme();
	const { data } = useGetCategoriesQuery(null);
	const dispatch = useAppDispatch();
	return (
		<div className={styles.filters}>
			{data ? (
				<Slider isDark={isDark}>
					<Categories
						categories={data.categories}
						setSelectionCategory={category =>
							dispatch(setFilters({ key: 'category', value: category }))
						}
						selectionCategory={filters.category}
					/>
				</Slider>
			) : null}
			<Search
				isDark={isDark}
				keywords={filters.keywords}
				setKeywords={keywords =>
					dispatch(setFilters({ key: 'keywords', value: keywords }))
				}
			/>
		</div>
	);
};
