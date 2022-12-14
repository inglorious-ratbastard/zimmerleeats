import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Landing from './landing'

export default function Home() {
  return (
   <div className={styles.container}>

    <Head>
      <title>Zimmerle Eats - Private Chef Services</title>
    </Head>
    
    <Landing />

    </div> 
  )
}
