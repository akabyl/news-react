import { NewsItem } from '../NewsItem'
import styles from './styles.module.css'

export const NewsList = ({ news }) => {
	return (
		<ul className={styles.list}>
			{news ? news.map((item) => {
				return <NewsItem key={item.id} item={item} />;
			}) : <span>Загрузка...</span> }
		</ul>
	);
};
