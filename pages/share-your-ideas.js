import React from 'react'

import styles from '../styles/share-your-ideas.module.css';

import { ShareYourIdeasForm } from '../components/share-your-ideas-form';

const ShareYourIdeas = () => {
  return (
    <div className={styles.shareYourIdeas}>
      <h1>Share your Ideas!</h1>
      <h3>Do you have a great idea for a wacky mission? Do you want to provide feedback to improve this randomizer? Do you want to report a bug? </h3>
      <h3>DuhAppleBaby would love to hear from you!</h3>
      <p>Contact DuhAppleBaby at playvalorantrandomizer@gmail.com or fill out the contact form below!</p>

      <ShareYourIdeasForm />
    </div>
  )
}

export default ShareYourIdeas