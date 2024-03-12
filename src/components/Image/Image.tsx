import styles from './styles.module.css';

interface Props {
	image: string;
}

const Image = ({ image }: Props) => {
	return (
		<div className={styles.wrapper}>
			{image ? <img className={styles.image} src={image} alt='News' /> : null}
		</div>
	);
};
export default Image;