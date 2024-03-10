import { formatDate } from '../../helpers/formatDate'
import styles from './styles.module.css'

export const Header = () => {
  return (
		<header className={styles.header}>
			<h1 className={styles.title}>News</h1>
			<p className={styles.data}>{formatDate()}</p>
		</header>
	);
}
