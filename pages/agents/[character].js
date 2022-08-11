import React from 'react'
import { useState, useEffect } from 'react'

import Head from 'next/head';

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

  let gunObjectArray = [
    {
      gun: 'ares',
      cost: 1600
    },
    {
      gun: 'bucky',
      cost: 850
    },
    {
      gun: 'bulldog',
      cost: 2050
    },
    {
      gun: 'classic',
      cost: 0
    },
    {
      gun: 'frenzy',
      cost: 450
    },
    {
      gun: 'ghost',
      cost: 500
    },
    {
      gun: 'guardian',
      cost: 2250
    },
    {
      gun: 'judge',
      cost: 1850
    },
    {
      gun: 'marshal',
      cost: 950
    },
    {
      gun: 'odin',
      cost: 3200
    },
    {
      gun: 'operator',
      cost: 4700
    },
    {
      gun: 'phantom',
      cost: 2900
    },
    {
      gun: 'sheriff',
      cost: 800
    },
    {
      gun: 'shorty',
      cost: 150
    },
    {
      gun: 'spectre',
      cost: 1600
    },
    {
      gun: 'stinger',
      cost: 950
    },
    {
      gun: 'vandal',
      cost: 2900
    },
  ];

  let [chosenGun, setChosenGun] = useState('');
  let [chosenMission, setChosenMission] = useState('');
  
  useEffect(() => {
    let randomIndex2 = Math.floor(Math.random() * missions.length);
    let doableMissions = missions.filter(mission => mission.mission != "You must be scoping at all times.");
    let randomMission = doableMissions[randomIndex2].mission;
    setChosenMission(randomMission);

    let randomIndex = Math.floor(Math.random() * roundOneGuns.length);
    let randomOneGun = roundOneGuns[randomIndex];
    setChosenGun(randomOneGun);
    

    let randomIndex3 = Math.floor(Math.random() * valorantMaps.length);
    let randomMap = valorantMaps[randomIndex3].toLowerCase();
    setValorantMap(randomMap);
  }, [])

  let randomlyPickGunAndMission = () => {
    let randomIndex2 = Math.floor(Math.random() * missions.length);
    let randomMission = missions[randomIndex2].mission;
    setChosenMission(randomMission);

    if (randomMission == "You must be scoping at all times.") {
      let scopingGuns = [];
      scopingGuns = gunObjectArray.filter(gunObject => {
        if (gunObject.gun == 'ares' || gunObject.gun == 'bulldog' || gunObject.gun == 'guardian' || gunObject.gun == 'marshal' || gunObject.gun == 'odin' || gunObject.gun == 'operator' || gunObject.gun == 'phantom' || gunObject.gun == 'spectre' || gunObject.gun == 'stinger' || gunObject.gun == 'vandal') {
          return gunObject;
        }
      });
      let randomScopingIndex = Math.floor(Math.random() * scopingGuns.length);
      let randomScopingGun = scopingGuns[randomScopingIndex].gun;
      setChosenGun(randomScopingGun);
    }

    else {
      let randomIndex = Math.floor(Math.random() * gunObjectArray.length);
      let randomGun = gunObjectArray[randomIndex].gun;
      setChosenGun(randomGun);
    }
  }

  let randomlyPickGun = () => {
    if (chosenMission == "You must be scoping at all times.") {
      let chosenScopingGunPrice;
      let cheaperScopingGuns = [];

      let scopingGuns = [];
      scopingGuns = gunObjectArray.filter(gunObject => {
        if (gunObject.gun == 'ares' || gunObject.gun == 'bulldog' || gunObject.gun == 'guardian' || gunObject.gun == 'marshal' || gunObject.gun == 'odin' || gunObject.gun == 'operator' || gunObject.gun == 'phantom' || gunObject.gun == 'spectre' || gunObject.gun == 'stinger' || gunObject.gun == 'vandal') {
          return gunObject;
        }
      });

      scopingGuns.forEach((scopingGunObject) => {
        if (chosenGun == scopingGunObject.gun) {
          chosenScopingGunPrice = scopingGunObject.cost;
        }
      });

      scopingGuns.forEach((scopingGunObject) => {
        if (chosenScopingGunPrice > scopingGunObject.cost) {
          cheaperScopingGuns.push(scopingGunObject.gun);
        }
      })

      let randomScopingIndex = Math.floor(Math.random() * cheaperScopingGuns.length);
      let randomScopingGun = cheaperScopingGuns[randomScopingIndex];
      setChosenGun(randomScopingGun);
    }

    else {
      let chosenGunPrice;
      let cheaperGuns = [];
      gunObjectArray.forEach((gunObject) => {
        if (chosenGun == gunObject.gun) {
          chosenGunPrice = gunObject.cost;
        }
      })

      gunObjectArray.forEach((gunObject) => {
        if (chosenGunPrice > gunObject.cost) {
          cheaperGuns.push(gunObject.gun);
        }
      })

      let randomIndex = Math.floor(Math.random() * cheaperGuns.length);
      let randomGun = cheaperGuns[randomIndex];
      setChosenGun(randomGun);
    }

  }
  return (
    <>
      <Head>
        <title>Valorant Randomizer for {characterInfoDatum.name}</title>
        <meta name='description' content={`Valorant Randomizer for ${characterInfoDatum.name} in which you randomize your valorant guns and fun valorant challenges every round!`} />

      </Head>
      <main>
        <img className={styles.backgroundImageMap} src={"/images/darkened-maps/" + valorantMap + ".png"} alt="Valorant Randomizer Map"/>

        <div className={styles.characterMain}>
          <div className={styles.characterContainer}>
            <img className={styles.characterImage} src={"/images/characters/" + characterInfoDatum.name.toLowerCase() + ".webp"} alt="Character Image"/>
            <h2 className={styles.characterName}>{characterInfoDatum.name}</h2>
            <p className={styles.characterRole}>{characterInfoDatum.role}</p>
          </div>

          <div>
            <button className={`${styles.randomButton} ${styles.randomButtonMarginRight}`} onClick={randomlyPickGunAndMission}>New Round, New Roll!</button>
            
            <button className={styles.randomButton} onClick={randomlyPickGun}>Can&apos;t Afford the Weapon&#63;</button>
            <h2 className={styles.gunTitle}>Random Weapon</h2>
            <div className={styles.gunImageContainer}>
              {chosenGun != undefined ? <img className={styles.gunImage} src={"/images/guns/" + chosenGun + ".webp"} style={{color: 'white'}}/> : <img className={styles.gunImage} src={"/images/guns/" + "classic" + ".webp"} style={{color: 'white'}}/>}
            </div>
            <h2 className={styles.missionTitle}>Random Challenge</h2>
            <p className={styles.missionDescription}>{chosenMission}</p>
          </div>
        </div>
      </main>
    </>
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