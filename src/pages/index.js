import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css';
import Startup from '../views/Startup';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Apptiks</title>
        <meta name="description" content="WEB Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Startup />
    </div>
  )
}
