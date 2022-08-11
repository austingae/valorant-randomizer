import { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player';

import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'
import '../node_modules/react-dropdown/style.css';

export default function Home() {

  const router = useRouter();

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

  useEffect(() => {
    let randomIndex = Math.floor(Math.random() * valorantMaps.length);
    let randomMap = valorantMaps[randomIndex].toLowerCase();
    setValorantMap(randomMap);
  }, []);

  const valorantCharacterNames = [
    'Astra', 'Breach', 'Brimstone', 'Chamber', 'Cypher', 'Fade', 'Jett', 'Kayo', 'Killjoy', 'Neon',
    'Omen', 'Phoenix', 'Raze', 'Reyna', 'Sage', 'Skye', 'Sova', 'Viper', 'Yoru'
  ];



  function changeCharacterBorderColor() {
    let TheChosenOne;

    const characterNames = [
      'Astra', 'Breach', 'Brimstone', 'Chamber', 'Cypher', 'Fade', 'Jett', 'Kayo', 'Killjoy', 'Neon',
      'Omen', 'Phoenix', 'Raze', 'Reyna', 'Sage', 'Skye', 'Sova', 'Viper', 'Yoru'
    ];

    let index = Math.floor(Math.random() * characterNames.length);
    
    TheChosenOne = characterNames[index];

    setChosenValorantCharacter(TheChosenOne);
    setCharacterVoiceLine('/voicelines/' + TheChosenOne.toLowerCase() + '.mp3');

    
    setTimeout(() => {
      router.push(`/agents/${TheChosenOne.toLowerCase()}`);
    }, 2700)
  }

  let [chosenValorantCharacter, setChosenValorantCharacter] = useState("");

  let [characterVoiceLine, setCharacterVoiceLine] = useState("");

  return (
    <>
      <Head>        
        <title>Valorant Randomizer - Randomize Valorant Agents, Guns, and Challenges</title>
        <meta name="description" content="Valorant Randomizer that not only randomizes agents and guns (that's too bland) but also fun challenges!" />
      </Head>

      <main className={styles.main}>
          <img className={styles.backgroundImageMap}src={"images/darkened-maps/" + valorantMap + ".png"} alt="Valorant Randomizer Map"/>

          <div className={styles.body}>
            {/* Left Section: Map Image, Map Name, and Map Selection*/}
            <div className={styles.leftSection}>
              <div className={styles.mapImageContainer}>
                <img className={styles.mapImage} src={"images/maps/" + valorantMap + ".webp"} alt="Valorant Randomizer Map"/>
              </div>
              <h2 className={styles.mapName}>{valorantMap}</h2>
               
               <button className={styles.rollYourCharacterButton} onClick={changeCharacterBorderColor}>Random Valorant Agent</button>
            </div>

            {/*Right Section: Character Selection & Randomize Button */}
            <div className={styles.rightSection}>
              <div className={styles.chosenCharacterContainer}>
                
                {chosenValorantCharacter.length > 1 && <img className={styles.chosenCharacter} src={'/images/characters/' + chosenValorantCharacter.toLowerCase() + '.webp'} />}
              </div>

              <div className={styles.characterSelection}>
                {
                  valorantCharacterNames.map((characterName) => {
                    return (
                      <div key={characterName} className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == characterName ? 'gold' : 'rgb(204,204,204)', boxShadow: chosenValorantCharacter == characterName ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                        <img className={styles.characterImage} src={'/images/characters-icons/' + characterName.toLowerCase() + '.webp'} alt="Character Icon"/>
                      </div>
                    )
                  })
                }
              </div>
              
              <ReactAudioPlayer
                src={characterVoiceLine}
                autoPlay="true"
              />

            </div>
        </div>
      </main>
    </>
  )
}
