import React from 'react'

const Character = ({character}) => {
  return (
    <main>
      <div>
        <img src={"/images/characters/" + character + ".png"} />
        <h3>{character}</h3>
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
  const character = pageContext.params.character;
  return {
    props: {
      character: character,
    }
  }
}