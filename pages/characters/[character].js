import React from 'react'

import { useState, useEffect } from 'react'

const Character = ({characterInfoDatum, missions}) => {
  console.log(missions);

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
  }, [])
  return (
    <main>
      <div>
        <img src={"/images/characters/" + characterInfoDatum.name.toLowerCase() + ".png"} />
        <h3>{characterInfoDatum.name}</h3>
        <p>{characterInfoDatum.role}</p>

        <button onClick={() => {
          let randomIndex = Math.floor(Math.random() * guns.length);
          let randomGun = guns[randomIndex];
          setChosenGun(randomGun);

          let randomIndex2 = Math.floor(Math.random() * missions.length);
          let randomMission = missions[randomIndex2].mission;
          setChosenMission(randomMission);
        }}>New Round, New Roll!</button>
        
        <button onClick={() => {
          let randomIndex = Math.floor(Math.random() * guns.length);
          let randomGun = guns[randomIndex];
          setChosenGun(randomGun);
        }}>Can&apos;t Afford the Gun?</button>
        <h2>Gun</h2>
        <img src={"/images/guns/" + chosenGun + ".png"} />
        <h2>Mission</h2>
        <p>{chosenMission.replace(',','&apos')}</p>
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