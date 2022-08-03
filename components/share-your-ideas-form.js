import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name</label>
      <input type="text" name="valorantPlayerName" />
      <label>Content</label>
      <textarea name="content" />
      <input type="submit" value="Send" />
    </form>
  );
};