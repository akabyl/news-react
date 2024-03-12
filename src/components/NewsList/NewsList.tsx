
import withSkeleton from '../../helpers/Hocs/withSkeleton'
import { INews } from '../../interfaces'
import NewsItem from '../NewsItem/NewsItem'
import styles from './styles.module.css'

export interface Props {
	news?: INews[];
}

const NewsList = ({ news }: Props) => {
	return (
		<ul className={styles.list}>
			{news ? (
				news.map(item => {
					return <NewsItem key={item.id} item={item} />;
				})
			) : (
				<span>Загрузка...</span>
			)}
		</ul>
	);
};

const NewsListSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListSkeleton;