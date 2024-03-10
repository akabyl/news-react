import styles from './styles.module.css'

export const Image = ({ image }) => {
	console.log(image);
	return (
		<div className={styles.wrapper}>
			{image ? <img className={styles.image} src={image} alt='News' /> : null}
		</div>
	);
};
