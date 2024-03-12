import styles from './styles.module.css';

interface Props {
	keywords: string;
	setKeywords: (keywords: string) => void;
	isDark: boolean;
}

const Search = ({ keywords, setKeywords, isDark }: Props) => {
	return (
		<div className={`${styles.search} ${isDark ? styles.dark : styles.light}`}>
			<input
				type='text'
				value={keywords}
				onChange={e => setKeywords(e.target.value)}
				placeholder='JavaScript'
				className={styles.input}
			/>
		</div>
	);
};

export default Search;
