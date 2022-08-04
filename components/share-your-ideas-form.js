import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from '../styles/share-your-ideas-form.module.css';

import { useState } from 'react';

export const ShareYourIdeasForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8ny289h', 'template_hqrlgad', form.current, 'sh-LmKjLoX22a7WxE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  let [isSent, setIsSent] = useState(false);

  let submitButtonRef = useRef(null);

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
      <div className={styles.section}>
        <label className={styles.label}>Your Name</label>
        <input className={styles.nameInputBox} type="text" name="valorantPlayerName" />
      </div>
      <div className={styles.section}>
        <label className={styles.label}>Ideas/Feedback/Report a Bug</label>
        <textarea className={styles.contentInputBox} name="content" />
      </div>
      <div className={styles.bottomSection}>
        <input className={styles.submitButton} ref={submitButtonRef} type="submit" value="Send" onClick={() => {
          setIsSent(true);
          submitButtonRef.current.disabled = true;

        }}/>
        {isSent && <p>Your message has been received. DuhAppleBaby will reply soon!</p>}
      </div>
    </form>
  );
};