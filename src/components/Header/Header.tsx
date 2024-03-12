import { useTheme } from '../../context/ThemeContext'
import { themeIcons } from '../../assets';
import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';

const Header = () => {
	const {isDark, toggleTheme} = useTheme()
	return (
		<header
			className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
		>
			<div className={styles.info}>
				<h1 className={styles.title}>News</h1>
				<p className={styles.data}>{formatDate(new Date())}</p>
			</div>
			<img
				src={isDark ? themeIcons.light : themeIcons.dark}
				alt='theme'
				width={30}
				onClick={toggleTheme}
			/>
		</header>
	);
};
export default Header;
