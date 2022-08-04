import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'

import styles from '../styles/how-to-use.module.css';


const HowToUse = () => {

  const router = useRouter();
  return (
    <>
      <Head>
        <title>How to Use Valorant Randomizer</title>
        <meta name='description' content='Valorant Randomizer How To Use Guide.' />
      </Head>
      <main className={styles.howToUse}>
        <h1 className={styles.title}>How To Use Valorant Randomizer</h1>
        <h3 className={styles.stepTitle}>Step 1</h3>
        <img className={styles.stepImage} src='/how-to-use-images-videos/images/character-selection.png' alt="Roll your character."/>
        <h3 className={styles.stepTitle}>Step 2</h3>
        <img className={styles.stepImage} src='/how-to-use-images-videos/images/character-selection-2.png' alt="After a few seconds, the website will redirect you to another page."/>
        <h3 className={styles.stepTitle}>Step 3</h3>
        <img className={styles.stepImage} src='/how-to-use-images-videos/images/character-gun-mission.png' alt="You can view your random guns and missions."/>
        <h3 className={styles.stepTitle}>That&apos;s About It! Here&apos;s a Quick Demo:</h3>
        
        <video className={styles.demoVideo} controls>
          <source src="/how-to-use-images-videos/video/demo-video.mov" type="video/mov" />
          <source src="/how-to-use-images-videos/video/demo-video.mp4" type="video/mp4" />
          Your browser does not support the demo video.
        </video>
        

        <h3 className={styles.readyTitle}>Are you Ready?</h3>

        <button className={styles.playButton} onClick={() => {
          router.push('/');
        }}>Play Valorant Randomizer</button>
      </main>
    </>
  )
}

export default HowToUse