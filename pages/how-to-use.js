import React from 'react'

import { useRouter } from 'next/router';
const HowToUse = () => {

  const router = useRouter();
  return (
    <div style={{color: 'white'}}>
      <h1>How To Use Valorant Randomizer</h1>
      <h3>Step 1</h3>
      <img src='/how-to-use-images-videos/images/character-selection.png' />
      <h3>Step 2</h3>
      <img src='/how-to-use-images-videos/images/character-selection-2.png' />
      <h3>Step 3</h3>
      <img src='/how-to-use-images-videos/images/character-gun-mission.png' />
      <h3>That's About It! Here's a Quick Demo:</h3>
      
      <video style={{width: '800px', height: '800px'}}controls>
        <source src="/how-to-use-images-videos/video/demo-video.mov" type="video/mov" />
        <source src="/how-to-use-images-videos/video/demo-video.mp4" type="video/mp4" />
        Your browser does not support the demo video.
      </video>

      <button onClick={() => {
        router.push('/');
      }}>Play Valorant Randomizer</button>
    </div>
  )
}

export default HowToUse