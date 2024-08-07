import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Landing from './landing'

export default function Home() {
  return (
   <div className={styles.container}>
    <Head>
      <title>Zimmerle Eats</title>
    </Head>
     
    <Landing />

    </div> 
  )
}
