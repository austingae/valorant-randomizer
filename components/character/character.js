import React from 'react'

import styles from '../../styles/character.module.css';

const Character = (props) => {
  return (
    <div className={styles.characterContainer}>
      <img className={styles.characterImage} src={"/images/characters/" + props.name.toLowerCase() + ".png"} />
      <h3 className={styles.characterName}>{props.name}</h3>
    </div>
  )
}

export default Character