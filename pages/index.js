import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>jaredborders</title>
			</Head>
			<main className={styles.container}>
				<img
					className={styles.image}
					src="https://avatars.githubusercontent.com/u/44350516?s=460&u=f4a22b0c1d191bb30d141e579baec86c2ce67a9e&v=4"
				/>
				<h3 className={styles.description}>@jaredborders</h3>

				<div className={styles.grid}>
					<a
						href="https://read.cv/jaredborders"
						className={styles.card}
					>
						<h3>read.cv</h3>
					</a>

					<a
						href="https://github.com/JaredBorders"
						className={styles.card}
					>
						<h3>Github</h3>
					</a>

					<a
						href="https://twitter.com/Jared_Borders"
						className={styles.card}
					>
						<h3>Twitter</h3>
					</a>

					<a
						href="https://soundcloud.com/yumuru"
						className={styles.card}
					>
						<h3>Soundcloud</h3>
					</a>

					<a
						href="https://www.instagram.com/jared_borders"
						className={styles.card}
					>
						<h3>Instagram</h3>
					</a>
				</div>
			</main>
		</div>
	);
}
