import { formatTimerAgo } from '../../helpers/formatTimerAgo'
import { Image } from '../Image'
import styles from './styles.module.css'

export const NewsBanner = ({item}) => {
	return (
		<div className={styles.banner}>
		<Image image={item?.image}/>
			<h3 className={styles.title}>{item?.title}</h3>
			<p className={styles.extra}>{formatTimerAgo(item?.published)} by {item?.author}</p>
		</div>
	);
};
