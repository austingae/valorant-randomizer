import React from 'react'

import styles from '../styles/share-your-ideas.module.css';

import { ShareYourIdeasForm } from '../components/share-your-ideas-form';

import Head from 'next/head';
const ShareYourIdeas = () => {
  return (
    <>
      <Head>
        <title>Share your Ideas for Valorant Randomizer</title>
        <meta name='description' content='Share your ideas to improve valorant randomizer.' />
      </Head>

      <img className={styles.backgroundImage} src='/share-your-ideas-images/valorant-drawing.png' alt="Valorant Drawing"/>
      <main className={styles.shareYourIdeasContainer}>
        <div className={styles.shareYourIdeas}>
          <h1 className={styles.shareYourIdeasTitle}>Share your Ideas!</h1>
          <h3 className={styles.shareYourIdeasDescription}>Do you have a great idea for a wacky mission? Do you want to provide feedback to improve this Valorant Randomizer? Do you want to report a bug? </h3>
          <h3 className={styles.shareYourIdeasDescription}>DuhAppleBaby, the Creator of this Randomizer, would love to hear from you!</h3>
          <p className={styles.shareYourIdeasDescription2}>Contact DuhAppleBaby at <span className={styles.gmail}>playvalorantrandomizer@gmail.com</span> or fill out the contact form below!</p>

          <ShareYourIdeasForm />
        </div>
      </main>
    </>
  )
}

export default ShareYourIdeas