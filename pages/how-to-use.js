import React from 'react';
import styles from '../styles/how-to-use.module.css';
import { useRouter } from 'next/router';

const HowToUse = () => {

  const router = useRouter();
  return (
    <div className={styles.howToUse}>
      <h1 className={styles.title}>How To Use Valorant Randomizer</h1>
      <h3 className={styles.stepTitle}>Step 1</h3>
      <img className={styles.stepImage} src='/how-to-use-images-videos/images/character-selection.png' />
      <h3 className={styles.stepTitle}>Step 2</h3>
      <img className={styles.stepImage} src='/how-to-use-images-videos/images/character-selection-2.png' />
      <h3 className={styles.stepTitle}>Step 3</h3>
      <img className={styles.stepImage} src='/how-to-use-images-videos/images/character-gun-mission.png' />
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
    </div>
  )
}

export default HowToUse