import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Tabuleiro from '../components/tabuleiro';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tabuleiro - Next App</title>
        <meta name="description" content="Tabuleiro next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <div className="content">
            <Tabuleiro/>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span style={{color: "#fff"}}>Desenvolvido por Igor Fernandes @Copyright</span>
      </footer>
    </div>
  )
}
