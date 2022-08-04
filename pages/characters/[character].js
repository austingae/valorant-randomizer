import React from 'react'

import { useState, useEffect } from 'react'

import styles from '../../styles/character.module.css';

const Character = ({characterInfoDatum, missions}) => {
  const valorantMaps = [
    'Ascent',
    'Bind',
    'Breeze',
    'Fracture',
    'Haven',
    'Icebox',
    'Pearl'
  ];

  //A map randomly chosen and displayed on the website page.

  let [valorantMap, setValorantMap] = useState();

  let guns = ['ares','bucky','bulldog','classic','frenzy','ghost','guardian','judge','marshal','odin','operator','phantom','sheriff','shorty','spectre','stinger','vandal'];
  let roundOneGuns = ['classic', 'shorty', 'frenzy', 'ghost', 'sheriff'];

  let [chosenGun, setChosenGun] = useState('');
  let [chosenMission, setChosenMission] = useState('');
  
  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * roundOneGuns.length);
    let randomOneGun = roundOneGuns[randomIndex];
    setChosenGun(randomOneGun);

    let randomIndex2 = Math.floor(Math.random() * missions.length);
    let randomMission = missions[randomIndex2].mission;
    setChosenMission(randomMission);

    let randomIndex3 = Math.floor(Math.random() * valorantMaps.length);
    let randomMap = valorantMaps[randomIndex3].toLowerCase();
    setValorantMap(randomMap);
  }, [])

  let randomlyPickGunAndMission = () => {
    let randomIndex = Math.floor(Math.random() * guns.length);
    let randomGun = guns[randomIndex];
    setChosenGun(randomGun);

    let randomIndex2 = Math.floor(Math.random() * missions.length);
    let randomMission = missions[randomIndex2].mission;
    setChosenMission(randomMission);
  }

  let randomlyPickGun = () => {
    let randomIndex = Math.floor(Math.random() * guns.length);
    let randomGun = guns[randomIndex];
    setChosenGun(randomGun);
  }
  return (
    <main>
      <img className={styles.backgroundImageMap} src={"/images/darkened-maps/" + 'ascent' + ".png"} />

      <div className={styles.characterMain}>
        <div className={styles.characterContainer}>
          <img className={styles.characterImage} src={"/images/characters/" + characterInfoDatum.name.toLowerCase() + ".png"} />
          <h3 className={styles.characterName}>{characterInfoDatum.name}</h3>
          <p className={styles.characterRole}>{characterInfoDatum.role}</p>
        </div>

        <div>
          <button className={`${styles.randomButton} ${styles.randomButtonMarginRight}`} onClick={randomlyPickGunAndMission}>New Round, New Roll!</button>
          
          <button className={styles.randomButton} onClick={randomlyPickGun}>Can&apos;t Afford the Gun&#63;</button>
          <h2 className={styles.gunTitle}>Gun</h2>
          <div className={styles.gunImageContainer}>
            <img className={styles.gunImage} src={"/images/guns/" + chosenGun + ".png"} />
          </div>
          <h2 className={styles.missionTitle}>Challenge</h2>
          <p className={styles.missionDescription}>{chosenMission}</p>
        </div>
      </div>
    </main>

  )
}

export default Character

export async function getStaticPaths() {
  const characterNames = [
    'Astra', 'Breach', 'Brimstone', 'Chamber', 'Cypher', 'Fade', 'Jett', 'Kayo', 'Killjoy', 'Neon',
    'Omen', 'Phoenix', 'Raze', 'Reyna', 'Sage', 'Skye', 'Sova', 'Viper', 'Yoru'
  ];

  let paths = characterNames.map((characterName) => {
    return { params: {character: characterName.toLowerCase()}};
  })

  return {
    paths: paths,
    fallback: false,
  }
}


export async function getStaticProps(pageContext) {

  //Get Character Info -- name and role and specific missions
  const character = pageContext.params.character;

  let characterInfoJSON = await fetch(`https://raw.githubusercontent.com/austingae/valorant-randomizer/main/public/data/character-info.json`);
  let characterInfoData = await characterInfoJSON.json();

  let characterInfoDatum = {
    name: '',
    role: '',
  };
  characterInfoData.forEach((characterInfo) => {
    if (characterInfo.id == character) {
      characterInfoDatum.name = characterInfo.name;
      characterInfoDatum.role = characterInfo.role;
    }
  })

  //Get General Missions
  let missionsInfoJSON = await fetch(`https://raw.githubusercontent.com/austingae/valorant-randomizer/main/public/data/general-info.json`);
  let missionsInfoData = await missionsInfoJSON.json();

  let missions = missionsInfoData;

  return {
    props: {
      characterInfoDatum: characterInfoDatum,
      missions: missions,
    }
  }
}