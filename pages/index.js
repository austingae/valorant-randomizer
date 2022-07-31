import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Dropdown from 'react-dropdown';
import '../node_modules/react-dropdown/style.css';


export default function Home() {

  const valorantMaps = [
    'Ascent',
    'Bind',
    'Breeze',
    'Fracture',
    'Haven',
    'Icebox',
    'Pearl'
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Valorant Randomizer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <img className={styles.backgroundImageMap}src="images/darkened-maps/haven.png" />

          <div className={styles.body}>
            <div>
              <div className={styles.mapImageContainer}>
                <img className={styles.mapImage} src="images/maps/haven.png" />
              </div>
              <h2 className={styles.mapName}>Haven</h2>

              
              <Dropdown 
              className={styles.dropDown} 
              controlClassName={styles.dropDownControl}
              options={valorantMaps} 
              placeholder="Select your Map" />
            </div>

            <div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
