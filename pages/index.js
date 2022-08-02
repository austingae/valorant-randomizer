import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Dropdown from 'react-dropdown';
import '../node_modules/react-dropdown/style.css';

import { useState, useRef } from 'react';

import ReactAudioPlayer from 'react-audio-player';

import { useRouter } from 'next/router'
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

  let [valorantMap, setValorantMap] = useState("haven");

  let setValorantMapFunction = (valorantMapObject) => {
    setValorantMap(valorantMapObject.value.toLowerCase());
  }

  const valorantCharacterNames = [
    'Astra', 'Breach', 'Brimstone', 'Chamber', 'Cypher', 'Jett', 'Kayo', 'Killjoy', 'Neon',
    'Omen', 'Phoenix', 'Raze', 'Reyna', 'Sage', 'Skye', 'Sova', 'Viper', 'Yoru'
  ];



  function changeCharacterBorderColor() {
    let TheChosenOne;

    const characterNames = [
      'Astra', 'Breach', 'Brimstone', 'Chamber', 'Cypher', 'Jett', 'Kayo', 'Killjoy', 'Neon',
      'Omen', 'Phoenix', 'Raze', 'Reyna', 'Sage', 'Skye', 'Sova', 'Viper', 'Yoru'
    ];

    let index = Math.floor(Math.random() * characterNames.length);
    
    TheChosenOne = characterNames[index];

    setChosenValorantCharacter(TheChosenOne);
    setCharacterVoiceLine('/voicelines/' + TheChosenOne.toLowerCase() + '.mp3');

    setTimeout(() => {
      router.push(`/characters/${TheChosenOne.toLowerCase()}`);
    }, 3500)
  }

  let [chosenValorantCharacter, setChosenValorantCharacter] = useState("");

  let [characterVoiceLine, setCharacterVoiceLine] = useState("");


  //every time the website refreshes, cypher or fade character will show up
  let cypherOrFade;
  if (Math.random() > 0.49) {
    cypherOrFade = true;
  }
  else {
    cypherOrFade = false;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Valorant Randomizer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <img className={styles.backgroundImageMap}src={"images/darkened-maps/" + valorantMap + ".png"} />

          <div className={styles.body}>
            {/* Left Section: Map Image, Map Name, and Map Selection*/}
            <div className={styles.leftSection}>
              <div className={styles.mapImageContainer}>
                <img className={styles.mapImage} src={"images/maps/" + valorantMap + ".png"} />
              </div>
              <h2 className={styles.mapName}>{valorantMap}</h2>

              
              <Dropdown 
              className={styles.dropDown} 
              controlClassName={styles.dropDownControl}
              options={valorantMaps} 
              placeholder="Select your Map"
              onChange={setValorantMapFunction}
               />
               
               <button className={styles.rollYourCharacterButton} onClick={changeCharacterBorderColor}>Roll your Character</button>
            </div>

            {/*Right Section: Character Selection & Randomize Button*/}
            <div className={styles.characterSelection}>
                <div className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == "Astra" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Astra" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "astra" + ".png"} />
                  <h3 className={styles.characterName}>Astra</h3>
                </div>

                <div className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == "Breach" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Breach" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "breach" + ".png"} />
                  <h3 className={styles.characterName}>Breach</h3>
                </div>

                <div className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == "Brimstone" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Brimstone" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "brimstone" + ".png"} />
                  <h3 className={styles.characterName}>Brimstone</h3>
                </div>

                <div className={styles.characterContainer}  style={{borderColor: chosenValorantCharacter == "Chamber" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Chamber" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "chamber" + ".png"} />
                  <h3 className={styles.characterName}>Chamber</h3>
                </div>

                {cypherOrFade == true && 
                <div className={styles.characterContainer}  style={{borderColor: chosenValorantCharacter == "Cypher" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Cypher" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "cypher" + ".png"} />
                  <h3 className={styles.characterName}>Cypher</h3>
                </div>
                }

                {cypherOrFade == false && 
                <div className={styles.characterContainer}  style={{borderColor: chosenValorantCharacter == "Fade" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Fade" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "fade" + ".png"} />
                  <h3 className={styles.characterName}>Fade</h3>
                </div>
                }

                <div className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == "Jett" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Jett" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "jett" + ".png"} />
                  <h3 className={styles.characterName}>Jett</h3>
                </div>

                <div className={styles.characterContainer}  style={{borderColor: chosenValorantCharacter == "Kayo" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Kayo" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "kayo" + ".png"} />
                  <h3 className={styles.characterName}>KAY/O</h3>
                </div>

                <div className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == "Killjoy" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Killjoy" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "killjoy" + ".png"} />
                  <h3 className={styles.characterName}>Killjoy</h3>
                </div>

                <div className={styles.characterContainer}  style={{borderColor: chosenValorantCharacter == "Neon" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Neon" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "neon" + ".png"} />
                  <h3 className={styles.characterName}>Neon</h3>
                </div>

                <div className={styles.characterContainer}  style={{borderColor: chosenValorantCharacter == "Omen" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Omen" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "omen" + ".png"} />
                  <h3 className={styles.characterName}>Omen</h3>
                </div>

                <div className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == "Phoenix" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Phoenix" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "phoenix" + ".png"} />
                  <h3 className={styles.characterName}>Phoenix</h3>
                </div>

                <div className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == "Raze" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Raze" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "raze" + ".png"} />
                  <h3 className={styles.characterName}>Raze</h3>
                </div>

                <div className={styles.characterContainer}  style={{borderColor: chosenValorantCharacter == "Reyna" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Reyna" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "reyna" + ".png"} />
                  <h3 className={styles.characterName}>Reyna</h3>
                </div>

                <div className={styles.characterContainer}  style={{borderColor: chosenValorantCharacter == "Sage" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Sage" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "sage" + ".png"} />
                  <h3 className={styles.characterName}>Sage</h3>
                </div>

                <div className={styles.characterContainer}  style={{borderColor: chosenValorantCharacter == "Skye" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Skye" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "skye" + ".png"} />
                  <h3 className={styles.characterName}>Skye</h3>
                </div>

                <div className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == "Sova" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Sova" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "sova" + ".png"} />
                  <h3 className={styles.characterName}>Sova</h3>
                </div>

                <div className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == "Viper" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Viper" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "viper" + ".png"} />
                  <h3 className={styles.characterName}>Viper</h3>
                </div>

                <div className={styles.characterContainer} style={{borderColor: chosenValorantCharacter == "Yoru" ? 'gold' : 'red', boxShadow: chosenValorantCharacter == "Yoru" ? '-2px 10px 34px 0px rgba(255,215,0,0.75) inset' : ""}}>
                  <img className={styles.characterImage} src={"/images/characters/" + "yoru" + ".png"} />
                  <h3 className={styles.characterName}>Yoru</h3>
                </div>

                <ReactAudioPlayer
                  src={characterVoiceLine}
                  autoPlay="true"
                />

            </div>
        </div>
      </main>
    </div>
  )
}
